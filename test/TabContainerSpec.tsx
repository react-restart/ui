import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import sinon from 'sinon';
import Nav from '../src/Nav';
import NavItem from '../src/NavItem';
import TabPanel from '../src/TabPanel';
import Tabs from '../src/Tabs';

describe('<Tabs>', () => {
  it('should not propagate context past TabPanels', () => {
    const onSelect = sinon.spy();

    const { getByText } = render(
      <Tabs id="custom-id" onSelect={onSelect}>
        <Nav>
          <NavItem eventKey="1">One</NavItem>
        </Nav>
        <div>
          <TabPanel eventKey="1">
            <Nav>
              <NavItem eventKey="2">Two</NavItem>
            </Nav>
          </TabPanel>
        </div>
      </Tabs>,
    );

    const nestedNavItem = getByText('Two');
    fireEvent.click(nestedNavItem);
    onSelect.should.not.have.been.called;

    const topNavItem = getByText('One');
    fireEvent.click(topNavItem);
    onSelect.should.have.been.calledOnce;
  });

  it('should let generateChildId function create id', () => {
    const generateChildIdSpy = sinon.spy(() => 'test-id');

    const { getByRole } = render(
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

    const navItem = getByRole('tab');
    expect(navItem.getAttribute('id')).to.equal('test-id');
  });

  it('should match up ids', () => {
    const { getByTestId } = render(
      <Tabs>
        <div>
          <Nav>
            <NavItem eventKey="1" data-testid="nav-item">
              One
            </NavItem>
          </Nav>
          <div>
            <TabPanel eventKey="1" data-testid="tab-panel" />
          </div>
        </div>
      </Tabs>,
    );

    const tabPanel = getByTestId('tab-panel');
    const tabPanelID = tabPanel.getAttribute('id');
    const navItem = getByTestId('nav-item');
    const navItemID = navItem.getAttribute('id');

    expect(navItemID).to.exist;
    expect(tabPanelID).to.exist;

    expect(tabPanel.getAttribute('aria-labelledby')).to.equal(navItemID);
    expect(navItem.getAttribute('aria-controls')).to.equal(tabPanelID);
  });

  it('should default Nav role to tablist', () => {
    const { getByRole, getByText } = render(
      <Tabs>
        <div>
          <Nav>
            <NavItem eventKey="1">One</NavItem>
          </Nav>
        </div>
      </Tabs>,
    );

    expect(getByRole('tablist')).to.exist;
    expect(getByText('One').getAttribute('role')).to.equal('tab');
  });

  it('should use explicit Nav role', () => {
    const { getByRole } = render(
      <Tabs>
        <div>
          <Nav role="navigation">
            <NavItem eventKey="1">One</NavItem>
          </Nav>
        </div>
      </Tabs>,
    );

    expect(getByRole('navigation')).to.exist;

    // make sure it's not passed to the NavItem
    expect(getByRole('button').getAttribute('role')).to.not.exist;
  });

  it('Should show the correct tab when selected', () => {
    const { getByText } = render(
      <Tabs defaultActiveKey={1}>
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

    expect(getByText('Tab 1').getAttribute('aria-hidden')).to.equal('false');
    expect(getByText('Tab 2').getAttribute('aria-hidden')).to.equal('true');

    expect(getByText('One').getAttribute('aria-selected')).to.equal('true');
    expect(getByText('Two').getAttribute('aria-selected')).to.equal('false');

    fireEvent.click(getByText('Two'));

    expect(getByText('Tab 1').getAttribute('aria-hidden')).to.equal('true');
    expect(getByText('Tab 2').getAttribute('aria-hidden')).to.equal('false');

    expect(getByText('One').getAttribute('aria-selected')).to.equal('false');
    expect(getByText('Two').getAttribute('aria-selected')).to.equal('true');
  });

  it('Should mount and unmount tabs when set', () => {
    const { queryByText, getByText } = render(
      <Tabs mountOnEnter unmountOnExit defaultActiveKey={1}>
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

    expect(queryByText('Tab 1')).to.exist;
    expect(queryByText('Tab 2')).to.not.exist;
    fireEvent.click(getByText('Two'));
    expect(queryByText('Tab 1')).to.not.exist;
    expect(queryByText('Tab 2')).to.exist;
  });

  it('Should include "aria-controls" matching rendered TabPanel', () => {
    const { queryByText, getByText } = render(
      <Tabs defaultActiveKey={1}>
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

    expect(queryByText('Tab 1')).to.exist;
    expect(queryByText('Tab 2')).to.exist;
    expect(getByText('One').getAttribute('aria-controls')).to.exist;
    expect(getByText('Two').getAttribute('aria-controls')).to.exist;
  });

  it('Should include "aria-controls" only for rendered tabs when unmountOnExit is true', () => {
    const { queryByText, getByText } = render(
      <Tabs unmountOnExit defaultActiveKey={1}>
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

    expect(queryByText('Tab 1')).to.exist;
    expect(queryByText('Tab 2')).to.not.exist;
    expect(getByText('One').getAttribute('aria-controls')).to.exist;
    expect(getByText('Two').getAttribute('aria-controls')).to.not.exist;
    fireEvent.click(getByText('Two'));
    expect(queryByText('Tab 1')).to.not.exist;
    expect(queryByText('Tab 2')).to.exist;
    expect(getByText('One').getAttribute('aria-controls')).to.not.exist;
    expect(getByText('Two').getAttribute('aria-controls')).to.exist;
  });

  it('Should include "aria-controls" only for the active tab, when mountOnEnter is true', () => {
    const { queryByText, getByText } = render(
      <Tabs mountOnEnter defaultActiveKey={1}>
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
    expect(queryByText('Tab 1')).to.exist;
    expect(queryByText('Tab 2')).to.not.exist;
    expect(getByText('One').getAttribute('aria-controls')).to.exist;
    expect(getByText('Two').getAttribute('aria-controls')).to.not.exist;
    fireEvent.click(getByText('Two'));
    expect(queryByText('Tab 1')).to.exist;
    expect(queryByText('Tab 2')).to.exist;
    expect(getByText('One').getAttribute('aria-controls')).to.not.exist;
    expect(getByText('Two').getAttribute('aria-controls')).to.exist;
  });
});
