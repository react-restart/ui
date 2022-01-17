import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';

import Dropdown from '../src/Dropdown';
import DropdownItem from '../src/DropdownItem';

describe('<Dropdown>', () => {
  const Menu = ({
    usePopper,
    rootCloseEvent,
    renderSpy,
    popperConfig,
    renderMenuOnMount = true,
    ...props
  }) => (
    <Dropdown.Menu
      flip
      usePopper={usePopper}
      popperConfig={popperConfig}
      rootCloseEvent={rootCloseEvent}
    >
      {(menuProps, meta) => {
        const { show, hasShown } = meta;
        renderSpy && renderSpy(meta);
        if (!renderMenuOnMount && !hasShown) {
          return null;
        }

        return (
          <div
            {...props}
            {...menuProps}
            data-show={show}
            className="menu"
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
          type="button"
          className="toggle"
        />
      )}
    </Dropdown.Toggle>
  );

  const SimpleDropdown = ({
    children,
    menuSpy,
    usePopper,
    renderMenuOnMount,
    ...outer
  }) => (
    <Dropdown {...outer}>
      {children || (
        <>
          <Toggle key="toggle">Toggle</Toggle>,
          <Menu
            key="menu"
            renderSpy={menuSpy}
            usePopper={usePopper}
            renderMenuOnMount={renderMenuOnMount}
          >
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
            <Dropdown.Item>Item 4</Dropdown.Item>
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
    ReactDOM.unmountComponentAtNode(focusableContainer);
    document.body.removeChild(focusableContainer);
  });

  it('renders toggle with Dropdown.Toggle', () => {
    const { container } = render(<SimpleDropdown />);

    const toggle = container.querySelector('button.toggle');

    toggle.textContent.should.match(/Toggle/);

    toggle.hasAttribute('aria-haspopup').should.equal(false);

    toggle.getAttribute('aria-expanded').should.equal('false');

    toggle.getAttribute('id').should.be.ok;
  });

  it('forwards placement to menu', () => {
    const renderSpy = sinon.spy((meta) => {
      meta.placement.should.equal('bottom-end');
    });

    render(
      <SimpleDropdown
        show
        placement="bottom-end"
        usePopper={false}
        menuSpy={renderSpy}
      />,
    );

    renderSpy.should.have.been.called;
  });

  // NOTE: The onClick event handler is invoked for both the Enter and Space
  // keys as well since the component is a button. I cannot figure out how to
  // get ReactTestUtils to simulate such though.
  it('toggles open/closed when clicked', () => {
    const { container } = render(<SimpleDropdown />);

    expect(container.querySelector('.show')).to.not.exist;

    fireEvent.click(container.querySelector('button[aria-expanded="false"]'));

    expect(container.querySelector('div[data-show="true"]')).to.exist;

    fireEvent.click(container.querySelector('button[aria-expanded="true"]'));

    expect(container.querySelector('.show')).to.not.exist;
    expect(container.querySelector('button[aria-expanded="false"]')).to.exist;
  });

  it('closes when clicked outside', () => {
    const closeSpy = sinon.spy();
    const { container } = render(<SimpleDropdown onToggle={closeSpy} />);

    fireEvent.click(container.querySelector('.toggle'));

    fireEvent.click(document.body);

    closeSpy.should.have.been.calledTwice;

    closeSpy.lastCall.args[0].should.equal(false);
  });

  it('closes when mousedown outside if rootCloseEvent set', () => {
    const closeSpy = sinon.spy();

    const { container } = render(
      <Dropdown onToggle={closeSpy} id="test-id">
        <div>
          <Toggle>Child Title</Toggle>,
          <Menu rootCloseEvent="mousedown">
            <button type="button">Item 1</button>
            <button type="button">Item 2</button>
          </Menu>
        </div>
      </Dropdown>,
    );

    fireEvent.click(container.querySelector('.toggle'));

    fireEvent.mouseDown(document.body);

    closeSpy.should.have.been.calledTwice;
    closeSpy.lastCall.args[0].should.equal(false);
  });

  it('when focused and closed toggles open when the key "down" is pressed', () => {
    const closeSpy = sinon.spy();
    const { container } = render(<SimpleDropdown onToggle={closeSpy} />, {
      container: focusableContainer,
    });

    fireEvent.keyDown(container.querySelector('.toggle'), { key: 'ArrowDown' });

    closeSpy.should.have.been.calledOnce;
    closeSpy.lastCall.args[0].should.equal(true);
  });

  it('closes when item is clicked', () => {
    const onToggle = sinon.spy();

    const root = render(<SimpleDropdown show onToggle={onToggle} />);

    fireEvent.click(root.getByText('Item 4'));

    onToggle.should.have.been.calledWith(false);
  });

  it('does not close when onToggle is controlled', () => {
    const onToggle = sinon.spy();

    const root = render(<SimpleDropdown show onToggle={onToggle} />);

    fireEvent.click(root.getByText('Toggle'));

    fireEvent.click(root.getByText('Item 1'));

    onToggle.should.have.been.calledWith(false);

    expect(root.container.querySelector('div[data-show="true"]')).to.exist;
  });

  it('has aria-labelledby same id as toggle button', () => {
    const root = render(<SimpleDropdown defaultShow />);

    root
      .getByText('Toggle')
      .getAttribute('id')
      .should.equal(
        root.container.querySelector('.menu').getAttribute('aria-labelledby'),
      );
  });

  it('has aria-haspopup when menu has role=menu and not otherwise', () => {
    let root = render(
      <Dropdown>
        <div>
          <Toggle>Toggle</Toggle>,
          <Menu role="menu">
            <DropdownItem>Item 1</DropdownItem>
            <DropdownItem>Item 2</DropdownItem>
          </Menu>
        </div>
      </Dropdown>,
    );

    expect(root.getByText('Toggle').hasAttribute('aria-haspopup')).to.equal(
      true,
    );
    // doesn't really work across rerenders b/c the menu ref doesn't change
    root.unmount();

    root = render(
      <Dropdown>
        <div>
          <Toggle>Toggle</Toggle>,
          <Menu>
            <DropdownItem>Item 1</DropdownItem>
            <DropdownItem>Item 2</DropdownItem>
          </Menu>
        </div>
      </Dropdown>,
    );

    expect(root.getByText('Toggle').hasAttribute('aria-haspopup')).to.equal(
      false,
    );
  });

  describe('focusable state', () => {
    it('when focus should not be moved to first item when focusFirstItemOnShow is `false`', () => {
      const root = render(
        <Dropdown focusFirstItemOnShow={false}>
          <div>
            <Toggle>Toggle</Toggle>,
            <Menu>
              <button type="button">Item 1</button>
            </Menu>
          </div>
        </Dropdown>,
        { container: focusableContainer },
      );

      const toggle = root.getByText('Toggle');

      toggle.focus();

      fireEvent.click(toggle);

      document.activeElement.should.equal(toggle);
    });

    it('when focused and closed sets focus on first menu item when the key "down" is pressed for role="menu"', (done) => {
      const root = render(
        <Dropdown>
          <div>
            <Toggle>Toggle</Toggle>,
            <Menu role="menu">
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
            </Menu>
          </div>
        </Dropdown>,
        { container: focusableContainer },
      );

      const toggle = root.getByText('Toggle');

      toggle.focus();

      fireEvent.keyDown(toggle, { key: 'ArrowDown' });

      setTimeout(() => {
        document.activeElement.should.equal(root.getByText('Item 1'));
        done();
      });
    });

    it('when focused and closed sets focus on first menu item when the focusFirstItemOnShow is true', () => {
      const root = render(
        <Dropdown focusFirstItemOnShow>
          <div>
            <Toggle>Toggle</Toggle>,
            <Menu>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
            </Menu>
          </div>
        </Dropdown>,
        { container: focusableContainer },
      );

      const toggle = root.getByText('Toggle');

      toggle.focus();

      fireEvent.click(toggle);

      return Promise.resolve().then(() => {
        document.activeElement.should.equal(root.getByText('Item 1'));
      });
    });

    it('when open and the key "Escape" is pressed the menu is closed and focus is returned to the button', () => {
      const root = render(<SimpleDropdown defaultShow />, {
        container: focusableContainer,
      });

      const firstItem = root.getByText('Item 1');

      firstItem.focus();
      document.activeElement.should.equal(firstItem);

      fireEvent.keyDown(firstItem, { key: 'Escape' });

      document.activeElement.should.equal(root.getByText('Toggle'));
    });

    it('when open and a search input is focused and the key "Escape" is pressed the menu stays open', () => {
      const toggleSpy = sinon.spy();
      const root = render(
        <Dropdown defaultShow onToggle={toggleSpy}>
          <Toggle key="toggle">Toggle</Toggle>,
          <Menu key="menu">
            <input type="search" data-testid="input" />
          </Menu>
        </Dropdown>,
        {
          container: focusableContainer,
        },
      );

      const input = root.getByTestId('input');

      input.focus();
      document.activeElement.should.equal(input);

      fireEvent.keyDown(input, { key: 'Escape' });

      document.activeElement.should.equal(input);

      toggleSpy.should.not.be.called;
    });

    it('when open and the key "tab" is pressed the menu is closed and focus is progress to the next focusable element', () => {
      const root = render(
        <div>
          <SimpleDropdown defaultShow />
          <input type="text" id="next-focusable" />
        </div>,
        { container: focusableContainer },
      );

      const toggle = root.getByText('Toggle');

      toggle.focus();

      fireEvent.keyDown(toggle, { key: 'Tab' });
      fireEvent.keyUp(toggle, { key: 'Tab' });

      toggle.getAttribute('aria-expanded').should.equal('false');

      // simulating a tab event doesn't actually shift focus.
      // at least that seems to be the case according to SO.
      // hence no assert on the input having focus.
    });
  });

  it('should not call onToggle if the menu ref not defined and "tab" is pressed', () => {
    const onToggleSpy = sinon.spy();
    const root = render(
      <SimpleDropdown onToggle={onToggleSpy} renderMenuOnMount={false} />,
      {
        container: focusableContainer,
      },
    );

    const toggle = root.getByText('Toggle');
    toggle.focus();

    fireEvent.keyDown(toggle, { key: 'Tab' });
    fireEvent.keyUp(toggle, { key: 'Tab' });

    onToggleSpy.should.not.be.called;
  });

  it('should not call onToggle if the menu is hidden and "tab" is pressed', () => {
    const onToggleSpy = sinon.spy();
    const root = render(<SimpleDropdown onToggle={onToggleSpy} />, {
      container: focusableContainer,
    });

    const toggle = root.getByText('Toggle');
    toggle.focus();

    fireEvent.keyDown(toggle, { key: 'Tab' });
    fireEvent.keyUp(toggle, { key: 'Tab' });

    onToggleSpy.should.not.be.called;
  });

  describe('popper config', () => {
    it('can add modifiers', (done) => {
      const spy = sinon.spy();
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
        <Dropdown show id="test-id">
          <div>
            <Toggle>Child Title</Toggle>
            <Menu popperConfig={popper}>
              <button type="button">Item 1</button>
              <button type="button">Item 2</button>
            </Menu>
          </div>
        </Dropdown>,
      );

      setTimeout(() => {
        spy.should.have.been.calledOnce;
        done();
      });
    });
  });
});
