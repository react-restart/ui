/* eslint-disable react/display-name */

import * as React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Transition from 'react-transition-group/Transition';
import simulant from 'simulant';

import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { shouldWarn } from './helpers';

import Modal from '../src/Modal';
import { OPEN_DATA_ATTRIBUTE } from '../src/ModalManager';

describe('<Modal>', () => {
  let attachTo;
  let wrapper;

  const mountWithRef = (el, options) => {
    const ref = React.createRef();
    const Why = (props) => React.cloneElement(el, { ...props, ref });
    wrapper = mount(<Why />, options);
    return ref;
  };

  beforeEach(() => {
    attachTo = document.createElement('div');
    document.body.appendChild(attachTo);
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = null;
    }
    attachTo.remove();
  });

  it('should render the modal content', () => {
    const ref = mountWithRef(
      <Modal show>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    expect(ref.current.dialog.querySelectorAll('strong')).to.have.lengthOf(1);
  });

  it('should disable scrolling on the modal container while open', (done) => {
    const modal = React.createRef();

    class Container extends React.Component {
      ref = React.createRef();

      state = {
        modalOpen: true,
      };

      handleCloseModal = () => {
        this.setState({ modalOpen: false });
      };

      render() {
        return (
          <div ref={this.ref}>
            <Modal
              ref={modal}
              show={this.state.modalOpen}
              onHide={this.handleCloseModal}
              renderBackdrop={(p) => <div data-backdrop {...p} />}
              container={this.ref}
            >
              <strong>Message</strong>
            </Modal>
          </div>
        );
      }
    }

    render(<Container />, { container: attachTo });

    setTimeout(() => {
      const container = document.body;

      let backdrop = modal.current.backdrop;

      expect(container.style.overflow).to.equal('hidden');

      backdrop.click();

      expect(container.style.overflow).to.not.equal('hidden');

      done();
    });
  });

  it('should fire backdrop click callback', () => {
    let onClickSpy = sinon.spy();
    let ref = mountWithRef(
      <Modal show onBackdropClick={onClickSpy}>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    let backdrop = ref.current.backdrop;

    backdrop.click();

    expect(onClickSpy).to.have.been.calledOnce;
  });

  it('should close the modal when the backdrop is clicked', (done) => {
    let doneOp = () => {
      done();
    };
    let ref = mountWithRef(
      <Modal show onHide={doneOp}>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    let backdrop = ref.current.backdrop;

    backdrop.click();
  });

  it('should not close the modal when the "static" backdrop is clicked', () => {
    let onHideSpy = sinon.spy();

    let ref = mountWithRef(
      <Modal show onHide={onHideSpy} backdrop="static">
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    let { backdrop } = ref.current;

    backdrop.click();

    expect(onHideSpy).to.not.have.been.called;
  });

  it('should close the modal when the esc key is pressed', (done) => {
    let doneOp = () => {
      done();
    };

    let ref = mountWithRef(
      <Modal show onHide={doneOp}>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    let { backdrop } = ref.current;

    simulant.fire(backdrop, 'keydown', { code: 'Escape', keyCode: 27 });
  });

  it('should not trigger onHide if e.preventDefault() called', () => {
    const onHideSpy = sinon.spy();
    const onEscapeKeyDown = (e) => {
      e.preventDefault();
    };

    let ref = mountWithRef(
      <Modal show onHide={onHideSpy} onEscapeKeyDown={onEscapeKeyDown}>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    let { backdrop } = ref.current;

    simulant.fire(backdrop, 'keydown', { code: 'Escape', keyCode: 27 });
    expect(onHideSpy).to.not.have.been.called;
  });

  it('should add role to child', () => {
    let dialog;
    wrapper = mount(
      <Modal show>
        <strong
          ref={(r) => {
            dialog = r;
          }}
        >
          Message
        </strong>
      </Modal>,
      { attachTo },
    );

    expect(dialog.getAttribute('role')).to.equal('document');
  });

  it('should allow custom rendering', () => {
    let dialog;
    wrapper = mount(
      <Modal
        show
        renderDialog={(props) => (
          <strong
            {...props}
            role="group"
            ref={(r) => {
              dialog = r;
            }}
          >
            Message
          </strong>
        )}
      />,
      { attachTo },
    );

    expect(dialog.getAttribute('role')).to.equal('group');
  });

  it('should unbind listeners when unmounted', () => {
    const { rerender } = render(
      <div>
        <Modal show>
          <strong>Foo bar</strong>
        </Modal>
      </div>,
      { attachTo },
    );

    expect(document.body.hasAttribute(OPEN_DATA_ATTRIBUTE)).to.equal(true);

    rerender(null);

    expect(document.body.hasAttribute(OPEN_DATA_ATTRIBUTE)).to.equal(false);
  });

  it('should pass transition callbacks to Transition', (done) => {
    // Expected since ref is only a prop in react 19+.
    shouldWarn('Warning: div: `ref` is not a prop');
    let count = 0;
    let increment = () => count++;

    wrapper = mount(
      <Modal
        show
        transition={(p) => <Transition {...p} timeout={0} />}
        onExit={increment}
        onExiting={increment}
        onExited={() => {
          increment();
          expect(count).to.equal(6);
          done();
        }}
        onEnter={increment}
        onEntering={increment}
        onEntered={() => {
          increment();
          wrapper.setProps({ show: false });
        }}
      >
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );
  });

  it('should fire show callback on mount', () => {
    let onShowSpy = sinon.spy();

    mount(
      <Modal show onShow={onShowSpy}>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    expect(onShowSpy).to.have.been.calledOnce;
  });

  it('should fire show callback on update', () => {
    let onShowSpy = sinon.spy();
    wrapper = mount(
      <Modal onShow={onShowSpy}>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    wrapper.setProps({ show: true });

    expect(onShowSpy).to.have.been.calledOnce;
  });

  it('should fire onEscapeKeyDown callback on escape close', () => {
    let onEscapeSpy = sinon.spy();

    let ref = mountWithRef(
      <Modal onEscapeKeyDown={onEscapeSpy}>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    wrapper.setProps({ show: true });

    act(() => {
      simulant.fire(ref.current.backdrop, 'keydown', {
        code: 'Escape',
        keyCode: 27,
      });
    });

    expect(onEscapeSpy).to.have.been.calledOnce;
  });

  it('should accept role on the Modal', () => {
    const ref = mountWithRef(
      <Modal role="alertdialog" show>
        <strong>Message</strong>
      </Modal>,
      { attachTo },
    );

    expect(ref.current.dialog.getAttribute('role')).to.equal('alertdialog');
  });

  it('should accept the `aria-describedby` property on the Modal', () => {
    const ref = mountWithRef(
      <Modal aria-describedby="modal-description" show>
        <strong id="modal-description">Message</strong>
      </Modal>,
      { attachTo },
    );

    expect(ref.current.dialog.getAttribute('aria-describedby')).to.equal(
      'modal-description',
    );
  });

  describe('Focused state', () => {
    let focusableContainer = null;

    beforeEach(() => {
      focusableContainer = document.createElement('div');
      focusableContainer.tabIndex = 0;
      focusableContainer.className = 'focus-container';
      document.body.appendChild(focusableContainer);
      focusableContainer.focus();
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(focusableContainer);
      document.body.removeChild(focusableContainer);
    });

    it('should focus on the Modal when it is opened', () => {
      expect(document.activeElement).to.equal(focusableContainer);

      wrapper = mount(
        <Modal show className="modal">
          <strong>Message</strong>
        </Modal>,
        { attachTo: focusableContainer },
      );

      document.activeElement.className.should.contain('modal');

      wrapper.setProps({ show: false });
      expect(document.activeElement).to.equal(focusableContainer);
    });

    it('should not focus on the Modal when autoFocus is false', () => {
      mount(
        <Modal show autoFocus={false}>
          <strong>Message</strong>
        </Modal>,
        { attachTo: focusableContainer },
      );

      expect(document.activeElement).to.equal(focusableContainer);
    });

    it('should not focus Modal when child has focus', () => {
      expect(document.activeElement).to.equal(focusableContainer);

      mount(
        <Modal show className="modal">
          <div>
            <input autoFocus />
          </div>
        </Modal>,
        { attachTo: focusableContainer },
      );

      let input = document.getElementsByTagName('input')[0];

      expect(document.activeElement).to.equal(input);
    });

    it('should return focus to the modal', (done) => {
      expect(document.activeElement).to.equal(focusableContainer);

      mount(
        <Modal show className="modal">
          <div>
            <input autoFocus />
          </div>
        </Modal>,
        { attachTo: focusableContainer },
      );

      focusableContainer.focus();
      // focus reset runs in a timeout
      setTimeout(() => {
        document.activeElement.className.should.contain('modal');
        done();
      }, 50);
    });

    it('should not attempt to focus nonexistent children', () => {
      // eslint-disable-next-line no-unused-vars
      const Dialog = React.forwardRef((_, __) => null);

      mount(
        <Modal show>
          <Dialog />
        </Modal>,
        { attachTo: focusableContainer },
      );
    });
  });
});
