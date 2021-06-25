import useCallbackRef from '@restart/hooks/useCallbackRef';
import * as React from 'react';

import useWaypoint, {
  WaypointOptions,
  WaypointEvent,
  Position,
} from './useWaypoint';

export { Position };
export type { WaypointEvent };

const defaultRenderComponent = (ref: React.RefCallback<any>) => (
  <span ref={ref} style={{ fontSize: 0 }} />
);

export interface WaypointProps extends WaypointOptions {
  renderComponent?: (ref: React.RefCallback<any>) => React.ReactElement;

  /**
   * The callback fired when a waypoint's position is updated. This generally
   * fires as a waypoint enters or exits the viewport but will also be called
   * on mount.
   */
  onPositionChange: (
    details: WaypointEvent,
    entry: IntersectionObserverEntry,
  ) => void;
}

/**
 * A component that tracks when it enters or leaves the viewport. Implemented
 * using IntersectionObserver, polyfill may be required for older browsers.
 */
function Waypoint({
  renderComponent = defaultRenderComponent,
  onPositionChange,
  ...options
}: WaypointProps) {
  const [element, setElement] = useCallbackRef<Element>();

  useWaypoint(element, onPositionChange, options);

  return renderComponent(setElement);
}

export default Waypoint;
