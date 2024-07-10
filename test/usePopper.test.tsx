import { renderHook, waitFor } from '@testing-library/react';
import { expect, describe, it, beforeEach, afterEach } from 'vitest';
import usePopper from '../src/usePopper';

const sleep = (time?: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

describe('usePopper', () => {
  const elements: Record<string, HTMLElement> = {};

  beforeEach(() => {
    elements.mount = document.createElement('div');
    elements.reference = document.createElement('div');
    elements.popper = document.createElement('div');

    elements.mount.appendChild(elements.reference);
    elements.mount.appendChild(elements.popper);
    document.body.appendChild(elements.mount);
  });

  afterEach(() => {
    elements.mount.parentNode!.removeChild(elements.mount);
  });

  it('should return state', async () => {
    const { result } = renderHook(() =>
      usePopper(elements.reference, elements.popper),
    );

    await waitFor(() => expect(result.current).toHaveProperty('update'));

    expect(result.current.update).toBeInstanceOf(Function);
    expect(result.current.forceUpdate).toBeInstanceOf(Function);
    expect(result.current.styles).toHaveProperty('popper');
  });

  it('should add aria-describedBy for tooltips', async () => {
    elements.popper.setAttribute('role', 'tooltip');
    elements.popper.setAttribute('id', 'example123');

    const { unmount } = renderHook(() =>
      usePopper(elements.reference, elements.popper),
    );

    await waitFor(() =>
      expect(document.querySelector('[aria-describedby="example123"]')).toEqual(
        elements.reference,
      ),
    );

    unmount();

    expect(document.querySelector('[aria-describedby="example123"]')).toEqual(
      null,
    );
  });

  it('should add to existing describedBy', async () => {
    elements.popper.setAttribute('role', 'tooltip');
    elements.popper.setAttribute('id', 'example123');
    elements.reference.setAttribute('aria-describedby', 'foo, bar , baz ');

    const { unmount } = renderHook(() =>
      usePopper(elements.reference, elements.popper),
    );

    await waitFor(() =>
      expect(
        document.querySelector(
          '[aria-describedby="foo, bar , baz ,example123"]',
        ),
      ).toEqual(elements.reference),
    );

    unmount();

    expect(
      document.querySelector('[aria-describedby="foo, bar , baz "]'),
    ).toEqual(elements.reference);
  });

  it('should not aria-describedBy any other role', async () => {
    renderHook(() => usePopper(elements.reference, elements.popper));

    await sleep();

    expect(document.querySelector('[aria-describedby="example123"]')).toEqual(
      null,
    );
  });

  it('should not add add duplicates to aria-describedby', async () => {
    elements.popper.setAttribute('role', 'tooltip');
    elements.popper.setAttribute('id', 'example123');
    elements.reference.setAttribute('aria-describedby', 'foo');

    const result = renderHook(() =>
      usePopper(elements.reference, elements.popper),
    );

    window.dispatchEvent(new Event('resize'));

    await waitFor(() =>
      expect(
        document.querySelector('[aria-describedby="foo,example123"]'),
      ).toEqual(elements.reference),
    );

    result.unmount();

    expect(document.querySelector('[aria-describedby="foo"]')).toEqual(
      elements.reference,
    );
  });
});
