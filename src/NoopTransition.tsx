import useEventCallback from '@restart/hooks/useEventCallback';
import useMergedRefs from '@restart/hooks/useMergedRefs';
import { cloneElement, useEffect, useRef } from 'react';
import type { TransitionProps } from './types.js';
import { getChildRef } from './utils.js';

function NoopTransition({
  children,
  in: inProp,
  onExited,
  mountOnEnter,
  unmountOnExit,
}: TransitionProps) {
  const ref = useRef(null);
  const hasEnteredRef = useRef(inProp);
  const handleExited = useEventCallback(onExited);

  useEffect(() => {
    if (inProp) hasEnteredRef.current = true;
    else {
      handleExited(ref.current!);
    }
  }, [inProp, handleExited]);

  const combinedRef = useMergedRefs(ref, getChildRef(children));

  const child = cloneElement(children, { ref: combinedRef });

  if (inProp) return child;

  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return child;
}

export default NoopTransition;
