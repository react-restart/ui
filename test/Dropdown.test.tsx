/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';

import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { expect, describe, it, afterEach, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Dropdown from '../src/Dropdown';

describe('<Dropdown>', () => {
  const Menu = ({
    usePopper,
    rootCloseEvent,
    renderSpy,
    popperConfig,
    ...props
  }: any) => (
    <Dropdown.Menu
      flip
      usePopper={usePopper}
      popperConfig={popperConfig}
      rootCloseEvent={rootCloseEvent}
    >
      {(menuProps, meta) => {
        const { show, toggle } = meta;
        renderSpy?.(meta);

        return (
          <div
            {...props}
            {...menuProps}
            data-show={show}
            className="menu"
            data-testid="menu"
            onClick={() => toggle?.(false)}
            style={{ display: show ? 'flex' : 'none' }}
          />
        );
      }}
    </Dropdown.Menu>
  );

  const Toggle = (props) => (
    <Dropdown.Toggle>
      {(toggleProps) => (
        <button
          {...props}
          {...toggleProps}
          id="test-id"
          data-testid="toggle"
          type="button"
          className="toggle"
        />
      )}
    </Dropdown.Toggle>
  );

  const SimpleDropdown = ({ children, menuSpy, usePopper, ...outer }: any) => (
    <Dropdown {...outer}>
      {children || (
        <>
          <Toggle key="toggle">Child Title</Toggle>,
          <Menu key="menu" renderSpy={menuSpy} usePopper={usePopper}>
            <button type="button">Item 1</button>
            <button type="button">Item 2</button>
            <button type="button">Item 3</button>
            <button type="button">Item 4</button>
          </Menu>
        </>
      )}
    </Dropdown>
  );

  let focusableContainer;

  beforeEach(() => {
    focusableContainer = document.createElement('div');
    document.body.appendChild(focusableContainer);
  });

  afterEach(() => {
    document.body.removeChild(focusableContainer);
  });

  it('renders toggle with Dropdown.Toggle', () => {
    render(<SimpleDropdown />);

    const buttonNode = screen.getByTestId('toggle');

    expect(buttonNode.textContent).toMatch(/Child Title/);

    expect(buttonNode.getAttribute('aria-haspopup')).toEqual('true');
    expect(buttonNode.getAttribute('aria-expanded')).toEqual('false');
    expect(buttonNode.getAttribute('id')).toBeTruthy();
  });

  it('forwards alignEnd to menu', () => {
    const renderSpy = vi.fn((meta) => {
      expect(meta.alignEnd).toEqual(true);
    });

    render(
      <SimpleDropdown show alignEnd usePopper={false} menuSpy={renderSpy} />,
    );

    expect(renderSpy).toHaveBeenCalled();
  });

  // NOTE: The onClick event handler is invoked for both the Enter and Space
  // keys as well since the component is a button. I cannot figure out how to
  // get ReactTestUtils to simulate such though.
  it('toggles open/closed when clicked', async () => {
    render(<SimpleDropdown />);

    expect(screen.queryByTestId('menu')).toBeNull();

    const toggle = screen.getByTestId('toggle');

    expect(toggle.getAttribute('aria-expanded')).toEqual('false');

    await userEvent.click(toggle);

    const menu = screen.getByTestId('menu');

    expect(menu.classList.contains('show')).toBe(false);

    expect(document.querySelector('div[data-show=true]')).toBeTruthy();

    expect(toggle.getAttribute('aria-expanded')).toEqual('true');

    await userEvent.click(toggle);

    await waitFor(() => expect(menu.getAttribute('data-show')).toBe('false'));

    expect(menu.style.display).toBe('none');
    expect(toggle.getAttribute('aria-expanded')).toEqual('false');
  });

  it('closes when clicked outside', async () => {
    const closeSpy = vi.fn();

    render(<SimpleDropdown onToggle={closeSpy} />);

    const toggle = screen.getByTestId('toggle');

    expect(toggle.getAttribute('aria-expanded')).toEqual('false');

    await userEvent.click(toggle);

    await userEvent.click(document.body);

    expect(closeSpy).toBeCalledTimes(2);

    expect(closeSpy.mock.calls.at(-1)![0]).toBe(false);
  });

  it('closes when mousedown outside if rootCloseEvent set', async () => {
    const closeSpy = vi.fn();

    render(
      <Dropdown onToggle={closeSpy}>
        <div>
          <Toggle>Child Title</Toggle>,
          <Menu rootCloseEvent="mousedown">
            <button type="button">Item 1</button>
            <button type="button">Item 2</button>
          </Menu>
        </div>
      </Dropdown>,
    );

    const toggle = screen.getByTestId('toggle');

    await userEvent.click(toggle);

    // Use native events as the click doesn't have to be in the React portion
    const event = new MouseEvent('mousedown');
    document.dispatchEvent(event);

    expect(closeSpy).toBeCalledTimes(2);

    expect(closeSpy.mock.calls.at(-1)![0]).toBe(false);
  });

  it('when focused and closed toggles open when the key "down" is pressed', async () => {
    render(<SimpleDropdown />, {
      container: focusableContainer,
    });

    const toggle = screen.getByTestId('toggle');

    expect(screen.queryByTestId('menu')).toBe(null);

    fireEvent.keyDown(toggle, {
      key: 'ArrowDown',
    });

    expect(screen.getByTestId('menu').getAttribute('data-show')).toBe('true');
  });

  it('closes when item is clicked', async () => {
    const onToggle = vi.fn();

    render(<SimpleDropdown show onToggle={onToggle} />);

    expect(screen.getByTestId('menu').getAttribute('data-show')).toBe('true');

    fireEvent.click(screen.getByRole('button', { name: 'Item 1' }));

    expect(onToggle).toHaveBeenNthCalledWith(1, false, undefined);
  });

  it('does not close when onToggle is controlled', () => {
    const onToggle = vi.fn();

    render(<SimpleDropdown show onToggle={onToggle} />);

    fireEvent.click(screen.getByRole('button', { name: 'Item 1' }));

    expect(onToggle).toHaveBeenNthCalledWith(1, false, undefined);

    expect(screen.getByTestId('menu').getAttribute('data-show')).toBe('true');
  });

  it('has aria-labelledby same id as toggle button', () => {
    render(<SimpleDropdown defaultShow />);

    const toggle = screen.getByTestId('toggle');

    const menu = screen.getByTestId('menu');

    expect(menu.getAttribute('aria-labelledby')).toEqual(
      toggle.getAttribute('id'),
    );
  });

  describe('focusable state', () => {
    it('when focus should not be moved to first item when focusFirstItemOnShow is `false`', async () => {
      render(
        <Dropdown focusFirstItemOnShow={false}>
          <div>
            <Toggle>Child Title</Toggle>,
            <Menu>
              <button type="button">Item 1</button>
            </Menu>
          </div>
        </Dropdown>,
        { container: focusableContainer },
      );

      const toggle = screen.getByTestId('toggle');

      toggle.focus();

      await userEvent.click(toggle);

      expect(document.activeElement).toEqual(toggle);
    });

    it('when focused and closed sets focus on first menu item when the key "down" is pressed for role="menu"', () => {
      render(
        <Dropdown>
          <div>
            <Toggle>Child Title</Toggle>,
            <Menu role="menu">
              <button type="button">Item 1</button>
              <button type="button">Item 2</button>
            </Menu>
          </div>
        </Dropdown>,
        { container: focusableContainer },
      );

      const toggle = screen.getByTestId('toggle');

      toggle.focus();

      fireEvent.keyDown(toggle, {
        key: 'ArrowDown',
      });

      expect(document.activeElement).toEqual(
        screen.getByRole('button', { name: 'Item 1' }),
      );
    });

    it('when focused and closed sets focus on first menu item when the focusFirstItemOnShow is true', () => {
      render(
        <Dropdown focusFirstItemOnShow>
          <div>
            <Toggle>Child Title</Toggle>,
            <Menu>
              <button type="button">Item 1</button>
              <button type="button">Item 2</button>
            </Menu>
          </div>
        </Dropdown>,
        { container: focusableContainer },
      );

      const toggle = screen.getByTestId('toggle');

      toggle.focus();

      fireEvent.keyDown(toggle, {
        key: 'ArrowDown',
      });

      expect(document.activeElement).toEqual(
        screen.getByRole('button', { name: 'Item 1' }),
      );
    });

    it('when open and the key "Escape" is pressed the menu is closed and focus is returned to the button', () => {
      render(<SimpleDropdown defaultShow />, {
        container: focusableContainer,
      });

      const firstItem = screen.getByRole('button', { name: 'Item 1' });

      firstItem.focus();

      expect(document.activeElement).toEqual(firstItem);

      fireEvent.keyDown(firstItem, {
        key: 'Escape',
      });

      expect(document.activeElement).toEqual(screen.getByTestId('toggle'));
    });

    it('when open and the key "tab" is pressed the menu is closed and focus is progress to the next focusable element', () => {
      render(
        <div>
          <SimpleDropdown defaultShow />
          <input type="text" id="next-focusable" />
        </div>,
        { container: focusableContainer },
      );

      const toggle = screen.getByTestId('toggle');

      toggle.focus();

      fireEvent.keyDown(toggle, {
        key: 'Tab',
      });

      expect(toggle.getAttribute('aria-expanded')).toEqual('false');

      // simulating a tab event doesn't actually shift focus.
      // at least that seems to be the case according to SO.
      // hence no assert on the input having focus.
    });
  });

  describe('popper config', () => {
    it('can add modifiers', async () => {
      const spy = vi.fn();
      const popper = {
        modifiers: [
          {
            name: 'test',
            enabled: true,
            phase: 'write',
            fn: spy,
          },
        ],
      };

      render(
        <Dropdown show>
          <div>
            <Toggle>Child Title</Toggle>
            <Menu popperConfig={popper}>
              <button type="button">Item 1</button>
              <button type="button">Item 2</button>
            </Menu>
          </div>
        </Dropdown>,
      );

      await waitFor(() => expect(spy).toHaveBeenCalledOnce());
    });
  });
});
