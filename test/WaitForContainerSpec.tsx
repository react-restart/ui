import { render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';

import React, { useRef } from 'react';

import useWaitForDOMRef from '../src/useWaitForDOMRef';

describe('useWaitForDOMRef', () => {
  it('should resolve on first render if possible (element)', () => {
    let renderCount = 0;
    const container = document.createElement('div');

    function Test({ container, onResolved }: any) {
      useWaitForDOMRef(container, onResolved);
      renderCount++;
      return null;
    }

    const onResolved = vi.fn((resolved) => {
      expect(resolved).to.equal(container);
    });

    render(<Test container={container} onResolved={onResolved} />);

    expect(renderCount).toEqual(1);
    expect(onResolved).toHaveBeenCalledOnce();
  });

  it('should resolve on first render if possible (ref)', () => {
    let renderCount = 0;
    const container = React.createRef();

    (container as any).current = document.createElement('div');

    function Test({ container, onResolved }: any) {
      useWaitForDOMRef(container, onResolved);
      renderCount++;
      return null;
    }

    const onResolved = vi.fn((resolved) => {
      expect(resolved).toEqual(container.current);
    });

    render(<Test container={container} onResolved={onResolved} />);

    expect(renderCount).toEqual(1);
    expect(onResolved).toHaveBeenCalledOnce();
  });

  it('should resolve on first render if possible (function)', () => {
    const div = document.createElement('div');
    const container = () => div;
    let renderCount = 0;

    function Test({ container, onResolved }: any) {
      useWaitForDOMRef(container, onResolved);
      renderCount++;
      return null;
    }

    const onResolved = vi.fn((resolved) => {
      expect(resolved).to.equal(div);
    });

    render(<Test container={container} onResolved={onResolved} />);

    expect(renderCount).toEqual(1);
    expect(onResolved).toHaveBeenCalledOnce();
  });

  it('should resolve after if required', () => {
    let renderCount = 0;

    function Test({ container, onResolved }: any) {
      useWaitForDOMRef(container, onResolved);
      renderCount++;
      return null;
    }

    const onResolved = vi.fn((resolved) => {
      expect(resolved.tagName).to.equal('DIV');
    });

    function Wrapper() {
      const container = useRef(null);

      return (
        <>
          <Test container={container} onResolved={onResolved} />
          <div ref={container} />
        </>
      );
    }

    render(<Wrapper />);

    expect(renderCount).toEqual(2);
    expect(onResolved).toHaveBeenCalledOnce();
  });
});
