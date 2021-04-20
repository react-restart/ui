import { mount } from 'enzyme';
import * as React from 'react';
import Nav from '../src/Nav';
import NavItem from '../src/NavItem';
import TabPanel from '../src/TabPanel';
import Tabs from '../src/Tabs';

describe('<Tabs>', () => {
  it('should not propagate context past TabPanels', () => {
    const onSelect = sinon.spy();

    let instance = mount(
      <Tabs id="custom-id" onSelect={onSelect}>
        <Nav>
          <NavItem eventKey="1">One</NavItem>
        </Nav>
        <div>
          <TabPanel eventKey="1">
            <Nav>
              <NavItem eventKey="2">One</NavItem>
            </Nav>
          </TabPanel>
        </div>
      </Tabs>,
    );

    instance.find('TabPanel Nav button').simulate('click');

    onSelect.should.not.have.been.called;

    instance.find('Nav button').first().simulate('click');

    onSelect.should.have.been.calledOnce;
  });

  it('should let generateChildId function create id', () => {
    const generateChildIdSpy = sinon.spy(() => 'test-id');

    let instance = mount(
      <Tabs generateChildId={generateChildIdSpy}>
        <div>
          <Nav>
            <NavItem eventKey="1">One</NavItem>
          </Nav>
          <div>
            <TabPanel eventKey="1" />
          </div>
        </div>
      </Tabs>,
    );

    instance.assertSingle(`button[id="test-id"]`);
  });

  it('should match up ids', () => {
    let instance = mount(
      <Tabs>
        <div>
          <Nav>
            <NavItem eventKey="1">One</NavItem>
          </Nav>
          <div>
            <TabPanel eventKey="1" />
          </div>
        </div>
      </Tabs>,
    );

    let tabId = instance.find('NavItem button').first().prop('id');

    let paneId = instance.find('TabPanel div').first().prop('id');

    expect(tabId).to.exist;
    expect(paneId).to.exist;

    instance.assertSingle(`button[aria-controls="${paneId}"]`);
    instance.assertSingle(`div[aria-labelledby="${tabId}"]`);
  });

  it('should default Nav role to tablist', () => {
    let instance = mount(
      <Tabs>
        <div>
          <Nav>
            <NavItem eventKey="1">One</NavItem>
          </Nav>
        </div>
      </Tabs>,
    );

    instance.assertSingle('div[role="tablist"]');

    instance
      .find('NavItem button')
      .first()
      .getDOMNode()
      .getAttribute('role')
      .should.equal('tab');
  });

  it('should use explicit Nav role', () => {
    let instance = mount(
      <Tabs>
        <div>
          <Nav role="navigation">
            <NavItem href="#foo" eventKey="1">
              One
            </NavItem>
          </Nav>
        </div>
      </Tabs>,
    );

    instance.assertSingle('div[role="navigation"]');

    // make sure its not passed to the NavItem
    expect(
      instance.find('NavItem button').first().getDOMNode().getAttribute('role'),
    ).to.not.exist;
  });

  it('Should show the correct tab when selected', () => {
    const wrapper = mount(
      <Tabs defaultActiveKey={1} transition={false}>
        <Nav>
          <NavItem eventKey="1">One</NavItem>

          <NavItem eventKey="2">Two</NavItem>
        </Nav>
        <div>
          <TabPanel eventKey="1">Tab 1</TabPanel>
          <TabPanel eventKey="2">Tab 2</TabPanel>
        </div>
      </Tabs>,
    );

    wrapper
      .find('div[aria-hidden=false]')
      .tap((p) => p.should.have.lengthOf(1))
      .text()
      .should.equal('Tab 1');

    wrapper.find('button[role="tab"]').last().simulate('click');

    wrapper
      .find('div[aria-hidden=false]')
      .tap((p) => p.should.have.lengthOf(1))
      .text()
      .should.equal('Tab 2');
  });

  it('Should mount and unmount tabs when set', () => {
    const wrapper = mount(
      <Tabs mountOnEnter unmountOnExit defaultActiveKey={1} transition={false}>
        <Nav>
          <NavItem eventKey="1">One</NavItem>

          <NavItem eventKey="2">Two</NavItem>
        </Nav>
        <div>
          <TabPanel eventKey="1">Tab 1</TabPanel>
          <TabPanel eventKey="2">Tab 2</TabPanel>
        </div>
      </Tabs>,
    );

    wrapper
      .find('div[role="tabpanel"]')
      .tap((p) => p.should.have.lengthOf(1))
      .text()
      .should.equal('Tab 1');

    wrapper.find('button[role="tab"]').last().simulate('click');

    wrapper
      .find('div[role="tabpanel"]')
      .tap((p) => p.should.have.lengthOf(1))
      .text()
      .should.equal('Tab 2');
  });
});
