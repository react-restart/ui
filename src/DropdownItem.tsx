import PropTypes from 'prop-types';
import * as React from 'react';
import { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';

import SelectableContext, { makeEventKey } from './SelectableContext';
import NavContext from './NavContext';

import { EventKey, DynamicRefForwardingComponent } from './types';
import Button from './Button';
import { dataAttr } from './DataKey';

export interface DropdownItemProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  active?: boolean;
  disabled?: boolean;
  eventKey?: EventKey;
  href?: string;
}

const propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: PropTypes.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: PropTypes.bool,

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: PropTypes.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: PropTypes.func,

  /** @default Button */
  as: PropTypes.elementType,
};

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

  active =
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
      'aria-selected': active,
      [dataAttr('dropdown-item')]: '',
    },
    { active },
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

    return (
      // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
      // @ts-ignore
      <Component {...props} ref={ref} {...dropdownItemProps} />
    );
  },
);

DropdownItem.displayName = 'DropdownItem';
DropdownItem.propTypes = propTypes;

export default DropdownItem;
