import useMergedRefs from '@restart/hooks/useMergedRefs';
import useEventCallback from '@restart/hooks/useEventCallback';
import useIsomorphicEffect from '@restart/hooks/useIsomorphicEffect';
import { useRef, cloneElement, useState } from 'react';
import type { TransitionComponent, TransitionProps } from './types.js';
import NoopTransition from './NoopTransition.js';
import RTGTransition from './RTGTransition.js';
import { getChildRef } from './utils.js';

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

export interface ImperativeTransitionProps
  extends Omit<TransitionProps, 'appear' | 'mountOnEnter' | 'unmountOnExit'> {
  transition: TransitionHandler;
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

  const combinedRef = useMergedRefs(ref, getChildRef(children));

  return exited && !inProp
    ? null
    : cloneElement(children, { ref: combinedRef });
}

export function renderTransition(
  component: TransitionComponent | undefined,
  runTransition: TransitionHandler | undefined,
  props: TransitionProps & Omit<ImperativeTransitionProps, 'transition'>,
) {
  if (component) {
    return <RTGTransition {...props} component={component} />;
  }
  if (runTransition) {
    return <ImperativeTransition {...props} transition={runTransition} />;
  }

  return <NoopTransition {...props} />;
}
