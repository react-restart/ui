import React from 'react';
import useWaypoint, {
  WaypointOptions,
  WaypointEvent,
  Position,
} from './useWaypoint';

export type { Position, WaypointEvent };

const defaultRenderComponent = (ref: any) => (
  <span ref={ref} style={{ fontSize: 0 }} />
);

export interface WaypointProps extends WaypointOptions {
  renderComponent?: (ref: React.RefCallback<any>) => React.ReactElement;
}

/**
 * A component that tracks when it enters or leaves the viewport. Implemented
 * using IntersectionObserver, polyfill may be required for older browsers.
 */
function Waypoint({
  renderComponent = defaultRenderComponent,
  ...options
}: WaypointProps) {
  const [attachRef] = useWaypoint(options);

  return renderComponent(attachRef);
}

export default Waypoint;
