/* eslint-disable mocha/no-hooks-for-single-case */

import { mount } from 'enzyme';
import Tabs from '../src/Tabs';
import Nav from '../src/Nav';
import NavItem from '../src/NavItem';

describe('<Nav>', () => {
  let focusableContainer;

  beforeEach(() => {
    focusableContainer = document.createElement('div');
    document.body.appendChild(focusableContainer);
  });

  afterEach(() => {
    document.body.removeChild(focusableContainer);
    focusableContainer = null;
  });

  it('When Arrow key is pressed and a nom NavItem element is the activeElement, then the activeElement keeps the same element', () => {
    const wrapper = mount(
      <Tabs defaultActiveKey="1">
        <Nav>
          <NavItem eventKey="1">One</NavItem>
          <NavItem eventKey="2">Two</NavItem>
          <input type="text" autoFocus />
        </Nav>
      </Tabs>,
      { attachTo: focusableContainer },
    );
    wrapper.find(NavItem).at(0).simulate('keydown', { key: 'ArrowRight' });
    expect(document.activeElement).to.equal(wrapper.find('input').getDOMNode());
  });
});
