import React, { useRef } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { expect, vi, describe, it } from 'vitest';
import Transition from 'react-transition-group/Transition';

import TabContext from '../src/TabContext';
import TabPanel, { useTabPanel } from '../src/TabPanel';
import { Button, Nav, Tabs, useNavItem } from '../src';

describe('<TabPanel>', () => {
  it('should render a TabPanel', () => {
    const { getByText } = render(<TabPanel active>test</TabPanel>);

    expect(getByText('test')).toBeTruthy();
  });

  it('should render a TabPanel with role tabpanel', () => {
    const { getByRole } = render(<TabPanel active>test</TabPanel>);

    expect(getByRole('tabpanel')).toBeTruthy();
  });

  it('should not render if not active and mountOnEnter=true', () => {
    const { queryByText } = render(<TabPanel mountOnEnter>test</TabPanel>);

    expect(queryByText('test')).toBeNull();
  });

  it('should not unmount if rendered already', () => {
    const { getByText, rerender } = render(<TabPanel active>test</TabPanel>);
    expect(getByText('test')).toBeTruthy();

    rerender(<TabPanel>test</TabPanel>);
    expect(getByText('test')).toBeTruthy();
  });

  it('should unmount', () => {
    const { getByText, queryByText, rerender } = render(
      <TabPanel active unmountOnExit>
        test
      </TabPanel>,
    );
    expect(getByText('test')).toBeTruthy();

    rerender(<TabPanel unmountOnExit>test</TabPanel>);
    expect(queryByText('test')).toBeNull();
  });

  it('should call getControlledId for id', () => {
    const getControlledIdSpy = vi.fn();

    render(
      <TabContext.Provider
        value={{
          onSelect: vi.fn(),
          mountOnEnter: false,
          unmountOnExit: false,
          getControlledId: getControlledIdSpy,
          getControllerId: vi.fn(),
        }}
      >
        <TabPanel active eventKey="mykey">
          test
        </TabPanel>
      </TabContext.Provider>,
    );

    expect(getControlledIdSpy).toHaveBeenLastCalledWith('mykey');
  });

  it('should fire transition events', async () => {
    const transitionSpy = vi.fn();

    const FADE_DURATION = 200;

    const fadeStyles = {
      entering: 'show',
      entered: 'show',
    };

    function Fade({ children, ...props }: any) {
      const ref = useRef(null);
      return (
        <Transition {...props} nodeRef={ref} timeout={FADE_DURATION}>
          {(status: keyof typeof fadeStyles, innerProps: any) =>
            React.cloneElement(children, {
              ...innerProps,
              ref: ref,
              className: `fade ${fadeStyles[status]} ${children.props.className}`,
            })
          }
        </Transition>
      );
    }

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
    await waitFor(() => expect(transitionSpy).toHaveBeenCalledTimes(3));

    fireEvent.click(getByText('Tab 2'));
    await waitFor(() => expect(transitionSpy).toHaveBeenCalledTimes(6));
  });

  it('should derive active state from context', () => {
    const { getByText } = render(
      <TabContext.Provider
        value={{
          activeKey: 'mykey',
          onSelect: vi.fn(),
          mountOnEnter: false,
          unmountOnExit: false,
          getControlledId: vi.fn(),
          getControllerId: vi.fn(),
        }}
      >
        <TabPanel eventKey="mykey">test</TabPanel>
      </TabContext.Provider>,
    );

    const node = getByText('test');
    expect(node).toBeTruthy();
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

      expect(props.role).toEqual('tabpanel');
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
            onSelect: vi.fn(),
            mountOnEnter: true,
            unmountOnExit: false,
            getControlledId: vi.fn(),
            getControllerId: vi.fn(),
          }}
        >
          <Wrapper />
        </TabContext.Provider>,
      );

      expect(props.role).toEqual('tabpanel');
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
            onSelect: vi.fn(),
            mountOnEnter: true,
            unmountOnExit: false,
            getControlledId: vi.fn(),
            getControllerId: vi.fn(),
          }}
        >
          <Wrapper mountOnEnter={false} />
        </TabContext.Provider>,
      );

      expect(meta.mountOnEnter).toEqual(false);
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
            onSelect: vi.fn(),
            mountOnEnter: false,
            unmountOnExit: true,
            getControlledId: vi.fn(),
            getControllerId: vi.fn(),
          }}
        >
          <Wrapper unmountOnExit={false} />
        </TabContext.Provider>,
      );

      expect(meta.unmountOnExit).toEqual(false);
    });
  });
});
