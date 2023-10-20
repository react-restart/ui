import * as React from 'react';
import ReactDOM from 'react-dom';
import useCallbackRef from '@restart/hooks/useCallbackRef';
import { useState, useRef, useCallback } from 'react';
import usePopper, {
  Offset,
  Placement,
  UsePopperOptions,
  UsePopperState,
  VirtualElement,
} from './usePopper';
import useRootClose, { RootCloseOptions } from './useRootClose';
import useWaitForDOMRef, { DOMContainer } from './useWaitForDOMRef';
import { ReactTransitionGroupComponent, TransitionCallbacks } from './types';
import mergeOptionsWithPopperConfig from './mergeOptionsWithPopperConfig';
import { RenderTransition, TransitionHandler } from './ImperativeTransition';

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
   * A convenience shortcut to setting `popperConfig.modifiers.offset`
   */
  offset?: Offset;

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modifiers.preventOverflow.padding`
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
  transition?: ReactTransitionGroupComponent;

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
  (
    {
      children,
      container: upstreamContainer,
      containerPadding,
      flip,
      offset,
      onExited,
      onHide,
      placement,
      popperConfig = {},
      rootClose,
      runTransition,
      show,
      target: upstreamTarget,
      transition: Transition,
      rootCloseDisabled,
      rootCloseEvent,
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered,
    },
    outerRef,
  ) => {
    /** Popper works best with HTMLElement objects rather than refs. */
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    /** react-transition-group requires a ref to an HTMLElement */
    const rootElementRef = useRef<HTMLElement | null>(null);
    /** Popper wants an HTMLElement baked into the render lifecycle, while
     * react-transition-group wants a RefObject. Update both instances in one
     * callback.
     */
    const setRootStateAndRef = useCallback((ref: HTMLElement | null) => {
      setRootElement(ref);
      rootElementRef.current = ref;
    }, []);
    /** Update the forwarded ref, if present. */
    React.useImperativeHandle<HTMLElement | null, HTMLElement | null>(
      outerRef,
      () => rootElement,
      [rootElement],
    );
    const [arrowElement, attachArrowRef] = useCallbackRef<Element>();

    const container = useWaitForDOMRef(upstreamContainer);
    const target = useWaitForDOMRef(upstreamTarget);

    const [exited, setExited] = useState(!show);

    const popper = usePopper(
      target,
      rootElement,
      mergeOptionsWithPopperConfig({
        placement,
        enableEvents: !!show,
        containerPadding: containerPadding || 5,
        flip,
        offset,
        arrowElement,
        popperConfig,
      }),
    );

    const handleHidden: TransitionCallbacks['onExited'] = (...args) => {
      setExited(true);

      if (onExited) {
        onExited(...args);
      }
    };

    useRootClose(rootElement, onHide!, {
      disabled: !rootClose || rootCloseDisabled,
      clickTrigger: rootCloseEvent,
    });

    if (!show && exited) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    const child = (
      <RenderTransition
        component={Transition}
        nodeRef={rootElementRef}
        runTransition={runTransition}
        props={{
          in: !!show,
          appear: true,
          mountOnEnter: true,
          unmountOnExit: true,
          children: children(
            {
              ...popper.attributes.popper,
              style: popper.styles.popper as any,
              ref: setRootStateAndRef,
            },
            {
              popper,
              placement,
              show: !!show,
              arrowProps: {
                ...popper.attributes.arrow,
                style: popper.styles.arrow as any,
                ref: attachArrowRef,
              },
            },
          ) as React.ReactElement,
          onExit,
          onExiting,
          onExited: handleHidden,
          onEnter,
          onEntering,
          onEntered,
        }}
      />
    );

    return container ? ReactDOM.createPortal(child, container) : null;
  },
);

Overlay.displayName = 'Overlay';

export default Overlay;
