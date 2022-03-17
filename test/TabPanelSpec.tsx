import { fireEvent, render, waitFor } from '@testing-library/react';
import { expect } from 'chai';
import sinon from 'sinon';
import Transition from 'react-transition-group/Transition';

import TabContext from '../src/TabContext';
import TabPanel, { useTabPanel } from '../src/TabPanel';
import React from 'react';
import { Button, Nav, Tabs, useNavItem } from '../src';

describe('<TabPanel>', () => {
  it('should render a TabPanel', () => {
    const { getByText } = render(<TabPanel active>test</TabPanel>);

    getByText('test').should.exist;
  });

  it('should render a TabPanel with role tabpanel', () => {
    const { getByRole } = render(<TabPanel active>test</TabPanel>);

    getByRole('tabpanel').should.exist;
  });

  it('should not render if not active and mountOnEnter=true', () => {
    const { queryByText } = render(<TabPanel mountOnEnter>test</TabPanel>);

    expect(queryByText('test')).to.not.exist;
  });

  it('should not unmount if rendered already', () => {
    const { getByText, rerender } = render(<TabPanel active>test</TabPanel>);
    getByText('test').should.exist;

    rerender(<TabPanel>test</TabPanel>);
    getByText('test').should.exist;
  });

  it('should unmount', () => {
    const { getByText, queryByText, rerender } = render(
      <TabPanel active unmountOnExit>
        test
      </TabPanel>,
    );
    getByText('test').should.exist;

    rerender(<TabPanel unmountOnExit>test</TabPanel>);
    expect(queryByText('test')).to.not.exist;
  });

  it('should call getControlledId for id', () => {
    const getControlledIdSpy = sinon.spy();

    render(
      <TabContext.Provider
        value={{
          onSelect: sinon.spy(),
          mountOnEnter: false,
          unmountOnExit: false,
          getControlledId: getControlledIdSpy,
          getControllerId: sinon.spy(),
        }}
      >
        <TabPanel active eventKey="mykey">
          test
        </TabPanel>
      </TabContext.Provider>,
    );

    getControlledIdSpy.should.be.calledWith('mykey');
  });

  it('should fire transition events', async () => {
    const transitionSpy = sinon.spy();

    const FADE_DURATION = 200;

    const fadeStyles = {
      entering: 'show',
      entered: 'show',
    };

    const Fade = ({ children, ...props }: any) => (
      <Transition {...props} timeout={FADE_DURATION}>
        {(status: keyof typeof fadeStyles, innerProps: any) =>
          React.cloneElement(children, {
            ...innerProps,
            className: `fade ${fadeStyles[status]} ${children.props.className}`,
          })
        }
      </Transition>
    );
    function Tab({ eventKey, ...props }: any) {
      const [navItemProps, _] = useNavItem({
        key: eventKey,
      });

      return <Button {...props} {...navItemProps} />;
    }
    const { getByText } = render(
      <Tabs defaultActiveKey="2">
        <Nav className="flex border-b">
          <Tab eventKey="1">Tab 1</Tab>
          <Tab eventKey="2">Tab 2</Tab>
        </Nav>
        <TabPanel
          transition={Fade}
          eventKey="1"
          onEnter={transitionSpy}
          onEntering={transitionSpy}
          onEntered={transitionSpy}
          onExit={transitionSpy}
          onExiting={transitionSpy}
          onExited={transitionSpy}
        >
          Tab 1 content
        </TabPanel>
        <TabPanel title="Tab 2" eventKey="2">
          Tab 2 content
        </TabPanel>
      </Tabs>,
    );

    fireEvent.click(getByText('Tab 1'));
    await waitFor(() => transitionSpy.should.have.been.calledThrice);

    fireEvent.click(getByText('Tab 2'));
    await waitFor(() => transitionSpy.callCount.should.equal(6));
  });

  it('should derive active state from context', () => {
    const { getByText } = render(
      <TabContext.Provider
        value={{
          activeKey: 'mykey',
          onSelect: sinon.spy(),
          mountOnEnter: false,
          unmountOnExit: false,
          getControlledId: sinon.spy(),
          getControllerId: sinon.spy(),
        }}
      >
        <TabPanel eventKey="mykey">test</TabPanel>
      </TabContext.Provider>,
    );

    const node = getByText('test');
    node.should.exist;
    expect(node.getAttribute('aria-hidden')).to.equal('false');
  });

  describe('useTabPanel', () => {
    it('should have role set to tabpanel', () => {
      let props: any;
      function Wrapper(wrapperProps: any) {
        const [_props] = useTabPanel(wrapperProps);
        props = _props;
        return null;
      }

      render(<Wrapper />);

      props.role.should.equal('tabpanel');
    });

    it('should have role tabpanel also within a context', () => {
      let props: any;
      function Wrapper(wrapperProps: any) {
        const [_props] = useTabPanel(wrapperProps);
        props = _props;
        return null;
      }

      render(
        <TabContext.Provider
          value={{
            onSelect: sinon.spy(),
            mountOnEnter: true,
            unmountOnExit: false,
            getControlledId: sinon.spy(),
            getControllerId: sinon.spy(),
          }}
        >
          <Wrapper />
        </TabContext.Provider>,
      );

      props.role.should.equal('tabpanel');
    });

    it('should use mountOnEnter from props if provided', () => {
      let meta: any;
      function Wrapper(wrapperProps: any) {
        const [_, m] = useTabPanel(wrapperProps);
        meta = m;
        return null;
      }

      render(
        <TabContext.Provider
          value={{
            onSelect: sinon.spy(),
            mountOnEnter: true,
            unmountOnExit: false,
            getControlledId: sinon.spy(),
            getControllerId: sinon.spy(),
          }}
        >
          <Wrapper mountOnEnter={false} />
        </TabContext.Provider>,
      );

      meta.mountOnEnter.should.equal(false);
    });

    it('should use unmountOnExit from props if provided', () => {
      let meta: any;
      function Wrapper(wrapperProps: any) {
        const [_, m] = useTabPanel(wrapperProps);
        meta = m;
        return null;
      }

      render(
        <TabContext.Provider
          value={{
            onSelect: sinon.spy(),
            mountOnEnter: false,
            unmountOnExit: true,
            getControlledId: sinon.spy(),
            getControllerId: sinon.spy(),
          }}
        >
          <Wrapper unmountOnExit={false} />
        </TabContext.Provider>,
      );

      meta.unmountOnExit.should.equal(false);
    });
  });
});
