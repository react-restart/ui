import { cloneElement, useCallback, useRef } from 'react';
import useMergedRefs from '@restart/hooks/useMergedRefs';
import {
  TransitionProps as RTGTransitionProps,
  TransitionStatus,
} from 'react-transition-group/Transition';
import { getReactVersion } from './utils';

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
  const { major } = getReactVersion();
  const childRef =
    major >= 19 ? (children as any).props.ref : (children as any).ref;

  const nodeRef = useRef<HTMLElement>(null);
  const mergedRef = useMergedRefs(
    nodeRef,
    typeof children === 'function' ? null : childRef,
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
    ...(onEnter && { onEnter: handleEnter }),
    ...(onEntering && { onEntering: handleEntering }),
    ...(onEntered && { onEntered: handleEntered }),
    ...(onExit && { onExit: handleExit }),
    ...(onExiting && { onExiting: handleExiting }),
    ...(onExited && { onExited: handleExited }),
    ...(addEndListener && { addEndListener: handleAddEndListener }),
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
