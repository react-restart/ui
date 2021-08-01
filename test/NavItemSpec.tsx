import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import sinon from 'sinon';

import NavContext from '../src/NavContext';
import NavItem from '../src/NavItem';
import SelectableContext from '../src/SelectableContext';

describe('<NavItem>', () => {
  it('should output a nav item as button', () => {
    const { getByText } = render(<NavItem>test</NavItem>);

    getByText('test').tagName.should.equal('BUTTON');
  });

  it('should output custom role', () => {
    const { getByRole } = render(<NavItem role="abc">test</NavItem>);
    getByRole('abc').should.exist;
  });

  it('should set role to tab if inside nav context', () => {
    const { getByRole } = render(
      <NavContext.Provider
        value={{
          role: 'tablist',
          activeKey: 'key',
          getControlledId: sinon.spy(),
          getControllerId: sinon.spy(),
        }}
      >
        <NavItem>test</NavItem>
      </NavContext.Provider>,
    );

    getByRole('tab').should.exist;
  });

  it('should not override custom role if inside nav context', () => {
    const { getByRole } = render(
      <NavContext.Provider
        value={{
          role: 'tablist',
          activeKey: 'key',
          getControlledId: sinon.spy(),
          getControllerId: sinon.spy(),
        }}
      >
        <NavItem role="abc">test</NavItem>
      </NavContext.Provider>,
    );

    getByRole('abc').should.exist;
  });

  it('should use active from nav context', () => {
    const { getByText } = render(
      <NavContext.Provider
        value={{
          role: 'tablist',
          activeKey: 'key',
          getControlledId: sinon.spy(),
          getControllerId: sinon.spy(),
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
    node.tabIndex.should.equal(-1);
  });

  it('should trigger onClick', () => {
    const onClickSpy = sinon.spy();
    const { getByText } = render(<NavItem onClick={onClickSpy}>test</NavItem>);
    fireEvent.click(getByText('test'));
    onClickSpy.should.be.called;
  });

  it('should not trigger onClick if disabled', () => {
    const onClickSpy = sinon.spy();
    const { getByText } = render(
      // Render as div because onClick won't get triggered with Button when disabled.
      <NavItem as="div" onClick={onClickSpy} disabled>
        test
      </NavItem>,
    );
    fireEvent.click(getByText('test'));
    onClickSpy.should.not.be.called;
  });

  it('should call onSelect if a key is defined', () => {
    const onSelect = sinon.spy();
    const { getByText } = render(
      <SelectableContext.Provider value={onSelect}>
        <NavItem eventKey="abc">test</NavItem>
      </SelectableContext.Provider>,
    );

    fireEvent.click(getByText('test'));
    onSelect.should.be.calledWith('abc');
  });

  it('should not call onSelect onClick stopPropagation called', () => {
    const onSelect = sinon.spy();
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
    onSelect.should.not.be.called;
  });
});
