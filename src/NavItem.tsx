import PropTypes from 'prop-types';
import * as React from 'react';
import { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';

import NavContext from './NavContext';
import SelectableContext, { makeEventKey } from './SelectableContext';
import {
  EventKey,
  DynamicRefForwardingComponent,
  SelectCallback,
} from './types';
import Button from './Button';
import { dataAttr } from './DataKey';

export interface NavItemProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  active?: boolean;
  as?: React.ElementType;
  disabled?: boolean;
  eventKey?: EventKey;
  href?: string;
  tabIndex?: number;
  onSelect?: SelectCallback;
}

const propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
  role: PropTypes.string,

  href: PropTypes.string,
  tabIndex: PropTypes.number,
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  as: PropTypes.any,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,

  'aria-controls': PropTypes.string,
};

export interface UseNavItemOptions {
  key?: string | null;
  onClick?: React.MouseEventHandler;
  active?: boolean;
  disabled?: boolean;
  id?: string;
  role?: string;
}

export function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled,
}: UseNavItemOptions) {
  const parentOnSelect = useContext(SelectableContext);
  const navContext = useContext(NavContext);

  let isActive = active;
  const props = {} as any;

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';

    const contextControllerId = navContext.getControllerId(key ?? null);
    const contextControlledId = navContext.getControlledId(key ?? null);

    // @ts-ignore
    props[dataAttr('event-key')] = key;

    props.id = contextControllerId || id;
    props['aria-controls'] = contextControlledId;

    isActive =
      active == null && key != null ? navContext.activeKey === key : active;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }
    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = useEventCallback((e: React.MouseEvent) => {
    if (disabled) return;

    onClick?.(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect?.(key, e);
    }
  });

  return [props, { isActive }] as const;
}

const NavItem: DynamicRefForwardingComponent<
  typeof Button,
  NavItemProps
> = React.forwardRef<HTMLElement, NavItemProps>(
  ({ as: Component = Button, eventKey, href, ...options }, ref) => {
    const [props, meta] = useNavItem({
      key: makeEventKey(eventKey, href),
      ...options,
    });

    // @ts-ignore
    props[dataAttr('active')] = meta.isActive;

    return <Component {...options} {...props} ref={ref} />;
  },
);

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default NavItem;
