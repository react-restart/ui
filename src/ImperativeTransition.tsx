import useMergedRefs from '@restart/hooks/useMergedRefs';
import useEventCallback from '@restart/hooks/useEventCallback';
import React, { useRef, useEffect, cloneElement, useState } from 'react';
import { TransitionComponent, TransitionProps } from './types';
import NoopTransition from './NoopTransition';

export interface TransitionFunctionOptions {
  in: boolean;
  element: HTMLElement;
  initial: boolean;
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

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    handleTransition({
      in: inProp,
      element: ref.current!,
      initial: isInitialRef.current,
    });
  }, [inProp, handleTransition]);

  useEffect(() => {
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

  const ref = useTransition({
    in: !!inProp,
    onTransition: (options) => {
      const onFinish = () => {
        if (options.in) {
          setExited(false);
          onEntered?.(options.element, options.initial);
        } else {
          setExited(true);
          onExited?.(options.element);
        }
      };

      Promise.resolve(transition(options)).then(onFinish);
    },
  });

  const combinedRef = useMergedRefs(ref, (children as any).ref);

  return exited && !inProp
    ? null
    : cloneElement(children, { ref: combinedRef });
}

export function renderTransition(
  Component: TransitionComponent | undefined,
  runTransition: TransitionHandler | undefined,
  props: TransitionProps & Omit<ImperativeTransitionProps, 'transition'>,
) {
  if (Component) {
    return <Component {...props} />;
  }
  if (runTransition) {
    return <ImperativeTransition {...props} transition={runTransition} />;
  }

  return <NoopTransition {...props} />;
}
