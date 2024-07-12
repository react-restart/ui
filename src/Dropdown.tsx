import qsa from 'dom-helpers/querySelectorAll';
import addEventListener from 'dom-helpers/addEventListener';
import { useCallback, useRef, useEffect, useMemo, useContext } from 'react';
import * as React from 'react';
import { useUncontrolledProp } from 'uncontrollable';
import usePrevious from '@restart/hooks/usePrevious';
import useForceUpdate from '@restart/hooks/useForceUpdate';
import useEventListener from '@restart/hooks/useEventListener';
import useEventCallback from '@restart/hooks/useEventCallback';

import DropdownContext from './DropdownContext';
import DropdownMenu, {
  DropdownMenuProps,
  UseDropdownMenuMetadata,
  UseDropdownMenuOptions,
} from './DropdownMenu';
import DropdownToggle, {
  DropdownToggleProps,
  UseDropdownToggleMetadata,
  isRoleMenu,
} from './DropdownToggle';
import DropdownItem, { DropdownItemProps } from './DropdownItem';
import SelectableContext from './SelectableContext';
import { SelectCallback } from './types';
import { dataAttr } from './DataKey';
import { Placement } from './usePopper';
import useWindow from './useWindow';

export type {
  DropdownMenuProps,
  UseDropdownMenuMetadata,
  UseDropdownMenuOptions,
  DropdownToggleProps,
  UseDropdownToggleMetadata,
  DropdownItemProps,
};

export interface DropdownInjectedProps {
  onKeyDown: React.KeyboardEventHandler;
}

export type ToggleEvent = React.SyntheticEvent | KeyboardEvent | MouseEvent;

export interface ToggleMetadata {
  source: string | undefined;
  originalEvent: ToggleEvent | undefined;
}

export interface DropdownProps {
  /**
   * The PopperJS placement for positioning the Dropdown menu in relation to
   * its Toggle.
   *
   * @default 'bottom-start'
   */
  placement?: Placement;

  /**
   * Sets the initial visibility of the Dropdown.
   */
  defaultShow?: boolean;

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show?: boolean;

  /**
   * A callback fired when a DropdownItem has been selected.
   */
  onSelect?: SelectCallback;

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with
   * the requested `show` value, the DOM event, and the source that fired it:
   * `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   nextShow: boolean,
   *   meta: ToggleMetadata,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle?: (nextShow: boolean, meta: ToggleMetadata) => void;

  /**
   * A css selector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector?: string;

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring
   * practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow?: boolean | 'keyboard';

  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: React.ReactNode;
}

function useRefWithUpdate() {
  const forceUpdate = useForceUpdate();
  const ref = useRef<HTMLElement | null>(null);
  const attachRef = useCallback(
    (element: null | HTMLElement) => {
      ref.current = element;
      // ensure that a menu set triggers an update for consumers
      forceUpdate();
    },
    [forceUpdate],
  );
  return [ref, attachRef] as const;
}

/**
 * @displayName Dropdown
 * @public
 */
function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${dataAttr('dropdown-item')}]`,
  focusFirstItemOnShow,
  placement = 'bottom-start',
  children,
}: DropdownProps) {
  const window = useWindow();
  const [show, onToggle] = useUncontrolledProp(
    rawShow,
    defaultShow!,
    rawOnToggle,
  );

  // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set
  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;

  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;

  const lastShow = usePrevious(show);
  const lastSourceEvent = useRef<string | null>(null);
  const focusInDropdown = useRef(false);
  const onSelectCtx = useContext(SelectableContext);

  const toggle = useCallback(
    (
      nextShow: boolean,
      event: ToggleEvent | undefined,
      source: string | undefined = event?.type,
    ) => {
      onToggle(nextShow, { originalEvent: event, source });
    },
    [onToggle],
  );

  const handleSelect = useEventCallback(
    (key: string | null, event: React.SyntheticEvent) => {
      onSelect?.(key, event);
      toggle(false, event, 'select');

      if (!event.isPropagationStopped()) {
        onSelectCtx?.(key, event);
      }
    },
  );

  const context = useMemo(
    () => ({
      toggle,
      placement,
      show,
      menuElement,
      toggleElement,
      setMenu,
      setToggle,
    }),
    [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle],
  );

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(
      menuElement.ownerDocument.activeElement,
    );
  }

  const focusToggle = useEventCallback(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });

  const maybeFocusFirst = useEventCallback(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType =
        menuRef.current && isRoleMenu(menuRef.current) ? 'keyboard' : false;
    }

    if (
      focusType === false ||
      (focusType === 'keyboard' && !/^key.+$/.test(type!))
    ) {
      return;
    }

    const first = qsa(menuRef.current!, itemSelector)[0];

    if (first && first.focus) first.focus();
  });

  useEffect(() => {
    if (show) maybeFocusFirst();
    else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    }
    // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);

  useEffect(() => {
    lastSourceEvent.current = null;
  });

  const getNextFocusedChild = (current: HTMLElement, offset: number) => {
    if (!menuRef.current) return null;

    const items = qsa(menuRef.current, itemSelector);

    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));

    return items[index];
  };

  useEventListener(
    useCallback(() => window!.document, [window]),
    'keydown',
    (event: KeyboardEvent) => {
      const { key } = event;
      const target = event.target as HTMLElement;

      const fromMenu = menuRef.current?.contains(target);
      const fromToggle = toggleRef.current?.contains(target);

      // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
      // in inscrutability
      const isInput = /input|textarea/i.test(target.tagName);
      if (
        isInput &&
        (key === ' ' ||
          (key !== 'Escape' && fromMenu) ||
          (key === 'Escape' && (target as HTMLInputElement).type === 'search'))
      ) {
        return;
      }

      if (!fromMenu && !fromToggle) {
        return;
      }

      if (key === 'Tab' && (!menuRef.current || !show)) {
        return;
      }

      lastSourceEvent.current = event.type;
      const meta = { originalEvent: event, source: event.type };
      switch (key) {
        case 'ArrowUp': {
          const next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();

          return;
        }
        case 'ArrowDown':
          event.preventDefault();
          if (!show) {
            onToggle(true, meta);
          } else {
            const next = getNextFocusedChild(target, 1);
            if (next && next.focus) next.focus();
          }
          return;
        case 'Tab':
          // on keydown the target is the element being tabbed FROM, we need that
          // to know if this event is relevant to this dropdown (e.g. in this menu).
          // On `keyup` the target is the element being tagged TO which we use to check
          // if focus has left the menu
          addEventListener(
            target.ownerDocument as any,
            'keyup',
            (e) => {
              if (
                (e.key === 'Tab' && !e.target) ||
                !menuRef.current?.contains(e.target as HTMLElement)
              ) {
                onToggle(false, meta);
              }
            },
            { once: true },
          );
          break;
        case 'Escape':
          if (key === 'Escape') {
            event.preventDefault();
            event.stopPropagation();
          }

          onToggle(false, meta);
          break;
        default:
      }
    },
  );

  return (
    <SelectableContext.Provider value={handleSelect}>
      <DropdownContext.Provider value={context}>
        {children}
      </DropdownContext.Provider>
    </SelectableContext.Provider>
  );
}

Dropdown.displayName = 'Dropdown';

Dropdown.Menu = DropdownMenu;
Dropdown.Toggle = DropdownToggle;
Dropdown.Item = DropdownItem;

export default Dropdown;
