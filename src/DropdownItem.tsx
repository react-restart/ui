import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';

import SelectableContext, { makeEventKey } from './SelectableContext';
import NavContext from './NavContext';
// import SafeAnchor from './SafeAnchor';
import {
  EventKey,
  DynamicRefForwardingComponent,
  SelectCallback,
} from './types';
import Button from './Button';
import { dataAttr } from './DataKey';

export interface DropdownItemProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  as?: React.ElementType;
  active?: boolean;
  disabled?: boolean;
  eventKey?: EventKey;
  href?: string;
  onSelect?: SelectCallback;
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
   * Callback fired when the menu item is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: PropTypes.func,

  /** @default Button */
  as: PropTypes.elementType,
};

interface UseDropdownItemOptions {
  key?: EventKey | null;
  active?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

export function useDropdownItem({
  key,
  active,
  disabled,
  onClick,
}: UseDropdownItemOptions) {
  const onSelectCtx = useContext(SelectableContext);
  const navContext = useContext(NavContext);

  const { activeKey } = navContext || {};

  active =
    active == null && key != null
      ? makeEventKey(activeKey) === makeEventKey(key)
      : active;

  const handleClick = useEventCallback((event) => {
    if (disabled) return;

    onClick?.(event);

    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(makeEventKey(key), event);
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
      key: makeEventKey(eventKey, props.href),
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
