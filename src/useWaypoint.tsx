import { useCallbackRef } from '@restart/hooks';
import useEventCallback from '@restart/hooks/useEventCallback';
import useIntersectionObserver from '@restart/hooks/useIntersectionObserver';
import { useEffect, useRef } from 'react';

export interface WaypointEvent {
  position: Position;
  previousPosition: Position | null;
}

export interface Rect {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

/** Accepts all options an IntersectionOverserver accepts */
export interface WaypointOptions
  extends Omit<IntersectionObserverInit, 'rootMargin'> {
  /**
   * A valid CSS `margin` property or object containing the specific "top", "left", etc properties.
   * The root margin functionally adjusts the "size" of the viewport when considering the waypoint's
   * position. A positive margin will cause the waypoint to "enter" the waypoint early while a
   * negative margin will have the opposite effect.
   */
  rootMargin?: string | Rect;

  /**
   * Set the direction of the scroll to consider when tracking the waypoint's position
   */
  scrollDirection?: 'vertical' | 'horizontal';

  /**
   * The callback fired when a waypoint's position is updated. This generally
   * fires as a waypoint enters or exits the viewport but will also be called
   * on mount,
   */
  onPositionChange: (
    details: WaypointEvent,
    entry: IntersectionObserverEntry,
  ) => void;
}

export enum Position {
  ABOVE = 1,
  INSIDE,
  BELOW,
}

function toCss(margin?: string | Rect) {
  if (!margin || typeof margin === 'string') return margin;

  const { top = 0, right = 0, bottom = 0, left = 0 } = margin;

  return `${top}px ${right}px ${bottom}px ${left}px`;
}

export default function useWaypoint({
  root,
  rootMargin,
  threshold,
  onPositionChange,
  scrollDirection = 'vertical',
}: WaypointOptions) {
  const handlePositionChange = useEventCallback(onPositionChange);
  const prevYRef = useRef<number | null>(null);
  const prevPositionRef = useRef<Position | null>(null);

  const [element, attachRef] = useCallbackRef<HTMLElement>();
  const [entry] = useIntersectionObserver(element, {
    root,
    threshold,
    rootMargin: toCss(rootMargin),
  });

  useEffect(() => {
    if (!entry) return;

    const [start, end, point] =
      scrollDirection === 'vertical'
        ? (['top', 'bottom', 'y'] as const)
        : (['left', 'right', 'x'] as const);

    const { [point]: p } = entry.boundingClientRect;

    const rootStart = entry.rootBounds?.[start] || 0;
    const rootEnd = entry.rootBounds?.[end] || 0;

    let position: Position;
    if (p > rootEnd) {
      position = Position.BELOW;
    } else if (p < rootStart) {
      position = Position.ABOVE;
    } else {
      position = Position.INSIDE;
    }

    const previousPosition = prevPositionRef.current;
    prevYRef.current = p;

    if (previousPosition === position) {
      return;
    }

    handlePositionChange({ position, previousPosition }, entry);

    prevPositionRef.current = position;
  }, [entry, handlePositionChange, scrollDirection]);

  return [attachRef, entry] as const;
}
