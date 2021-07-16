import css from 'dom-helpers/css';
import getScrollbarSize from 'dom-helpers/scrollbarSize';

import ModalManager from '../src/ModalManager';

import { injectCss } from './helpers';

const createModal = () => ({ dialog: null, backdrop: null });

describe('ModalManager', () => {
  let container, manager;

  beforeEach(() => {
    manager?.reset();
    manager = new ModalManager();
    container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
  });

  afterEach(() => {
    manager?.reset();
    document.body.removeChild(container);
    container = null;
    manager = null;
  });

  it('should add Modal', () => {
    let modal = createModal();

    manager.add(modal);

    expect(manager.modals.length).to.equal(1);
    expect(manager.modals[0]).to.equal(modal);

    expect(manager.state).to.eql({
      scrollBarWidth: 0,
      style: {
        overflow: '',
        paddingRight: '',
      },
    });
  });

  it('should not add a modal twice', () => {
    let modal = createModal();
    manager.add(modal);
    manager.add(modal);

    expect(manager.modals.length).to.equal(1);
  });

  it('should add multiple modals', () => {
    let modalA = createModal();
    let modalB = createModal();

    manager.add(modalA);
    manager.add(modalB);

    expect(manager.modals.length).to.equal(2);
  });

  it('should remove modal', () => {
    let modalA = createModal();
    let modalB = createModal();

    manager.add(modalA);
    manager.add(modalB);

    manager.remove(modalA);

    expect(manager.modals.length).to.equal(1);
  });

  describe('container styles', () => {
    beforeEach(() => {
      injectCss(`
        body {
          padding-right: 20px;
          padding-left: 20px;
          overflow: scroll;
        }

        #container {
          height: 4000px;
        }
      `);
    });

    afterEach(() => injectCss.reset());

    it('should set container overflow to hidden ', () => {
      let modal = createModal();

      expect(document.body.style.overflow).to.equal('');

      manager.add(modal);

      expect(document.body.style.overflow).to.equal('hidden');
    });

    it('should respect handleContainerOverflow', () => {
      let modal = createModal();

      expect(document.body.style.overflow).to.equal('');

      const modalManager = new ModalManager({ handleContainerOverflow: false });
      modalManager.add(modal);

      expect(document.body.style.overflow).to.equal('');

      modalManager.remove(modal);

      expect(document.body.style.overflow).to.equal('');
    });

    it('should set add to existing container padding', () => {
      let modal = createModal();
      manager.add(modal);

      expect(document.body.style.paddingRight).to.equal(
        `${getScrollbarSize() + 20}px`,
      );
    });

    it('should set padding to left side if RTL', () => {
      let modal = createModal();

      new ModalManager({ isRTL: true }).add(modal);

      expect(document.body.style.paddingLeft).to.equal(
        `${getScrollbarSize() + 20}px`,
      );
    });

    it('should restore container overflow style', () => {
      let modal = createModal();

      document.body.style.overflow = 'scroll';

      expect(document.body.style.overflow).to.equal('scroll');

      manager.add(modal);
      manager.remove(modal);

      expect(document.body.style.overflow).to.equal('scroll');
      document.body.style.overflow = '';
    });

    it('should reset overflow style to the computed one', () => {
      let modal = createModal();

      expect(css(document.body, 'overflow')).to.equal('scroll');

      manager.add(modal);
      manager.remove(modal);

      expect(document.body.style.overflow).to.equal('');
      expect(css(document.body, 'overflow')).to.equal('scroll');
    });

    it('should only remove styles when there are no associated modals', () => {
      let modalA = createModal();
      let modalB = createModal();

      expect(document.body.style.overflow).to.equal('');

      manager.add(modalA);
      manager.add(modalB);

      manager.remove(modalB);

      expect(document.body.style.overflow).to.equal('hidden');

      manager.remove(modalA);

      expect(document.body.style.overflow).to.equal('');
      expect(document.body.style.paddingRight).to.equal('');
    });
  });
});
