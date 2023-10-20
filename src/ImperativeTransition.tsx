import useMergedRefs from '@restart/hooks/useMergedRefs';
import useEventCallback from '@restart/hooks/useEventCallback';
import useIsomorphicEffect from '@restart/hooks/useIsomorphicEffect';
import React, {
  useRef,
  cloneElement,
  useState,
  ReactElement,
  useCallback,
} from 'react';
import { ReactTransitionGroupComponent, TransitionProps } from './types';
import NoopTransition from './NoopTransition';

export interface TransitionFunctionOptions {
  in: boolean;
  element: HTMLElement;
  initial: boolean;
  isStale: () => boolean;
}

export type TransitionHandler = (
  options: TransitionFunctionOptions,
) => void | Promise<void>;

export interface UseTransitionOptions {
  in: boolean;
  onTransition: TransitionHandler;
  initial?: boolean;
}

export function useTransition({
  in: inProp,
  onTransition,
}: UseTransitionOptions) {
  const ref = useRef<HTMLElement>(null);
  const isInitialRef = useRef(true);
  const handleTransition = useEventCallback(onTransition);

  useIsomorphicEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    let stale = false;

    handleTransition({
      in: inProp,
      element: ref.current!,
      initial: isInitialRef.current,
      isStale: () => stale,
    });
    return () => {
      stale = true;
    };
  }, [inProp, handleTransition]);

  useIsomorphicEffect(() => {
    isInitialRef.current = false;
    // this is for strict mode
    return () => {
      isInitialRef.current = true;
    };
  }, []);

  return ref;
}

export interface ImperativeTransitionProps extends TransitionProps {
  transition: TransitionHandler;
  // eslint-disable-next-line react/no-unused-prop-types
  appear: true;
  // eslint-disable-next-line react/no-unused-prop-types
  mountOnEnter: true;
  // eslint-disable-next-line react/no-unused-prop-types
  unmountOnExit: true;
}

/**
 * Adapts an imperative transition function to a subset of the RTG `<Transition>` component API.
 *
 * ImperativeTransition does not support mounting options or `appear` at the moment, meaning
 * that it always acts like: `mountOnEnter={true} unmountOnExit={true} appear={true}`
 */
export default function ImperativeTransition({
  children,
  in: inProp,
  onExited,
  onEntered,
  transition,
}: ImperativeTransitionProps) {
  const [exited, setExited] = useState(!inProp);

  // TODO: I think this needs to be in an effect
  if (inProp && exited) {
    setExited(false);
  }

  const ref = useTransition({
    in: !!inProp,
    onTransition: (options) => {
      const onFinish = () => {
        if (options.isStale()) return;

        if (options.in) {
          onEntered?.(options.element, options.initial);
        } else {
          setExited(true);
          onExited?.(options.element);
        }
      };

      Promise.resolve(transition(options)).then(onFinish, (error) => {
        if (!options.in) setExited(true);
        throw error;
      });
    },
  });

  const combinedRef = useMergedRefs(ref, (children as any).ref);

  return exited && !inProp
    ? null
    : cloneElement(children, { ref: combinedRef });
}

export interface RenderTransitionProps {
  component: ReactTransitionGroupComponent | undefined;
  nodeRef: React.RefObject<HTMLElement>;
  props: Omit<ImperativeTransitionProps, 'transition'>;
  runTransition: TransitionHandler | undefined;
}
export function RenderTransition({
  component: Component,
  nodeRef,
  props,
  runTransition,
}: RenderTransitionProps): ReactElement {
  const { onExit, onExiting, onExited, onEnter, onEntering, onEntered } = props;

  /** react-transition-group does not supply an HTMLElement as its first
   * positional argument in its callback functions when nodeRef is provided.
   * Supply this argument so that any callback functions supplied through props
   * continue to receive an HTMLElement as their first argument */
  const handleExit = useCallback(() => {
    onExit?.(nodeRef.current!);
  }, [nodeRef, onExit]);
  const handleExiting = useCallback(() => {
    onExiting?.(nodeRef.current!);
  }, [nodeRef, onExiting]);
  const handleExited = useCallback(() => {
    onExited?.(nodeRef.current!);
  }, [nodeRef, onExited]);
  const handleEnter = useCallback(
    (isAppearing: boolean) => {
      onEnter?.(nodeRef.current!, isAppearing);
    },
    [nodeRef, onEnter],
  );
  const handleEntering = useCallback(
    (isAppearing: boolean) => {
      onEntering?.(nodeRef.current!, isAppearing);
    },
    [nodeRef, onEntering],
  );
  const handleEntered = useCallback(
    (isAppearing: boolean) => {
      onEntered?.(nodeRef.current!, isAppearing);
    },
    [nodeRef, onEntered],
  );
  if (Component) {
    const DefinedComponent = Component as ReactTransitionGroupComponent;
    return (
      <DefinedComponent
        {...props}
        nodeRef={nodeRef}
        onExit={handleExit}
        onExiting={handleExiting}
        onExited={handleExited}
        onEnter={handleEnter}
        onEntering={handleEntering}
        onEntered={handleEntered}
      />
    );
  }
  const imperativeProps = props as Omit<
    ImperativeTransitionProps,
    'transition'
  >;
  if (runTransition) {
    return (
      <ImperativeTransition {...imperativeProps} transition={runTransition} />
    );
  }

  return <NoopTransition {...imperativeProps} />;
}
