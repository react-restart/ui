import { mount } from 'enzyme';
import * as React from 'react';
import Nav from '../src/Nav';
import NavItem from '../src/NavItem';
import TabPane from '../src/TabPane';
import TabContainer from '../src/TabContainer';

describe('<TabContainer>', () => {
  it('should not propagate context past TabPanes', () => {
    const onSelect = sinon.spy();

    let instance = mount(
      <TabContainer id="custom-id" onSelect={onSelect}>
        <Nav>
          <NavItem eventKey="1">One</NavItem>
        </Nav>
        <div>
          <TabPane eventKey="1">
            <Nav>
              <NavItem eventKey="2">One</NavItem>
            </Nav>
          </TabPane>
        </div>
      </TabContainer>,
    );

    instance.find('TabPane Nav a').simulate('click');

    onSelect.should.not.have.been.called;

    instance.find('Nav a').first().simulate('click');

    onSelect.should.have.been.calledOnce;
  });

  it('should let generateChildId function create id', () => {
    const generateChildIdSpy = sinon.spy(() => 'test-id');

    let instance = mount(
      <TabContainer generateChildId={generateChildIdSpy}>
        <div>
          <Nav>
            <NavItem eventKey="1">One</NavItem>
          </Nav>
          <div>
            <TabPane eventKey="1" />
          </div>
        </div>
      </TabContainer>,
    );

    instance.assertSingle(`a[id="test-id"]`);
  });

  it('should match up ids', () => {
    let instance = mount(
      <TabContainer>
        <div>
          <Nav>
            <NavItem eventKey="1">One</NavItem>
          </Nav>
          <div>
            <TabPane eventKey="1" />
          </div>
        </div>
      </TabContainer>,
    );

    let tabId = instance.find('NavItem a').first().prop('id');

    let paneId = instance.find('TabPane div').first().prop('id');

    expect(tabId).to.exist;
    expect(paneId).to.exist;

    instance.assertSingle(`a[aria-controls="${paneId}"]`);
    instance.assertSingle(`div[aria-labelledby="${tabId}"]`);
  });

  it('should default Nav role to tablist', () => {
    let instance = mount(
      <TabContainer>
        <div>
          <Nav>
            <NavItem eventKey="1">One</NavItem>
          </Nav>
        </div>
      </TabContainer>,
    );

    instance.assertSingle('div[role="tablist"]');

    instance
      .find('NavItem a')
      .first()
      .getDOMNode()
      .getAttribute('role')
      .should.equal('tab');
  });

  it('should use explicit Nav role', () => {
    let instance = mount(
      <TabContainer>
        <div>
          <Nav role="navigation">
            <NavItem href="#foo" eventKey="1">
              One
            </NavItem>
          </Nav>
        </div>
      </TabContainer>,
    );

    instance.assertSingle('div[role="navigation"]');

    // make sure its not passed to the NavItem
    expect(instance.find('NavItem a').first().getDOMNode().getAttribute('role'))
      .to.not.exist;
  });

  it('Should show the correct tab when selected', () => {
    const wrapper = mount(
      <TabContainer defaultActiveKey={1} transition={false}>
        <Nav>
          <NavItem eventKey="1">One</NavItem>

          <NavItem eventKey="2">Two</NavItem>
        </Nav>
        <div>
          <TabPane eventKey="1">Tab 1</TabPane>
          <TabPane eventKey="2">Tab 2</TabPane>
        </div>
      </TabContainer>,
    );

    wrapper
      .find('div[aria-hidden=false]')
      .tap((p) => p.should.have.lengthOf(1))
      .text()
      .should.equal('Tab 1');

    wrapper.find('a[role="tab"]').last().simulate('click');

    wrapper
      .find('div[aria-hidden=false]')
      .tap((p) => p.should.have.lengthOf(1))
      .text()
      .should.equal('Tab 2');
  });

  it('Should mount and unmount tabs when set', () => {
    const wrapper = mount(
      <TabContainer
        mountOnEnter
        unmountOnExit
        defaultActiveKey={1}
        transition={false}
      >
        <Nav>
          <NavItem eventKey="1">One</NavItem>

          <NavItem eventKey="2">Two</NavItem>
        </Nav>
        <div>
          <TabPane eventKey="1">Tab 1</TabPane>
          <TabPane eventKey="2">Tab 2</TabPane>
        </div>
      </TabContainer>,
    );

    wrapper
      .find('div[role="tabpanel"]')
      .tap((p) => p.should.have.lengthOf(1))
      .text()
      .should.equal('Tab 1');

    wrapper.find('a[role="tab"]').last().simulate('click');

    wrapper
      .find('div[role="tabpanel"]')
      .tap((p) => p.should.have.lengthOf(1))
      .text()
      .should.equal('Tab 2');
  });
});
