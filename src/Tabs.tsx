import * as React from 'react';
import { useId, useMemo } from 'react';
import { useUncontrolledProp } from 'uncontrollable';

import TabContext, { type TabContextType } from './TabContext.js';
import SelectableContext from './SelectableContext.js';
import { EventKey, SelectCallback, TransitionComponent } from './types.js';
import TabPanel, { TabPanelProps } from './TabPanel.js';

export type { TabPanelProps };
export interface TabsProps extends React.PropsWithChildren<unknown> {
  id?: string;

  /**
   * Sets a default animation strategy for all children `<TabPanel>`s.
   * Use a react-transition-group `<Transition/>` component.
   */
  transition?: TransitionComponent;

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter?: boolean;

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit?: boolean;

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${props.id}-${type}-${eventKey}`
   */
  generateChildId?: (eventKey: EventKey, type: 'tab' | 'pane') => string;

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect?: SelectCallback;

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey?: EventKey;

  /**
   * Default value for `eventKey`.
   */
  defaultActiveKey?: EventKey;
}

const Tabs = (props: TabsProps) => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
  } = props;

  const [activeKey, onSelect] = useUncontrolledProp(
    propsActiveKey,
    defaultActiveKey,
    propsOnSelect,
  );

  const generatedId = useId();
  const id = userId ?? generatedId;

  const generateChildId = useMemo(
    () =>
      generateCustomChildId ||
      ((key: EventKey, type: string) => (id ? `${id}-${type}-${key}` : null)),
    [id, generateCustomChildId],
  );

  const tabContext: TabContextType = useMemo(
    () => ({
      onSelect,
      activeKey,
      transition,
      mountOnEnter: mountOnEnter || false,
      unmountOnExit: unmountOnExit || false,
      getControlledId: (key: EventKey) => generateChildId(key, 'pane'),
      getControllerId: (key: EventKey) => generateChildId(key, 'tab'),
    }),
    [
      onSelect,
      activeKey,
      transition,
      mountOnEnter,
      unmountOnExit,
      generateChildId,
    ],
  );

  return (
    <TabContext.Provider value={tabContext}>
      <SelectableContext.Provider value={onSelect || null}>
        {children}
      </SelectableContext.Provider>
    </TabContext.Provider>
  );
};

Tabs.Panel = TabPanel;
export default Tabs;
