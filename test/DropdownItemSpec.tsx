import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

import DropdownItem from '../src/DropdownItem';
import SelectableContext from '../src/SelectableContext';

describe('<DropdownItem>', () => {
  it('should output a nav item as button', () => {
    const { getByText } = render(<DropdownItem>test</DropdownItem>);

    getByText('test').tagName.should.equal('BUTTON');
  });

  it('should trigger onClick', () => {
    const onClickSpy = sinon.spy();
    const { getByText } = render(
      <DropdownItem onClick={onClickSpy}>test</DropdownItem>,
    );
    fireEvent.click(getByText('test'));
    onClickSpy.should.be.called;
  });

  it('should not trigger onClick if disabled', () => {
    const onClickSpy = sinon.spy();
    const { getByText } = render(
      <DropdownItem onClick={onClickSpy} disabled>
        test
      </DropdownItem>,
    );
    fireEvent.click(getByText('test'));
    onClickSpy.should.not.be.called;
  });

  it('should call onSelect if a key is defined', () => {
    const onSelect = sinon.spy();
    const { getByText } = render(
      <SelectableContext.Provider value={onSelect}>
        <DropdownItem eventKey="abc">test</DropdownItem>
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
        <DropdownItem eventKey="abc" onClick={handleClick}>
          test
        </DropdownItem>
      </SelectableContext.Provider>,
    );

    fireEvent.click(getByText('test'));
    onSelect.should.not.be.called;
  });
});
