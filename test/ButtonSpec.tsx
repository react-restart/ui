import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { vi, expect, describe, it } from 'vitest';
import Button from '../src/Button';

describe('<Button>', () => {
  it('Should output a button', () => {
    const { container } = render(<Button>Title</Button>);

    expect(container.firstElementChild!.tagName).toEqual('BUTTON');
  });

  it('Should have type=button by default', () => {
    const { container } = render(<Button>Title</Button>);

    expect(container.firstElementChild!.getAttribute('type')!).toEqual(
      'button',
    );
  });

  it('Should show the type if passed one', () => {
    const { container } = render(<Button type="submit">Title</Button>);

    expect(container.firstElementChild!.getAttribute('type')!).toEqual(
      'submit',
    );
  });

  it('Should show the type if explicitly passed in when "as" is used', () => {
    const { container } = render(
      <Button as="div" type="submit">
        Title
      </Button>,
    );

    expect(container.firstElementChild!.getAttribute('type')!).toEqual(
      'submit',
    );
  });

  it('Should not have default type=button when "as" is used', () => {
    const { container } = render(<Button as="div">Title</Button>);

    expect(container.firstElementChild!.getAttribute('type')).to.be.null;
  });

  it('should forward refs to the button', () => {
    const ref = React.createRef<any>();
    const { rerender } = render(
      <div>
        <Button ref={ref}>Yo</Button>
      </div>,
    );

    expect(ref.current!.tagName).toEqual('BUTTON');

    rerender(
      <div>
        <Button ref={ref} href="a">
          Yo
        </Button>
      </div>,
    );

    expect(ref.current.tagName).toEqual('A');
  });

  it('Should output an anchor if called with a href', () => {
    const href = '/url';

    const { container } = render(<Button href={href}>Title</Button>);
    // .assertSingle(`a[href="${href}"]`);

    expect(container.querySelector(`a[href="${href}"]`)).to.exist;
  });

  it('Should call onClick callback', async () => {
    const spy = vi.fn();
    const { container } = render(<Button onClick={spy}>Title</Button>);

    fireEvent.click(container.firstElementChild!);

    expect(spy).toHaveBeenCalled();
  });

  it('Should be disabled button', () => {
    const { container } = render(<Button disabled>Title</Button>);

    expect(container.querySelector(`button[disabled]`)).to.exist;
  });

  it('Should be inferred disabled link', () => {
    const clickSpy = vi.fn();

    const { container } = render(
      <Button disabled href="#foo" onClick={clickSpy}>
        Title
      </Button>,
    );

    expect(container.querySelector(`a[disabled]`)).toBeNull();
    const anchor = container.querySelector(`a[role="button"][aria-disabled]`)!;

    expect(anchor).to.exist;

    fireEvent.click(anchor);

    expect(clickSpy).not.toHaveBeenCalled();
  });

  ['#', ''].forEach((href) => {
    it(`should prevent default on trivial href="${href}" clicks`, () => {
      const clickSpy = vi.fn();

      const { getByText } = render(
        <div onClick={clickSpy}>
          <Button href={href}>Title</Button>
        </div>,
      );

      const button = getByText('Title');

      expect(button).to.exist;

      fireEvent.click(button);

      expect(clickSpy).toHaveBeenCalledOnce();
      const event = clickSpy.mock.calls[0][0];

      expect(event.defaultPrevented).to.equal(true);
    });
  });

  it(`should not prevent default on button clicks`, () => {
    const clickSpy = vi.fn();

    const { getByText } = render(
      <div onClick={clickSpy}>
        <Button>Title</Button>
      </div>,
    );

    const button = getByText('Title');

    expect(button).to.exist;

    fireEvent.click(button);

    expect(clickSpy).toHaveBeenCalledOnce();
    const event = clickSpy.mock.calls[0][0];

    expect(event.defaultPrevented).to.equal(false);
  });

  it('Should be disabled link', () => {
    const clickSpy = vi.fn();

    const { container } = render(
      <Button disabled as="a" onClick={clickSpy}>
        Title
      </Button>,
    );

    const anchor = container.querySelector(`a[role="button"][aria-disabled]`)!;

    expect(anchor).to.exist;

    fireEvent.click(anchor);

    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('should render an anchor with # if href not provided', () => {
    const { container } = render(<Button as="a">Title</Button>);

    expect(container.firstElementChild!.getAttribute('href')!).toEqual('#');
  });
});
