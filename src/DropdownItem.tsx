import * as React from 'react';
import { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';

import SelectableContext, { makeEventKey } from './SelectableContext';
import NavContext from './NavContext';

import { EventKey, DynamicRefForwardingComponent } from './types';
import Button from './Button';
import { dataAttr } from './DataKey';

export interface DropdownItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: React.ElementType;

  /**
   * Highlight the menu item as active.
   */
  active?: boolean;

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled?: boolean;

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey?: EventKey;

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href?: string;
}

interface UseDropdownItemOptions {
  key?: EventKey | null;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

/**
 * Create a dropdown item. Returns a set of props for the dropdown item component
 * including an `onClick` handler that prevents selection when the item is disabled
 */
export function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick,
}: UseDropdownItemOptions) {
  const onSelectCtx = useContext(SelectableContext);
  const navContext = useContext(NavContext);

  const { activeKey } = navContext || {};
  const eventKey = makeEventKey(key, href);

  const isActive =
    active == null && key != null
      ? makeEventKey(activeKey) === eventKey
      : active;

  const handleClick = useEventCallback((event) => {
    if (disabled) return;

    onClick?.(event);

    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });

  return [
    {
      onClick: handleClick,
      'aria-disabled': disabled || undefined,
      'aria-selected': isActive,
      [dataAttr('dropdown-item')]: '',
    },
    { isActive },
  ] as const;
}

const DropdownItem: DynamicRefForwardingComponent<
  typeof Button,
  DropdownItemProps
> = React.forwardRef(
  (
    {
      eventKey,
      disabled,
      onClick,
      active,
      as: Component = Button,
      ...props
    }: DropdownItemProps,
    ref,
  ) => {
    const [dropdownItemProps] = useDropdownItem({
      key: eventKey,
      href: props.href,
      disabled,
      onClick,
      active,
    });

    return <Component {...props} ref={ref} {...dropdownItemProps} />;
  },
);

DropdownItem.displayName = 'DropdownItem';

export default DropdownItem;
