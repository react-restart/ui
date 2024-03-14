import { cloneElement, useCallback, useRef } from 'react';
import useMergedRefs from '@restart/hooks/useMergedRefs';
import {
  TransitionProps as RTGTransitionProps,
  TransitionStatus,
} from 'react-transition-group/Transition';

export type TransitionProps = RTGTransitionProps & {
  children:
    | React.ReactElement
    | ((
        status: TransitionStatus,
        props: Record<string, unknown>,
      ) => React.ReactNode);
};

/**
 * Normalizes RTG transition callbacks with nodeRef to better support
 * strict mode.
 *
 * @param props Transition props.
 * @returns Normalized transition props.
 */
export default function useRTGTransitionProps({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  ...props
}: TransitionProps) {
  const nodeRef = useRef<HTMLElement>(null);
  const mergedRef = useMergedRefs(
    nodeRef,
    typeof children === 'function' ? null : (children as any).ref,
  );

  const normalize =
    (callback?: (node: HTMLElement, param: any) => void) => (param: any) => {
      if (callback && nodeRef.current) {
        callback(nodeRef.current, param);
      }
    };

  /* eslint-disable react-hooks/exhaustive-deps */
  const handleEnter = useCallback(normalize(onEnter), [onEnter]);
  const handleEntering = useCallback(normalize(onEntering), [onEntering]);
  const handleEntered = useCallback(normalize(onEntered), [onEntered]);
  const handleExit = useCallback(normalize(onExit), [onExit]);
  const handleExiting = useCallback(normalize(onExiting), [onExiting]);
  const handleExited = useCallback(normalize(onExited), [onExited]);
  const handleAddEndListener = useCallback(normalize(addEndListener), [
    addEndListener,
  ]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return {
    ...props,
    nodeRef,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    onExited: handleExited,
    addEndListener: handleAddEndListener,
    children:
      typeof children === 'function'
        ? (((status: TransitionStatus, innerProps: Record<string, unknown>) =>
            // TODO: Types for RTG missing innerProps, so need to cast.
            children(status, {
              ...innerProps,
              ref: mergedRef,
            })) as any)
        : cloneElement(children as React.ReactElement, {
            ref: mergedRef,
          }),
  };
}
