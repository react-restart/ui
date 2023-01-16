/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */

import activeElement from 'dom-helpers/activeElement';
import contains from 'dom-helpers/contains';
import canUseDOM from 'dom-helpers/canUseDOM';
import listen from 'dom-helpers/listen';
import {
  useState,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import useMounted from '@restart/hooks/useMounted';
import useWillUnmount from '@restart/hooks/useWillUnmount';

import usePrevious from '@restart/hooks/usePrevious';
import useEventCallback from '@restart/hooks/useEventCallback';
import ModalManager from './ModalManager';
import useWaitForDOMRef, { DOMContainer } from './useWaitForDOMRef';
import { TransitionCallbacks } from './types';
import useWindow from './useWindow';
import { renderTransition, TransitionHandler } from './ImperativeTransition';

let manager: ModalManager;

export interface ModalTransitionProps extends TransitionCallbacks {
  in: boolean;
  appear?: boolean;
  unmountOnExit?: boolean;
  children: React.ReactElement;
}

export type ModalTransitionComponent =
  React.ComponentType<ModalTransitionProps>;

export interface RenderModalDialogProps {
  style: React.CSSProperties | undefined;
  className: string | undefined;
  tabIndex: number;
  role: string;
  ref: React.RefCallback<Element>;
  'aria-modal': boolean | undefined;
}

export interface RenderModalBackdropProps {
  ref: React.RefCallback<Element>;
  onClick: (event: React.SyntheticEvent) => void;
}

/*
  Modal props are split into a version with and without index signature so that you can fully use them in another projects
  This is due to Typescript not playing well with index singatures e.g. when using Omit
*/
export interface BaseModalProps extends TransitionCallbacks {
  children?: React.ReactElement;
  role?: string;
  style?: React.CSSProperties;
  className?: string;

  /**
   * Set the visibility of the Modal
   */
  show?: boolean;
  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   */
  container?: DOMContainer;
  /**
   * A callback fired when the Modal is opening.
   */
  onShow?: () => void;
  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide?: () => void;

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager?: ModalManager;

  /**
   * Include a backdrop component. A `static`backdrop
   * will not trigger a Modal onHide when clicked.
   */
  backdrop?: true | false | 'static';

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog?: (props: RenderModalDialogProps) => React.ReactNode;
  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop?: (props: RenderModalBackdropProps) => React.ReactNode;
  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown?: (e: KeyboardEvent) => void;
  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick?: (e: React.SyntheticEvent) => void;

  /**
   * Close the modal when escape key is pressed
   */
  keyboard?: boolean;

  /**
   * A `react-transition-group` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition?: ModalTransitionComponent;

  /**
   * A transition handler, called with the `show` state and dialog element.
   * Should return a promise when the transition is complete
   */
  runTransition?: TransitionHandler;

  /**
   * A `react-transition-group` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition?: ModalTransitionComponent;

  /**
   * A transition handler, called with the `show` state and backdrop element.
   * Should return a promise when the transition is complete
   */
  runBackdropTransition?: TransitionHandler;

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus?: boolean;
  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus?: boolean;

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus?: boolean;

  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions?: {
    preventScroll: boolean;
  };
}

export interface ModalProps extends BaseModalProps {
  [other: string]: any;
}

function getManager(window?: Window) {
  if (!manager) manager = new ModalManager({ ownerDocument: window?.document });
  return manager;
}

function useModalManager(provided?: ModalManager) {
  const window = useWindow();
  const modalManager = provided || getManager(window);

  const modal = useRef({
    dialog: null as any as HTMLElement,
    backdrop: null as any as HTMLElement,
  });

  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),

    remove: () => modalManager.remove(modal.current),

    isTopModal: () => modalManager.isTopModal(modal.current),

    setDialogRef: useCallback((ref: HTMLElement | null) => {
      modal.current.dialog = ref!;
    }, []),

    setBackdropRef: useCallback((ref: HTMLElement | null) => {
      modal.current.backdrop = ref!;
    }, []),
  });
}

export interface ModalHandle {
  dialog: HTMLElement | null;
  backdrop: HTMLElement | null;
}

const Modal: React.ForwardRefExoticComponent<
  ModalProps & React.RefAttributes<ModalHandle>
> = forwardRef(
  (
    {
      show = false,
      role = 'dialog',
      className,
      style,
      children,
      backdrop = true,
      keyboard = true,
      onBackdropClick,
      onEscapeKeyDown,
      transition,
      runTransition,

      backdropTransition,
      runBackdropTransition,

      autoFocus = true,
      enforceFocus = true,
      restoreFocus = true,
      restoreFocusOptions,
      renderDialog,
      renderBackdrop = (props: RenderModalBackdropProps) => <div {...props} />,
      manager: providedManager,
      container: containerRef,
      onShow,
      onHide = () => {},

      onExit,
      onExited,
      onExiting,
      onEnter,
      onEntering,
      onEntered,

      ...rest
    }: ModalProps,
    ref: React.Ref<ModalHandle>,
  ) => {
    const container = useWaitForDOMRef(containerRef);
    const modal = useModalManager(providedManager);

    const isMounted = useMounted();
    const prevShow = usePrevious(show);
    const [exited, setExited] = useState(!show);
    const lastFocusRef = useRef<HTMLElement | null>(null);
    const hasTransition = !!(transition || runTransition);

    useImperativeHandle(ref, () => modal, [modal]);

    if (canUseDOM && !prevShow && show) {
      lastFocusRef.current = activeElement() as HTMLElement;
    }

    if (!hasTransition && !show && !exited) {
      setExited(true);
    } else if (show && exited) {
      setExited(false);
    }

    const handleShow = useEventCallback(() => {
      modal.add();

      removeKeydownListenerRef.current = listen(
        document as any,
        'keydown',
        handleDocumentKeyDown,
      );

      removeFocusListenerRef.current = listen(
        document as any,
        'focus',
        // the timeout is necessary b/c this will run before the new modal is mounted
        // and so steals focus from it
        () => setTimeout(handleEnforceFocus),
        true,
      );

      if (onShow) {
        onShow();
      }

      // autofocus after onShow to not trigger a focus event for previous
      // modals before this one is shown.
      if (autoFocus) {
        const currentActiveElement = activeElement(document) as HTMLElement;

        if (
          modal.dialog &&
          currentActiveElement &&
          !contains(modal.dialog, currentActiveElement)
        ) {
          lastFocusRef.current = currentActiveElement;
          modal.dialog.focus();
        }
      }
    });

    const handleHide = useEventCallback(() => {
      modal.remove();

      removeKeydownListenerRef.current?.();
      removeFocusListenerRef.current?.();

      if (restoreFocus) {
        // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
        lastFocusRef.current?.focus?.(restoreFocusOptions);
        lastFocusRef.current = null;
      }
    });

    // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120

    // Show logic when:
    //  - show is `true` _and_ `container` has resolved
    useEffect(() => {
      if (!show || !container) return;

      handleShow();
    }, [show, container, /* should never change: */ handleShow]);

    // Hide cleanup logic when:
    //  - `exited` switches to true
    //  - component unmounts;
    useEffect(() => {
      if (!exited) return;

      handleHide();
    }, [exited, handleHide]);

    useWillUnmount(() => {
      handleHide();
    });

    // --------------------------------

    const handleEnforceFocus = useEventCallback(() => {
      if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
        return;
      }

      const currentActiveElement = activeElement();

      if (
        modal.dialog &&
        currentActiveElement &&
        !contains(modal.dialog, currentActiveElement)
      ) {
        modal.dialog.focus();
      }
    });

    const handleBackdropClick = useEventCallback((e: React.SyntheticEvent) => {
      if (e.target !== e.currentTarget) {
        return;
      }

      onBackdropClick?.(e);

      if (backdrop === true) {
        onHide();
      }
    });

    const handleDocumentKeyDown = useEventCallback((e: KeyboardEvent) => {
      if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
        onEscapeKeyDown?.(e);

        if (!e.defaultPrevented) {
          onHide();
        }
      }
    });

    const removeFocusListenerRef = useRef<ReturnType<typeof listen> | null>();
    const removeKeydownListenerRef = useRef<ReturnType<typeof listen> | null>();

    const handleHidden: TransitionCallbacks['onExited'] = (...args) => {
      setExited(true);
      onExited?.(...args);
    };

    if (!container || !(show || (hasTransition && !exited))) {
      return null;
    }

    const dialogProps = {
      role,
      ref: modal.setDialogRef,
      // apparently only works on the dialog role element
      'aria-modal': role === 'dialog' ? true : undefined,
      ...rest,
      style,
      className,
      tabIndex: -1,
    };

    let dialog = renderDialog ? (
      renderDialog(dialogProps)
    ) : (
      <div {...dialogProps}>
        {React.cloneElement(children!, { role: 'document' })}
      </div>
    );

    dialog = renderTransition(transition, runTransition, {
      unmountOnExit: true,
      appear: true,
      in: !!show,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered,
      children: dialog as React.ReactElement,
    });

    let backdropElement = null;
    if (backdrop) {
      backdropElement = renderBackdrop({
        ref: modal.setBackdropRef,
        onClick: handleBackdropClick,
      });

      backdropElement = renderTransition(
        backdropTransition,
        runBackdropTransition,
        {
          in: !!show,
          appear: true,
          unmountOnExit: true,
          children: backdropElement as React.ReactElement,
        },
      );
    }

    return (
      <>
        {ReactDOM.createPortal(
          <>
            {backdropElement}
            {dialog}
          </>,
          container,
        )}
      </>
    );
  },
);

Modal.displayName = 'Modal';

export default Object.assign(Modal, {
  Manager: ModalManager,
});
