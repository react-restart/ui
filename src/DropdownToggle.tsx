import { useContext, useCallback } from 'react';
import * as React from 'react';
import { useSSRSafeId } from './ssr';
import DropdownContext, { DropdownContextValue } from './DropdownContext';

export const isRoleMenu = (el: HTMLElement) =>
  el.getAttribute('role')?.toLowerCase() === 'menu';

export interface UseDropdownToggleProps {
  id: string;
  ref: DropdownContextValue['setToggle'];
  onClick: React.MouseEventHandler;
  'aria-expanded': boolean;
  'aria-haspopup'?: true;
}

export interface UseDropdownToggleMetadata {
  show: DropdownContextValue['show'];
  toggle: DropdownContextValue['toggle'];
}

const noop = () => {};

/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */
export function useDropdownToggle(): [
  UseDropdownToggleProps,
  UseDropdownToggleMetadata,
] {
  const id = useSSRSafeId();
  const { show = false, toggle = noop, setToggle, menuElement } =
    useContext(DropdownContext) || {};
  const handleClick = useCallback(
    (e) => {
      toggle(!show, e);
    },
    [show, toggle],
  );

  const props: UseDropdownToggleProps = {
    id,
    ref: setToggle || noop,
    onClick: handleClick,
    'aria-expanded': !!show,
  };

  // This is maybe better down in an effect, but
  // the component is going to update anyway when the menu element
  // is set so might return new props.
  if (menuElement && isRoleMenu(menuElement)) {
    props['aria-haspopup'] = true;
  }

  return [props, { show, toggle }];
}

export interface DropdownToggleProps {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   *   meta: {
   *     show: boolean,
   *     toggle: (show: boolean) => void,
   *   }
   * }) => React.Element}
   */
  children: (
    props: UseDropdownToggleProps,
    meta: UseDropdownToggleMetadata,
  ) => React.ReactNode;
}

/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */
function DropdownToggle({ children }: DropdownToggleProps) {
  const [props, meta] = useDropdownToggle();

  return <>{children(props, meta)}</>;
}

DropdownToggle.displayName = 'DropdownToggle';

/** @component */
export default DropdownToggle;
