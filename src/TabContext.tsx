import * as React from 'react';
import type { EventKey, SelectCallback, TransitionComponent } from './types.js';

export interface TabContextType {
  onSelect: SelectCallback;
  activeKey?: EventKey;
  transition?: TransitionComponent;
  mountOnEnter: boolean;
  unmountOnExit: boolean;
  getControlledId: (key: EventKey) => any;
  getControllerId: (key: EventKey) => any;
}

const TabContext = React.createContext<TabContextType | null>(null);

export default TabContext;
