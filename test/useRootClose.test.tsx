/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi, beforeEach, afterEach } from 'vitest';

import useRootClose from '../src/useRootClose';

const escapeKeyCode = 27;

describe('useRootClose', () => {
  let attachTo;

  beforeEach(() => {
    attachTo = document.createElement('div');
    document.body.appendChild(attachTo);
  });

  afterEach(() => {
    document.body.removeChild(attachTo);
  });

  describe('using default event', () => {
    // eslint-disable-next-line mocha/no-setup-in-describe
    shouldCloseOn(undefined, 'click');
  });

  describe('using click event', () => {
    // eslint-disable-next-line mocha/no-setup-in-describe
    shouldCloseOn('click', 'click');
  });

  describe('using mousedown event', () => {
    // eslint-disable-next-line mocha/no-setup-in-describe
    shouldCloseOn('mousedown', 'mouseDown');
  });

  function shouldCloseOn(clickTrigger, eventName: 'click' | 'mouseDown') {
    function Wrapper({ onRootClose, disabled }: any) {
      const ref = useRef<HTMLDivElement>(null);

      useRootClose(ref, onRootClose, {
        disabled,
        clickTrigger,
      });

      return (
        <div ref={ref} id="my-div">
          hello there
        </div>
      );
    }

    it('should close when clicked outside', () => {
      const spy = vi.fn();

      render(<Wrapper onRootClose={spy} />, { container: attachTo });

      fireEvent[eventName](document.getElementById('my-div')!);

      expect(spy).toHaveBeenCalledTimes(0);

      fireEvent[eventName](document.body);

      expect(spy).toHaveBeenCalledTimes(1);

      expect(spy.mock.calls[0][0].type).to.be.oneOf(['click', 'mousedown']);
    });

    it('should not close when right-clicked outside', () => {
      const spy = vi.fn();
      render(<Wrapper onRootClose={spy} />, { container: attachTo });

      fireEvent[eventName](document.getElementById('my-div')!, {
        button: 1,
      });

      expect(spy).toHaveBeenCalledTimes(0);

      fireEvent[eventName](document.body, { button: 1 });

      expect(spy).toHaveBeenCalledTimes(0);
    });

    it('should not close when disabled', () => {
      const spy = vi.fn();
      render(<Wrapper onRootClose={spy} disabled />, { container: attachTo });

      fireEvent[eventName](document.getElementById('my-div')!);

      expect(spy).toHaveBeenCalledTimes(0);

      fireEvent[eventName](document.body);

      expect(spy).toHaveBeenCalledTimes(0);
    });

    it('should close when inside another RootCloseWrapper', () => {
      const outerSpy = vi.fn();
      const innerSpy = vi.fn();

      function Inner() {
        const ref = useRef<HTMLDivElement>(null);

        useRootClose(ref, innerSpy, { clickTrigger });

        return (
          <div ref={ref} id="my-other-div">
            hello there
          </div>
        );
      }

      function Outer() {
        const ref = useRef<HTMLDivElement>(null);

        useRootClose(ref, outerSpy, { clickTrigger });

        return (
          <div ref={ref}>
            <div id="my-div">hello there</div>
            <Inner />
          </div>
        );
      }

      render(<Outer />, { container: attachTo });

      fireEvent[eventName](document.getElementById('my-div')!);

      expect(outerSpy).not.toHaveBeenCalled();
      expect(innerSpy).toHaveBeenCalledTimes(1);

      expect(innerSpy.mock.calls[0][0].type).to.be.oneOf([
        'click',
        'mousedown',
      ]);
    });
  }

  describe('using keyup event', () => {
    function Wrapper({ children, onRootClose, event: clickTrigger }: any) {
      const ref = useRef<HTMLDivElement>(null);

      useRootClose(ref, onRootClose, { clickTrigger });

      return (
        <div ref={ref} id="my-div">
          {children}
        </div>
      );
    }

    it('should close when escape keyup', () => {
      const spy = vi.fn();
      render(
        <Wrapper onRootClose={spy}>
          <div id="my-div">hello there</div>
        </Wrapper>,
      );

      expect(spy).toHaveBeenCalledTimes(0);

      fireEvent.keyUp(document.body, { keyCode: escapeKeyCode });

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0].length).to.be.equal(1);
      expect(spy.mock.calls[0][0].keyCode).to.be.equal(escapeKeyCode);
      expect(spy.mock.calls[0][0].type).to.be.equal('keyup');
    });

    it('should close when inside another RootCloseWrapper', () => {
      const outerSpy = vi.fn();
      const innerSpy = vi.fn();

      render(
        <Wrapper onRootClose={outerSpy}>
          <div>
            <div id="my-div">hello there</div>
            <Wrapper onRootClose={innerSpy}>
              <div id="my-other-div">hello there</div>
            </Wrapper>
          </div>
        </Wrapper>,
      );

      fireEvent.keyUp(document.body, { keyCode: escapeKeyCode });

      // TODO: Update to match expectations.
      // expect(outerSpy).to.have.not.been.called;
      expect(innerSpy).toHaveBeenCalledTimes(1);
      expect(innerSpy.mock.calls[0].length).to.be.equal(1);
      expect(innerSpy.mock.calls[0][0].keyCode).to.be.equal(escapeKeyCode);
      expect(innerSpy.mock.calls[0][0].type).to.be.equal('keyup');
    });
  });
});
