import { fireEvent, render, renderHook, waitFor } from '@testing-library/react';
import { expect, describe, it, beforeEach, afterEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { useState, useRef } from 'react';
import useCallbackRef from '@restart/hooks/useCallbackRef';
import clsx from 'clsx';
import usePopper, { Modifier } from '../src/usePopper';
expect.extend(matchers);

const PopperComponent = ({
  modifiers,
}: {
  modifiers: Partial<Modifier<any, any>>[];
}) => {
  const referenceRef = useRef(null);
  const [popperElement, attachPopperRef] = useCallbackRef<HTMLElement>();
  const [arrowElement, attachArrowRef] = useCallbackRef<HTMLElement>();
  const [show, setShow] = useState(false);

  const { styles, placement } = usePopper(referenceRef.current, popperElement, {
    enabled: show,
    placement: 'right',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      ...modifiers,
    ],
  });

  return (
    <div>
      <button
        type="button"
        ref={referenceRef}
        aria-describedby={show ? 'floating-ui-positioned-div' : undefined}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Hover me
      </button>
      {show && (
        <div
          ref={attachPopperRef}
          id="floating-ui-positioned-div"
          role="tooltip"
          style={styles.popper as React.CSSProperties}
        >
          Hi there!
          <div
            ref={attachArrowRef}
            className={clsx(
              'absolute w-3 h-3',
              placement === 'left' && '-right-1',
              placement === 'right' && '-left-1',
              placement === 'bottom' && '-top-1',
              placement === 'top' && '-bottom-1',
            )}
          />
        </div>
      )}
    </div>
  );
};

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

    await waitFor(() => {
      expect(document.querySelector('[aria-describedby="example123"]')).toEqual(
        null,
      );
    });
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

  it('renders floating element on hover at the right with 20px gap', async () => {
    const { queryByRole, getByRole } = render(
      <PopperComponent
        modifiers={[{ name: 'offset', options: { offset: [0, 20] } }]}
      />,
    );

    // Initially tooltip is not in the DOM
    expect(queryByRole('tooltip')).toBeNull();

    const button = getByRole('button', { name: /hover me/i });

    fireEvent.mouseEnter(button);

    // Tooltip should appear
    const tooltip = getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Hi there!');

    // Check tooltip position relative to button with 20 offset
    const buttonRect = button.getBoundingClientRect();
    await waitFor(() => {
      const tooltipRect = tooltip.getBoundingClientRect();
      expect(tooltipRect.left).not.toBe(0);

      // Assert that tooltip is to the right of button
      expect(Math.abs(tooltipRect.left - (buttonRect.right + 20))).toBeLessThan(
        1,
      );
    });

    fireEvent.mouseLeave(button);

    // Tooltip should disappear
    expect(queryByRole('tooltip')).toBeNull();
  });

  it('can flip the floating element to fallback placement', async () => {
    const { getByRole } = render(
      <PopperComponent
        modifiers={[
          { name: 'flip', options: { fallbackPlacements: ['bottom'] } },
        ]}
      />,
    );

    const button = getByRole('button', { name: /hover me/i });
    button.style.width = '350px';
    fireEvent.mouseEnter(button);

    const tooltip = await waitFor(() => getByRole('tooltip'));

    await waitFor(() => {
      const tooltipRect = tooltip.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const tooltipCenterX = tooltipRect.left + tooltipRect.width / 2;
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;

      // Tooltip is horizontally aligned with the button
      expect(Math.abs(tooltipCenterX - buttonCenterX)).toBeLessThan(1);

      // Tooltip is below the button
      expect(tooltipRect.top).toBeGreaterThanOrEqual(buttonRect.bottom);
    });
  });

  //TODO: add test for layoutEvents and preventOverflow
});
