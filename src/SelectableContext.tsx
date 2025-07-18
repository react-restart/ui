import * as React from 'react';
import type { EventKey, SelectCallback } from './types.js';

const SelectableContext = React.createContext<SelectCallback | null>(null);

export const makeEventKey = (
  eventKey?: EventKey | null,
  href: string | null = null,
): string | null => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};

export default SelectableContext;
