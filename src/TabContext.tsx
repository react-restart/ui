import * as React from 'react';
import { EventKey } from './types';

export interface TabContextType {
  onSelect: any;
  activeKey: any;
  transition: any;
  mountOnEnter: boolean;
  unmountOnExit: boolean;
  getControlledId: (key: EventKey) => any;
  getControllerId: (key: EventKey) => any;
}

const TabContext = React.createContext<TabContextType | null>(null);

export default TabContext;
