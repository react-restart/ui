import * as React from 'react';
import type { EventKey } from './types.js';

interface NavContextType {
  role?: string; // used by NavItem to determine it's role
  activeKey: EventKey | null;
  getControlledId: (key: EventKey | null) => string;
  getControllerId: (key: EventKey | null) => string;
}

const NavContext = React.createContext<NavContextType | null>(null);
NavContext.displayName = 'NavContext';

export default NavContext;
