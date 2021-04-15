import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import TabContext from './TabContext';
import SelectableContext, { makeEventKey } from './SelectableContext';
import {
  EventKey,
  DynamicRefForwardingComponent,
  TransitionCallbacks,
  TransitionType,
} from './types';
import NoopTransition from './NoopTransition';

export interface TabPanelProps
  extends TransitionCallbacks,
    React.HTMLAttributes<HTMLElement> {
  as: React.ElementType;
  eventKey?: EventKey;
  active?: boolean;
  transition?: TransitionType;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

const propTypes = {
  as: PropTypes.elementType,

  /**
   * A key that associates the `TabPanel` with it's controlling `NavLink`.
   */
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Toggles the active state of the TabPanel, this is generally controlled by a
   * TabContainer.
   */
  active: PropTypes.bool,

  /**
   * Use animation when showing or hiding `<TabPanel>`s. Defaults to `<Fade>`
   * animation, else use `false` to disable or a react-transition-group
   * `<Transition/>` component.
   */
  transition: PropTypes.oneOfType([PropTypes.bool, PropTypes.elementType]),

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: PropTypes.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: PropTypes.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: PropTypes.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: PropTypes.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: PropTypes.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: PropTypes.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: PropTypes.bool,

  /** @ignore * */
  id: PropTypes.string,

  /** @ignore * */
  'aria-labelledby': PropTypes.string,
};

function useTabContext(props: TabPanelProps) {
  const context = useContext(TabContext);

  if (!context) return props;

  const { activeKey, getControlledId, getControllerId, ...rest } = context;
  const shouldTransition =
    props.transition !== false && rest.transition !== false;

  const key = makeEventKey(props.eventKey);

  return {
    ...props,
    active:
      props.active == null && key != null
        ? makeEventKey(activeKey) === key
        : props.active,
    id: getControlledId(props.eventKey!),
    'aria-labelledby': getControllerId(props.eventKey!),
    transition: shouldTransition && (props.transition || rest.transition),
    mountOnEnter:
      props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit:
      props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit,
  };
}

const TabPanel: DynamicRefForwardingComponent<
  'div',
  TabPanelProps
> = React.forwardRef<HTMLElement, TabPanelProps>((props, ref) => {
  const {
    active,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = NoopTransition,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    eventKey: _,
    ...rest
  } = useTabContext(props);

  if (!active && !Transition && unmountOnExit) return null;

  let pane = (
    <Component
      {...rest}
      ref={ref}
      role="tabpanel"
      hidden={!active}
      aria-hidden={!active}
    />
  );

  if (Transition) {
    pane = (
      <Transition
        in={active}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
      >
        {pane}
      </Transition>
    );
  }
  // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.
  return (
    <TabContext.Provider value={null}>
      <SelectableContext.Provider value={null}>
        {pane}
      </SelectableContext.Provider>
    </TabContext.Provider>
  );
});

TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = propTypes;

export default TabPanel;
