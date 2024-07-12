import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';

import NavContext from '../src/NavContext';
import NavItem from '../src/NavItem';
import SelectableContext from '../src/SelectableContext';

describe('<NavItem>', () => {
  it('should output a nav item as button', () => {
    const { getByText } = render(<NavItem>test</NavItem>);

    expect(getByText('test').tagName).toEqual('BUTTON');
  });

  it('should output custom role', () => {
    const { getByRole } = render(<NavItem role="abc">test</NavItem>);
    expect(getByRole('abc')).toBeTruthy();
  });

  it('should set role to tab if inside nav context', () => {
    const { getByRole } = render(
      <NavContext.Provider
        value={{
          role: 'tablist',
          activeKey: 'key',
          getControlledId: vi.fn(),
          getControllerId: vi.fn(),
        }}
      >
        <NavItem>test</NavItem>
      </NavContext.Provider>,
    );

    expect(getByRole('tab')).toBeTruthy();
  });

  it('should not override custom role if inside nav context', () => {
    const { getByRole } = render(
      <NavContext.Provider
        value={{
          role: 'tablist',
          activeKey: 'key',
          getControlledId: vi.fn(),
          getControllerId: vi.fn(),
        }}
      >
        <NavItem role="abc">test</NavItem>
      </NavContext.Provider>,
    );

    expect(getByRole('abc')).toBeTruthy();
  });

  it('should use active from nav context', () => {
    const { getByText } = render(
      <NavContext.Provider
        value={{
          role: 'tablist',
          activeKey: 'key',
          getControlledId: vi.fn(),
          getControllerId: vi.fn(),
        }}
      >
        <NavItem eventKey="key">test</NavItem>
      </NavContext.Provider>,
    );

    expect(getByText('test').getAttribute('data-rr-ui-active')).to.equal(
      'true',
    );
  });

  it('should set disabled attributes when nav item is disabled and role is tab', () => {
    const { getByText } = render(
      <NavItem role="tab" disabled>
        test
      </NavItem>,
    );
    const node = getByText('test');
    expect(node.getAttribute('aria-disabled')).to.equal('true');
    expect(node.tabIndex).toEqual(-1);
  });

  it('should trigger onClick', () => {
    const onClickSpy = vi.fn();
    const { getByText } = render(<NavItem onClick={onClickSpy}>test</NavItem>);
    fireEvent.click(getByText('test'));
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should not trigger onClick if disabled', () => {
    const onClickSpy = vi.fn();
    const { getByText } = render(
      // Render as div because onClick won't get triggered with Button when disabled.
      <NavItem as="div" onClick={onClickSpy} disabled>
        test
      </NavItem>,
    );
    fireEvent.click(getByText('test'));
    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('should call onSelect if a key is defined', () => {
    const onSelect = vi.fn();
    const { getByText } = render(
      <SelectableContext.Provider value={onSelect}>
        <NavItem eventKey="abc">test</NavItem>
      </SelectableContext.Provider>,
    );

    fireEvent.click(getByText('test'));
    expect(onSelect.mock.calls[0][0]).toEqual('abc');
  });

  it('should not call onSelect onClick stopPropagation called', () => {
    const onSelect = vi.fn();
    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
    };
    const { getByText } = render(
      <SelectableContext.Provider value={onSelect}>
        <NavItem eventKey="abc" onClick={handleClick}>
          test
        </NavItem>
      </SelectableContext.Provider>,
    );

    fireEvent.click(getByText('test'));
    expect(onSelect).not.toHaveBeenCalled();
  });
});
