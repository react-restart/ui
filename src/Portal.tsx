import ReactDOM from 'react-dom';

import * as React from 'react';
import useWaitForDOMRef, { DOMContainer } from './useWaitForDOMRef';

export interface PortalProps {
  children: React.ReactElement;

  /**
   * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: DOMContainer;

  /**
   * Callback that is triggered when the portal content is rendered.
   */
  onRendered?: (element: any) => void;
}

/**
 * @public
 */
const Portal = ({ container, children, onRendered }: PortalProps) => {
  const resolvedContainer = useWaitForDOMRef(container, onRendered);

  return resolvedContainer ? (
    <>{ReactDOM.createPortal(children, resolvedContainer)}</>
  ) : null;
};

Portal.displayName = 'Portal';

export default Portal;
