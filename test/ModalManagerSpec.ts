import css from 'dom-helpers/css';
import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import ModalManager, { ModalInstance } from '../src/ModalManager';

import { injectCss } from './helpers';

vi.mock('../src/getScrollbarWidth', () => ({
  default: () => 10,
}));

const createModal = (): ModalInstance =>
  ({ dialog: null, backdrop: null }) as any;

describe('ModalManager', () => {
  let container: HTMLElement, manager: ModalManager;

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
  });

  it('should add Modal', () => {
    const modal = createModal();

    manager.add(modal);

    expect(manager.modals.length).toEqual(1);
    expect(manager.modals[0]).toEqual(modal);

    expect((manager as any).state).to.eql({
      scrollBarWidth: 10,
      style: {
        overflow: '',
        paddingRight: '',
      },
    });
  });

  it('should not add a modal twice', () => {
    const modal = createModal();
    manager.add(modal);
    manager.add(modal);

    expect(manager.modals.length).toEqual(1);
  });

  it('should add multiple modals', () => {
    const modalA = createModal();
    const modalB = createModal();

    manager.add(modalA);
    manager.add(modalB);

    expect(manager.modals.length).toEqual(2);
  });

  it('should remove modal', () => {
    const modalA = createModal();
    const modalB = createModal();

    manager.add(modalA);
    manager.add(modalB);

    manager.remove(modalA);

    expect(manager.modals.length).toEqual(1);
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
      const modal = createModal();

      expect(document.body.style.overflow).toEqual('');

      manager.add(modal);

      expect(document.body.style.overflow).toEqual('hidden');
    });

    it('should respect handleContainerOverflow', () => {
      const modal = createModal();

      expect(document.body.style.overflow).toEqual('');

      const modalManager = new ModalManager({ handleContainerOverflow: false });
      modalManager.add(modal);

      expect(document.body.style.overflow).toEqual('');

      modalManager.remove(modal);

      expect(document.body.style.overflow).toEqual('');
    });

    it('should set add to existing container padding', async () => {
      const modal = createModal();
      manager.add(modal);

      await waitFor(() =>
        expect(document.body.style.paddingRight).toEqual(`${10 + 20}px`),
      );
    });

    it('should set padding to left side if RTL', async () => {
      const modal = createModal();

      new ModalManager({ isRTL: true }).add(modal);

      await waitFor(() =>
        expect(document.body.style.paddingLeft).toEqual(`${10 + 20}px`),
      );
    });

    it('should restore container overflow style', () => {
      const modal = createModal();

      document.body.style.overflow = 'scroll';

      expect(document.body.style.overflow).toEqual('scroll');

      manager.add(modal);
      manager.remove(modal);

      expect(document.body.style.overflow).toEqual('scroll');
      document.body.style.overflow = '';
    });

    it('should reset overflow style to the computed one', () => {
      const modal = createModal();

      expect(css(document.body, 'overflow')).toEqual('scroll');

      manager.add(modal);
      manager.remove(modal);

      expect(document.body.style.overflow).toEqual('');
      expect(css(document.body, 'overflow')).toEqual('scroll');
    });

    it('should only remove styles when there are no associated modals', () => {
      const modalA = createModal();
      const modalB = createModal();

      expect(document.body.style.overflow).toEqual('');

      manager.add(modalA);
      manager.add(modalB);

      manager.remove(modalB);

      expect(document.body.style.overflow).toEqual('hidden');

      manager.remove(modalA);

      expect(document.body.style.overflow).toEqual('');
      expect(document.body.style.paddingRight).toEqual('');
    });
  });
});
