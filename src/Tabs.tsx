import * as React from 'react';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useUncontrolledProp } from 'uncontrollable';
import { useSSRSafeId } from './ssr';

import TabContext, { TabContextType } from './TabContext';
import SelectableContext from './SelectableContext';
import { EventKey, SelectCallback, TransitionType } from './types';
import TabPanel, { TabPanelProps } from './TabPanel';

export type { TabPanelProps };
export interface TabsProps extends React.PropsWithChildren<unknown> {
  id?: string;
  transition?: TransitionType;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  generateChildId?: (eventKey: EventKey, type: 'tab' | 'pane') => string;
  onSelect?: SelectCallback;
  activeKey?: EventKey;
  defaultActiveKey?: EventKey;
}

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * Sets a default animation strategy for all children `<TabPane>`s.
   * Use a react-transition-group `<Transition/>` component.
   *
   * @type {{Transition | false}}
   * @default {Fade}
   */
  transition: PropTypes.oneOfType([
    PropTypes.oneOf([false]),
    PropTypes.elementType,
  ]),
  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: PropTypes.bool,

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
  generateChildId: PropTypes.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: PropTypes.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

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

  const id = useSSRSafeId(userId);

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
      getControlledId: (key: EventKey) => generateChildId(key, 'tabpane'),
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

Tabs.propTypes = propTypes;
Tabs.Panel = TabPanel;
export default Tabs;
