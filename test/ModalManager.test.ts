import css from 'dom-helpers/css';
import getScrollbarSize from 'dom-helpers/scrollbarSize';

import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'vitest';
import ModalManager, { ModalInstance } from '../src/ModalManager';

import { injectCss } from './helpers';

const createModal = (): ModalInstance =>
  ({ dialog: null, backdrop: null } as any);

describe('ModalManager', () => {
  let container, manager;

  beforeEach(() => {
    manager = new ModalManager();
    container = document.createElement('div');
    container.setAttribute('id', 'container');

    const proto = Reflect.getPrototypeOf(container.style)!;
    const base = Reflect.getOwnPropertyDescriptor(proto, 'cssText')!;

    Object.defineProperty(container.style, 'cssText', {
      ...base,
      set: (value) => {
        base.set!.call(container.style, value.replace(/^;/g, ''));
      },
    });

    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    manager = null;
  });

  it('should add Modal', () => {
    const modal = createModal();

    manager.add(modal, container);

    expect(manager.modals.length).to.equal(1);
    expect(manager.modals[0]).to.equal(modal);

    expect(manager.containers[0]).to.equal(container);
    expect(manager.data[0]).to.eql({
      modals: [modal],
      classes: [],
      overflowing: false,
      style: {
        overflow: '',
        paddingRight: '',
      },
    });
  });

  it('should not add a modal twice', () => {
    const modal = createModal();
    manager.add(modal, container);
    manager.add(modal, container);

    expect(manager.modals.length).to.equal(1);
    expect(manager.containers.length).to.equal(1);
    expect(manager.data[0].modals.length).to.equal(1);
  });

  it('should not add a container twice', () => {
    const modalA = createModal();
    const modalB = createModal();

    manager.add(modalA, container);
    manager.add(modalB, container);

    expect(manager.modals.length).to.equal(2);
    expect(manager.containers.length).to.equal(1);
    expect(manager.data[0].modals.length).to.equal(2);
  });

  it('should remove modal', () => {
    const modalA = createModal();
    const modalB = createModal();

    manager.add(modalA, container);
    manager.add(modalB, container);

    manager.remove(modalA);

    expect(manager.modals.length).to.equal(1);
    expect(manager.containers.length).to.equal(1);
    expect(manager.data[0].modals.length).to.equal(1);
  });

  it('should remove container when there are no more modals associated with it', () => {
    const modalA = createModal();
    const modalB = createModal();

    manager.add(modalA, container);
    manager.add(modalB, container);

    expect(manager.data[0].modals.length).to.equal(2);

    manager.remove(modalA);
    manager.remove(modalB);

    expect(manager.modals.length).to.equal(0);
    expect(manager.containers.length).to.equal(0);
    expect(manager.data.length).to.equal(0);
  });

  describe('container aria-hidden', () => {
    let app;

    beforeEach(() => {
      app = document.createElement('div');
      app.setAttribute('id', 'app-root');
      container.appendChild(app);
    });

    it('should add aria-hidden to container siblings', () => {
      manager.add(createModal(), container);

      expect(app.getAttribute('aria-hidden')).to.equal('true');
    });

    it('should not add aria-hidden to modal', () => {
      const modal = createModal();
      const mount = document.createElement('div');

      modal.dialog = mount;
      container.appendChild(mount);
      manager.add(modal, container);

      expect(modal.dialog.getAttribute('aria-hidden')).to.equal(null);
    });

    it('should add aria-hidden to previous modals', () => {
      const modalA = createModal();
      const mount = document.createElement('div');

      modalA.dialog = mount;
      container.appendChild(mount);

      manager.add(modalA, container);
      manager.add(createModal(), container);

      expect(app.getAttribute('aria-hidden')).to.equal('true');
      expect(mount.getAttribute('aria-hidden')).to.equal('true');
    });

    it('should remove aria-hidden on americas next top modal', () => {
      const modalA = createModal();
      const modalB = createModal();
      const mount = document.createElement('div');

      modalA.dialog = mount;
      container.appendChild(mount);

      manager.add(modalA, container);
      manager.add(modalB, container);

      expect(mount.getAttribute('aria-hidden')).to.equal('true');

      manager.remove(modalB, container);

      expect(mount.getAttribute('aria-hidden')).to.equal(null);
    });

    it('should remove aria-hidden on siblings', () => {
      const modal = createModal();

      manager.add(modal, container);

      expect(app.getAttribute('aria-hidden')).to.equal('true');

      manager.remove(modal, container);

      expect(app.getAttribute('aria-hidden')).to.equal(null);
    });
  });

  describe('container styles', () => {
    beforeEach(() => {
      container.appendChild(document.createElement('div'));

      injectCss(`
        #container {
          padding-right: 20px;
          overflow: scroll;
          height: 300px;
        }

        #container > div {
          height: 1000px;
        }
      `);
    });

    afterEach(() => injectCss.reset());

    it('should set container overflow to hidden ', () => {
      const modal = createModal();

      expect(container.style.overflow).to.equal('');

      manager.add(modal, container);

      expect(container.style.overflow).to.equal('hidden');
    });

    it('should respect handleContainerOverflow', () => {
      const modal = createModal();

      expect(container.style.overflow).to.equal('');

      new ModalManager({ handleContainerOverflow: false }).add(
        modal,
        container,
      );

      expect(container.style.overflow).to.equal('');
    });

    it('should set add to existing container padding', () => {
      const modal = createModal();
      manager.add(modal, container);

      expect(container.style.paddingRight).to.equal(
        `${getScrollbarSize() + 20}px`,
      );
    });

    it('should add container classes ', () => {
      const modal = createModal();

      expect(container.className).to.equal('');

      manager.add(modal, container, 'test test-other');

      expect(container.className).to.equal('test test-other');
    });

    it('should restore container overflow style', () => {
      const modal = createModal();

      container.style.overflow = 'scroll';

      expect(container.style.overflow).to.equal('scroll');

      manager.add(modal, container);
      manager.remove(modal);

      expect(container.style.overflow).to.equal('scroll');
    });

    it('should reset overflow style to the computed one', () => {
      const modal = createModal();

      expect(css(container, 'overflow')).to.equal('scroll');

      manager.add(modal, container);
      manager.remove(modal);

      expect(container.style.overflow).to.equal('');
      expect(css(container, 'overflow')).to.equal('scroll');
    });

    it('should only remove styles when there are no associated modals', () => {
      const modalA = createModal();
      const modalB = createModal();

      expect(container.style.overflow).to.equal('');

      manager.add(modalA, container);
      manager.add(modalB, container);

      manager.remove(modalB);

      expect(container.style.overflow).to.equal('hidden');

      manager.remove(modalA);

      expect(container.style.overflow).to.equal('');
      expect(container.style.paddingRight).to.equal('');
    });
  });
});
