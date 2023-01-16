import useMergedRefs from '@restart/hooks/useMergedRefs';
import useEventCallback from '@restart/hooks/useEventCallback';
import React, { useRef, useEffect, cloneElement } from 'react';
import { TransitionComponent, TransitionProps } from './types';

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
  initial = true,
}: UseTransitionOptions) {
  const ref = useRef<HTMLElement>(null);
  const isInitialRef = useRef(true);
  const handleTransition = useEventCallback(onTransition);

  useEffect(() => {
    if (isInitialRef.current && !initial) {
      return;
    }
    handleTransition({
      in: inProp,
      element: ref.current!,
      initial: isInitialRef.current,
    });
  }, [inProp, initial, handleTransition]);

  useEffect(() => {
    isInitialRef.current = false;
    return () => {
      isInitialRef.current = true;
    };
  }, []);

  return ref;
}

export interface ImperativeTransitionProps extends TransitionProps {
  transition: TransitionHandler;
}

/**
 * Adapts an imperative transition function to a subset of the RTG `<Transition>` component API.
 */
export default function ImperativeTransition({
  children,
  in: inProp,
  appear,
  onExited,
  onEntered,
  transition,
}: ImperativeTransitionProps) {
  const ref = useTransition({
    in: !!inProp,
    initial: appear,
    onTransition: (options) => {
      const onFinish = () => {
        if (options.in) onEntered?.(options.element, options.initial);
        else onExited?.(options.element);
      };

      Promise.resolve(transition(options)).then(onFinish);
    },
  });

  const combinedRef = useMergedRefs(ref, (children as any).ref);

  return cloneElement(children, { ref: combinedRef });
}

export function renderTransition(
  Component: TransitionComponent | undefined,
  runTransition: TransitionHandler | undefined,
  props: TransitionProps,
) {
  if (Component) {
    return <Component {...props} />;
  }
  if (runTransition) {
    return <ImperativeTransition {...props} transition={runTransition} />;
  }

  return props.children;
}
