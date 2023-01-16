import * as React from 'react';
import ReactDOM from 'react-dom';
import useCallbackRef from '@restart/hooks/useCallbackRef';
import useMergedRefs from '@restart/hooks/useMergedRefs';
import { useState } from 'react';
import usePopper, {
  Offset,
  Placement,
  UsePopperOptions,
  UsePopperState,
  VirtualElement,
} from './usePopper';
import useRootClose, { RootCloseOptions } from './useRootClose';
import useWaitForDOMRef, { DOMContainer } from './useWaitForDOMRef';
import { TransitionCallbacks, TransitionComponent } from './types';
import mergeOptionsWithPopperConfig from './mergeOptionsWithPopperConfig';
import { renderTransition, TransitionHandler } from './ImperativeTransition';

export interface OverlayArrowProps extends Record<string, any> {
  ref: React.RefCallback<HTMLElement>;
  style: React.CSSProperties;
}

export interface OverlayMetadata {
  show: boolean;
  placement: Placement | undefined;
  popper: UsePopperState | null;
  arrowProps: Partial<OverlayArrowProps>;
}

export interface OverlayInjectedProps extends Record<string, any> {
  ref: React.RefCallback<HTMLElement>;
  style: React.CSSProperties;
  'aria-labelledby'?: string;
}

export interface OverlayProps extends TransitionCallbacks {
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip?: boolean;

  /** Specify where the overlay element is positioned in relation to the target element */
  placement?: Placement;

  /**
   * Control offset of the overlay to the reference element.
   * A convenience shortcut to setting `popperConfig.modfiers.offset`
   */
  offset?: Offset;

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding?: number;

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig?: Omit<UsePopperOptions, 'placement'>;

  /**
   * A DOM Element, [Virtual Element](https://popper.js.org/docs/v2/virtual-elements/), Ref to an element, or
   * function that returns either. The `target` element is where the overlay is positioned relative to.
   */
  container?: DOMContainer;

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: DOMContainer<HTMLElement | VirtualElement>;

  /**
   * Set the visibility of the Overlay
   */
  show?: boolean;

  /**
   * A `react-transition-group` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition?: TransitionComponent;

  /**
   * A transition handler, called with the `show` state and overlay element.
   * Should return a promise when the transition is complete
   */
  runTransition?: TransitionHandler;

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide?: (e: Event) => void;

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose?: boolean;

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled?: boolean;

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent?: RootCloseOptions['clickTrigger'];

  /**
   * A render prop that returns an overlay element.
   */
  children: (
    props: OverlayInjectedProps,
    meta: OverlayMetadata,
  ) => React.ReactNode;
}

/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
const Overlay = React.forwardRef<HTMLElement, OverlayProps>(
  (props, outerRef) => {
    const {
      flip,
      offset,
      placement,
      containerPadding,
      popperConfig = {},
      transition: Transition,
      runTransition,
    } = props;

    const [rootElement, attachRef] = useCallbackRef<HTMLElement>();
    const [arrowElement, attachArrowRef] = useCallbackRef<Element>();
    const mergedRef = useMergedRefs<HTMLElement | null>(attachRef, outerRef);

    const container = useWaitForDOMRef(props.container);
    const target = useWaitForDOMRef(props.target);

    const [exited, setExited] = useState(!props.show);

    const hasTransition = !!(Transition || runTransition);

    const popper = usePopper(
      target,
      rootElement,
      mergeOptionsWithPopperConfig({
        placement,
        enableEvents: !!props.show,
        containerPadding: containerPadding || 5,
        flip,
        offset,
        arrowElement,
        popperConfig,
      }),
    );

    if (props.show) {
      if (exited) setExited(false);
    } else if (!hasTransition && !exited) {
      setExited(true);
    }

    const handleHidden: TransitionCallbacks['onExited'] = (...args) => {
      setExited(true);

      if (props.onExited) {
        props.onExited(...args);
      }
    };

    // Don't un-render the overlay while it's transitioning out.
    const mountOverlay = props.show || (hasTransition && !exited);

    useRootClose(rootElement, props.onHide!, {
      disabled: !props.rootClose || props.rootCloseDisabled,
      clickTrigger: props.rootCloseEvent,
    });

    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    const { onExit, onExiting, onEnter, onEntering, onEntered } = props;
    let child = props.children(
      {
        ...popper.attributes.popper,
        style: popper.styles.popper as any,
        ref: mergedRef,
      },
      {
        popper,
        placement,
        show: !!props.show,
        arrowProps: {
          ...popper.attributes.arrow,
          style: popper.styles.arrow as any,
          ref: attachArrowRef,
        },
      },
    ) as React.ReactElement;

    child = renderTransition(Transition, runTransition, {
      in: !!props.show,
      children: child,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered,
    });

    return container ? ReactDOM.createPortal(child, container) : null;
  },
);

Overlay.displayName = 'Overlay';

export default Overlay;
