import * as React from 'react';
import { useContext } from 'react';

import TabContext from './TabContext';
import SelectableContext, { makeEventKey } from './SelectableContext';
import {
  EventKey,
  DynamicRefForwardingComponent,
  TransitionCallbacks,
  TransitionComponent,
} from './types';
import NoopTransition from './NoopTransition';

export interface TabPanelProps
  extends TransitionCallbacks,
    React.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: React.ElementType;

  /**
   * A key that associates the `TabPanel` with it's controlling `NavLink`.
   */
  eventKey?: EventKey;

  /**
   * Toggles the active state of the TabPanel, this is generally controlled by `Tabs`.
   */
  active?: boolean;

  /**
   * Use animation when showing or hiding `<TabPanel>`s. Use a react-transition-group
   * `<Transition/>` component.
   */
  transition?: TransitionComponent;

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter?: boolean;

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit?: boolean;
}

export interface TabPanelMetadata extends TransitionCallbacks {
  eventKey?: EventKey;
  isActive?: boolean;
  transition?: TransitionComponent;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

export function useTabPanel({
  active,
  eventKey,
  mountOnEnter,
  transition,
  unmountOnExit,
  role = 'tabpanel',
  ...props
}: TabPanelProps): [any, TabPanelMetadata] {
  const context = useContext(TabContext);
  const {
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...remainingProps
  } = props;

  if (!context)
    return [
      {
        ...remainingProps,
        role,
      },
      {
        eventKey,
        isActive: active,
        mountOnEnter,
        transition,
        unmountOnExit,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
      },
    ];

  const { activeKey, getControlledId, getControllerId, ...rest } = context;
  const key = makeEventKey(eventKey);

  return [
    {
      ...remainingProps,
      role,
      id: getControlledId(eventKey!),
      'aria-labelledby': getControllerId(eventKey!),
    },
    {
      eventKey,
      isActive:
        active == null && key != null
          ? makeEventKey(activeKey) === key
          : active,
      transition: transition || rest.transition,
      mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
      unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
    },
  ];
}

const TabPanel: DynamicRefForwardingComponent<'div', TabPanelProps> =
  React.forwardRef<HTMLElement, TabPanelProps>(
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    ({ as: Component = 'div', ...props }, ref) => {
      const [
        tabPanelProps,
        {
          isActive,
          onEnter,
          onEntering,
          onEntered,
          onExit,
          onExiting,
          onExited,
          mountOnEnter,
          unmountOnExit,
          transition: Transition = NoopTransition,
        },
      ] = useTabPanel(props);
      // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
      // conflict with the top level one.
      return (
        <TabContext.Provider value={null}>
          <SelectableContext.Provider value={null}>
            <Transition
              in={isActive}
              onEnter={onEnter}
              onEntering={onEntering}
              onEntered={onEntered}
              onExit={onExit}
              onExiting={onExiting}
              onExited={onExited}
              mountOnEnter={mountOnEnter}
              unmountOnExit={unmountOnExit}
            >
              <Component
                {...tabPanelProps}
                ref={ref}
                hidden={!isActive}
                aria-hidden={!isActive}
              />
            </Transition>
          </SelectableContext.Provider>
        </TabContext.Provider>
      );
    },
  );

TabPanel.displayName = 'TabPanel';

export default TabPanel;
