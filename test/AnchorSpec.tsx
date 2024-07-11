import { render, fireEvent } from '@testing-library/react';

import { expect, describe, it, vi } from 'vitest';

import Anchor from '../src/Anchor';

describe('Anchor', () => {
  it('renders an anchor tag', () => {
    const { container } = render(<Anchor data-testid="anchor" />);

    expect(container.firstElementChild!.tagName).toEqual('A');
  });

  it('forwards provided href', () => {
    const { container } = render(<Anchor href="http://google.com" />);

    expect(container.firstElementChild!.getAttribute('href')!).to.equal(
      'http://google.com',
    );
  });

  it('ensures that a href is a hash if none provided', () => {
    const { container } = render(<Anchor />);

    expect(container.firstElementChild!.getAttribute('href')!).to.equal('#');
  });

  it('forwards onClick handler', () => {
    const handleClick = vi.fn();

    const { container } = render(<Anchor onClick={handleClick} />);

    fireEvent.click(container.firstChild!);

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('provides onClick handler as onKeyDown handler for "space"', () => {
    const handleClick = vi.fn();

    const { container } = render(<Anchor onClick={handleClick} />);

    fireEvent.keyDown(container.firstChild!, { key: ' ' });

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('should call onKeyDown handler when href is non-trivial', () => {
    const onKeyDownSpy = vi.fn();

    const { container } = render(
      <Anchor href="http://google.com" onKeyDown={onKeyDownSpy} />,
    );

    fireEvent.keyDown(container.firstChild!, { key: ' ' });

    expect(onKeyDownSpy).toHaveBeenCalledOnce();
  });

  it('prevents default when no href is provided', () => {
    const handleClick = vi.fn();

    const { container, rerender } = render(<Anchor onClick={handleClick} />);

    fireEvent.click(container.firstChild!);

    rerender(<Anchor onClick={handleClick} href="#" />);

    fireEvent.click(container.firstChild!);

    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(handleClick.mock.calls[0][0].isDefaultPrevented()).toEqual(true);
    expect(handleClick.mock.calls[1][0].isDefaultPrevented()).toEqual(true);
  });

  it('does not prevent default when href is provided', () => {
    const handleClick = vi.fn();

    fireEvent.click(
      render(<Anchor href="#foo" onClick={handleClick} />).container
        .firstChild!,
    );

    expect(handleClick).toHaveBeenCalledOnce();
    expect(handleClick.mock.calls[0][0].isDefaultPrevented()).toEqual(false);
  });

  it('forwards provided role', () => {
    render(<Anchor role="test" />).getByRole('test');
  });

  it('forwards provided role with href', () => {
    render(<Anchor role="test" href="http://google.com" />).getByRole('test');
  });

  it('set role=button with no provided href', () => {
    const wrapper = render(<Anchor />);

    wrapper.getByRole('button');

    wrapper.rerender(<Anchor href="#" />);

    wrapper.getByRole('button');
  });

  it('sets no role with provided href', () => {
    expect(
      render(
        <Anchor href="http://google.com" />,
      ).container.firstElementChild!.hasAttribute('role'),
    ).toEqual(false);
  });
});
