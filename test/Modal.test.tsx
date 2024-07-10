/* eslint-disable max-classes-per-file */
/* eslint-disable react/display-name */

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import {
  expect,
  describe,
  it,
  afterEach,
  assert,
  beforeEach,
  vi,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import Modal, { ModalHandle } from '../src/Modal';

describe('<Modal>', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  const getDialog = () => screen.getByRole('dialog');

  const waitForDialogToClose = () =>
    waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());

  it('should render the modal content', () => {
    render(
      <Modal show>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    expect(getDialog().querySelectorAll('strong')).toHaveLength(1);
  });

  it('should disable scrolling on the modal container while open', async () => {
    const modal = React.createRef<ModalHandle>();

    class Container extends React.Component {
      ref = React.createRef<any>();

      state = {
        modalOpen: true,
      };

      handleCloseModal = () => {
        this.setState({ modalOpen: false });
      };

      render() {
        return (
          <div data-testId="modalContainer" ref={this.ref}>
            <Modal
              ref={modal}
              show={this.state.modalOpen}
              onHide={this.handleCloseModal}
              container={this.ref}
            >
              <strong>Message</strong>
            </Modal>
          </div>
        );
      }
    }

    render(<Container />, { container });

    const modalContainer = screen.getByTestId('modalContainer');

    const backdrop = modal.current!.backdrop;

    expect(modalContainer.style.overflow).toEqual('hidden');

    await userEvent.click(backdrop!);

    await waitForDialogToClose();

    expect(modalContainer.style.overflow).toEqual('');
  });

  it('should add and remove container classes', async () => {
    const modal = React.createRef<ModalHandle>();

    class Container extends React.Component {
      state = { modalOpen: true };

      ref = React.createRef<any>();

      handleCloseModal = () => {
        this.setState({ modalOpen: false });
      };

      render() {
        return (
          <div data-testId="modalContainer" ref={this.ref}>
            <Modal
              ref={modal}
              show={this.state.modalOpen}
              onHide={this.handleCloseModal}
              containerClassName="test test2"
              container={this.ref}
            >
              <strong>Message</strong>
            </Modal>
          </div>
        );
      }
    }

    render(<Container />, { container });

    const modalContainer = screen.getByTestId('modalContainer');

    expect(modalContainer.classList.contains('test')).toEqual(true);
    expect(modalContainer.classList.contains('test2')).toEqual(true);

    await userEvent.click(modal.current!.backdrop!);
    await waitForDialogToClose();

    expect(modalContainer.classList.contains('test')).toEqual(false);
    expect(modalContainer.classList.contains('test2')).toEqual(false);
  });

  it('should fire backdrop click callback', async () => {
    const onClickSpy = vi.fn();
    const modal = React.createRef<ModalHandle>();

    render(
      <Modal show onBackdropClick={onClickSpy} ref={modal}>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    await userEvent.click(modal.current!.backdrop!);

    expect(onClickSpy).toHaveBeenCalledOnce();
  });

  it('should close the modal when the backdrop is clicked', async () => {
    const spy = vi.fn();
    const modal = React.createRef<ModalHandle>();

    render(
      <Modal show onHide={spy} ref={modal}>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    await userEvent.click(modal.current!.backdrop!);

    expect(spy).toHaveBeenCalledOnce();
  });

  it('should not close the modal when the "static" backdrop is clicked', async () => {
    const spy = vi.fn();
    const modal = React.createRef<ModalHandle>();

    render(
      <Modal show onHide={spy} backdrop="static" ref={modal}>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    await userEvent.click(modal.current!.backdrop!);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should close the modal when the esc key is pressed', () => {
    const spy = vi.fn();

    render(
      <Modal show onHide={spy}>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    fireEvent.keyDown(document.body, { key: 'Escape', keyCode: 27 });
    expect(spy).toHaveBeenCalled();
  });

  it('should not trigger onHide if e.preventDefault() called', () => {
    const spy = vi.fn();
    const modal = React.createRef<ModalHandle>();
    const onEscapeKeyDown = (e) => {
      e.preventDefault();
    };

    render(
      <Modal show onHide={spy} onEscapeKeyDown={onEscapeKeyDown} ref={modal}>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    fireEvent.keyDown(document.body, { key: 'Escape', keyCode: 27 });
    expect(spy).not.toHaveBeenCalled();
  });

  it('should add role to child', () => {
    render(
      <Modal show>
        <div>Message</div>
      </Modal>,
      { container },
    );

    expect(getDialog().firstElementChild!.getAttribute('role')).toEqual(
      'document',
    );
  });

  it('should allow custom rendering', () => {
    render(
      <Modal
        show
        renderDialog={(props) => (
          <div {...props} role="group" data-testid="group">
            Message
          </div>
        )}
      />,
      { container },
    );

    expect(screen.getByTestId('group').getAttribute('role')).toEqual('group');
  });

  it('should unbind listeners when unmounted', () => {
    render(
      <div>
        <Modal show containerClassName="modal-open">
          <strong>Foo bar</strong>
        </Modal>
      </div>,
      { container },
    );

    assert.ok(document.body.classList.contains('modal-open'));

    render(<div />, { container });

    assert.ok(!document.body.classList.contains('modal-open'));
  });

  it('should fire show callback on mount', () => {
    const onShowSpy = vi.fn();

    render(
      <Modal show onShow={onShowSpy}>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    expect(onShowSpy).toBeCalledTimes(1);
  });

  it('should fire show callback on update', () => {
    const onShowSpy = vi.fn();
    const { rerender } = render(
      <Modal onShow={onShowSpy}>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    rerender(
      <Modal show onShow={onShowSpy}>
        <strong>Message</strong>
      </Modal>,
    );

    expect(onShowSpy).toBeCalledTimes(1);
  });

  it('should accept role on the Modal', () => {
    render(
      <Modal role="alertdialog" show>
        <strong>Message</strong>
      </Modal>,
      { container },
    );

    expect(screen.getByRole('alertdialog')).toBeTruthy();
  });

  it('should accept the `aria-describedby` property on the Modal', () => {
    render(
      <Modal aria-describedby="modal-description" show>
        <strong id="modal-description">Message</strong>
      </Modal>,
      { container },
    );

    expect(getDialog().getAttribute('aria-describedby')).toEqual(
      'modal-description',
    );
  });

  describe('Focused state', () => {
    let focusableContainer: HTMLElement;

    beforeEach(() => {
      focusableContainer = document.createElement('div');
      focusableContainer.tabIndex = 0;
      focusableContainer.className = 'focus-container';
      document.body.appendChild(focusableContainer);
      focusableContainer.focus();
    });

    afterEach(() => {
      document.body.removeChild(focusableContainer);
    });

    it('should focus on the Modal when it is opened', () => {
      expect(document.activeElement).toEqual(focusableContainer);

      const result = render(
        <Modal show className="modal">
          <strong>Message</strong>
        </Modal>,
        { container: focusableContainer },
      );

      expect(document.activeElement!.classList.contains('modal')).toBe(true);

      result.rerender(
        <Modal show={false} className="modal">
          <strong>Message</strong>
        </Modal>,
      );

      expect(document.activeElement).toEqual(focusableContainer);
    });

    it('should not focus on the Modal when autoFocus is false', () => {
      render(
        <Modal show autoFocus={false}>
          <strong>Message</strong>
        </Modal>,
        { container: focusableContainer },
      );

      expect(document.activeElement).toEqual(focusableContainer);
    });

    it('should not focus Modal when child has focus', () => {
      expect(document.activeElement).toEqual(focusableContainer);

      render(
        <Modal show className="modal">
          <div>
            <input autoFocus />
          </div>
        </Modal>,
        { container: focusableContainer },
      );

      const input = document.getElementsByTagName('input')[0];

      expect(document.activeElement).toEqual(input);
    });

    it('should return focus to the modal', async () => {
      expect(document.activeElement).toEqual(focusableContainer);

      render(
        <Modal show className="modal">
          <div>
            <input autoFocus />
          </div>
        </Modal>,
        { container: focusableContainer },
      );

      focusableContainer.focus();

      await waitFor(() => {
        expect(document.activeElement!.classList.contains('modal')).toBe(true);
      });
    });
  });
});
