import useEventCallback from '@restart/hooks/useEventCallback';
import useIntersectionObserver from '@restart/hooks/useIntersectionObserver';
import { useMemo, useRef } from 'react';
import getScrollParent from 'dom-helpers/scrollParent';

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

export type WaypointCallback = (
  details: WaypointEvent,
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void;

export type RootElement = Element | Document | null | undefined;

/** Accepts all options an IntersectionObserver accepts */
export interface WaypointOptions
  extends Omit<IntersectionObserverInit, 'rootMargin' | 'root'> {
  /**
   * The "root" element to observe. This should be the scrollable view your waypoint
   * is rendered into. Accepts a DOM element, a function that returns a DOM element, `null`
   * indicating that the root is not ready yet, or the string "scrollParent" to
   * have the waypoint calculate the scroll parent itself.
   */
  root?: RootElement | 'scrollParent' | ((element: Element) => RootElement);

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
}

export enum Position {
  UNKNOWN = 0,
  BEFORE,
  INSIDE,
  AFTER,
}

function toCss(margin?: string | Rect) {
  if (!margin || typeof margin === 'string') return margin;

  const { top = 0, right = 0, bottom = 0, left = 0 } = margin;

  return `${top}px ${right}px ${bottom}px ${left}px`;
}

const findRoot = (el: Element) => getScrollParent(el as HTMLElement, true);

function useWaypoint(
  element: Element | null,
  callback: WaypointCallback,
  options: WaypointOptions = {},
): void {
  const { rootMargin, threshold, scrollDirection = 'vertical' } = options;
  let { root } = options;
  const handler = useEventCallback(callback);

  const prevPositionRef = useRef<Position | null>(null);

  if (root === 'scrollParent') {
    root = findRoot;
  }

  const scrollParent = useMemo(
    () => (element && typeof root === 'function' ? root(element) : null),

    [element, root],
  );

  let realRoot = typeof root === 'function' ? scrollParent : root;

  if (realRoot && realRoot.nodeType === document.DOCUMENT_NODE) {
    // explicit undefined means "use the viewport", instead of `null`
    // which means "no root yet". This works around a bug in safari
    // where document is not accepted in older versions,
    // or is accepted but doesn't work (as of v14)
    realRoot = undefined;
  }

  useIntersectionObserver(
    // We change the meaning of explicit null to "not provided yet"
    // this is to allow easier synchronizing between element and roots derived
    // from it. Otherwise if the root updates later an observer will be created
    // for the document and then for the root
    element,
    ([entry], observer) => {
      if (!entry) return;

      const [start, end, point] =
        scrollDirection === 'vertical'
          ? (['top', 'bottom', 'y'] as const)
          : (['left', 'right', 'x'] as const);

      const { [point]: coord } = entry.boundingClientRect;

      const rootStart = entry.rootBounds?.[start] || 0;
      const rootEnd = entry.rootBounds?.[end] || 0;

      // The position may remain UNKNOWN if the root
      // is 0 width/height or everything is hidden.
      let position: Position = Position.UNKNOWN;

      if (entry.isIntersecting) {
        position = Position.INSIDE;
      } else if (coord > rootEnd) {
        position = Position.AFTER;
      } else if (coord < rootStart) {
        position = Position.BEFORE;
      }

      const previousPosition = prevPositionRef.current;

      if (previousPosition === position) {
        return;
      }

      handler({ position, previousPosition }, entry, observer);

      prevPositionRef.current = position;
    },
    {
      threshold,
      root: realRoot,
      rootMargin: toCss(rootMargin),
    },
  );
}

export default useWaypoint;
