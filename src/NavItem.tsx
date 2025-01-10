import * as React from 'react';
import { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';

import NavContext from './NavContext';
import SelectableContext, { makeEventKey } from './SelectableContext';
import { EventKey, DynamicRefForwardingComponent } from './types';
import Button from './Button';
import { dataAttr } from './DataKey';
import TabContext from './TabContext';

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Highlight the NavItem as active.
   */
  active?: boolean;

  /**
   * Element used to render the component.
   */
  as?: React.ElementType;

  /**
   * Disable the NavItem, making it unselectable.
   */
  disabled?: boolean;

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected NavItem.
   */
  eventKey?: EventKey;

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href?: string;
}

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
  const tabContext = useContext(TabContext);

  let isActive = active;
  const props = { role } as any;

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';

    const contextControllerId = navContext.getControllerId(key ?? null);
    const contextControlledId = navContext.getControlledId(key ?? null);

    props[dataAttr('event-key')] = key;

    props.id = contextControllerId || id;

    isActive =
      active == null && key != null ? navContext.activeKey === key : active;

    /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */
    if (isActive || (!tabContext?.unmountOnExit && !tabContext?.mountOnEnter))
      props['aria-controls'] = contextControlledId;
  }

  if (props.role === 'tab') {
    props['aria-selected'] = isActive;

    if (!isActive) {
      props.tabIndex = -1;
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }
  }

  props.onClick = useEventCallback((e: React.MouseEvent) => {
    if (disabled) return;

    onClick?.(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });

  return [props, { isActive }] as const;
}

const NavItem: DynamicRefForwardingComponent<typeof Button, NavItemProps> =
  React.forwardRef<HTMLElement, NavItemProps>(
    ({ as: Component = Button, active, eventKey, ...options }, ref) => {
      const [props, meta] = useNavItem({
        key: makeEventKey(eventKey, options.href),
        active,
        ...options,
      });

      props[dataAttr('active')] = meta.isActive;

      return <Component {...options} {...props} ref={ref} />;
    },
  );

NavItem.displayName = 'NavItem';

export default NavItem;
