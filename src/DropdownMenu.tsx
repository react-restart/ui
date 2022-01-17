import { useContext, useRef } from 'react';
import * as React from 'react';
import useCallbackRef from '@restart/hooks/useCallbackRef';
import DropdownContext, { DropdownContextValue } from './DropdownContext';
import usePopper, {
  UsePopperOptions,
  Placement,
  Offset,
  UsePopperState,
} from './usePopper';
import useClickOutside, { ClickOutsideOptions } from './useClickOutside';
import mergeOptionsWithPopperConfig from './mergeOptionsWithPopperConfig';

export interface UseDropdownMenuOptions {
  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or
   * toggle. See the [flip docs](https://popper.js.org/docs/v2/modifiers/flip/)
   * for more info.
   */
  flip?: boolean;

  /**
   * Controls the visible state of the menu, generally this is provided by the
   * parent `Dropdown` component, but may also be specified as a prop directly.
   */
  show?: boolean;

  /**
   * Use the `fixed` positioning strategy in Popper. This is used if the
   * dropdown toggle is in a fixed container.
   */
  fixed?: boolean;

  /**
   * The PopperJS placement for positioning the Dropdown menu in relation to it's Toggle.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  placement?: Placement;

  /**
   * Whether or not to use Popper for positioning the menu.
   */
  usePopper?: boolean;

  /**
   * Whether or not to add scroll and resize listeners to update menu position.
   *
   * See the [event listeners docs](https://popper.js.org/docs/v2/modifiers/event-listeners/)
   * for more info.
   */
  enableEventListeners?: boolean;

  /**
   * Offset of the dropdown menu from the dropdown toggle. See the
   * [offset docs](https://popper.js.org/docs/v2/modifiers/offset/) for more info.
   */
  offset?: Offset;

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent?: ClickOutsideOptions['clickTrigger'];

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig?: Omit<UsePopperOptions, 'enabled' | 'placement'>;
}

export type UserDropdownMenuProps = Record<string, any> & {
  ref: React.RefCallback<HTMLElement>;
  style?: React.CSSProperties;
  'aria-labelledby'?: string;
};

export type UserDropdownMenuArrowProps = Record<string, any> & {
  ref: React.RefCallback<HTMLElement>;
  style: React.CSSProperties;
};

export interface UseDropdownMenuMetadata {
  show: boolean;
  placement?: Placement;
  hasShown: boolean;
  toggle?: DropdownContextValue['toggle'];
  popper: UsePopperState | null;
  arrowProps: Partial<UserDropdownMenuArrowProps>;
}

const noop: any = () => {};

/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */
export function useDropdownMenu(options: UseDropdownMenuOptions = {}) {
  const context = useContext(DropdownContext);

  const [arrowElement, attachArrowRef] = useCallbackRef<Element>();

  const hasShownRef = useRef(false);

  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context,
  } = options;

  const show = context?.show == null ? !!options.show : context.show;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  const handleClose = (e: React.SyntheticEvent | Event) => {
    context?.toggle(false, e);
  };

  const { placement, setMenu, menuElement, toggleElement } = context || {};

  const popper = usePopper(
    toggleElement,
    menuElement,
    mergeOptionsWithPopperConfig({
      placement: placementOverride || placement || 'bottom-start',
      enabled: shouldUsePopper,
      enableEvents: enableEventListeners == null ? show : enableEventListeners,
      offset,
      flip,
      fixed,
      arrowElement,
      popperConfig,
    }),
  );

  const menuProps: UserDropdownMenuProps = {
    ref: setMenu || noop,
    'aria-labelledby': toggleElement?.id,
    ...popper.attributes.popper,
    style: popper.styles.popper as any,
  };

  const metadata: UseDropdownMenuMetadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context?.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper
      ? {
          ref: attachArrowRef,
          ...popper.attributes.arrow,
          style: popper.styles.arrow as any,
        }
      : {},
  };

  useClickOutside(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show,
  });

  return [menuProps, metadata] as const;
}

const defaultProps = {
  usePopper: true,
};

export interface DropdownMenuProps extends UseDropdownMenuOptions {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should be spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: (
    props: UserDropdownMenuProps,
    meta: UseDropdownMenuMetadata,
  ) => React.ReactNode;
}

/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */
function DropdownMenu({ children, ...options }: DropdownMenuProps) {
  const [props, meta] = useDropdownMenu(options);

  return <>{children(props, meta)}</>;
}

DropdownMenu.displayName = 'DropdownMenu';

DropdownMenu.defaultProps = defaultProps;

/** @component */
export default DropdownMenu;
