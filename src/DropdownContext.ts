import * as React from 'react';
import type { Placement } from './usePopper';

export type DropdownContextValue = {
  toggle: (
    nextShow: boolean,
    event?: React.SyntheticEvent | KeyboardEvent | MouseEvent,
  ) => void;
  menuElement: HTMLElement | null;
  toggleElement: HTMLElement | null;
  setMenu: (ref: HTMLElement | null) => void;
  setToggle: (ref: HTMLElement | null) => void;

  show: boolean;
  placement?: Placement;
};

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

export default DropdownContext;
