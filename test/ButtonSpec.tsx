import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';

import Button from '../src/Button';
import sinon from 'sinon';

describe('<Button>', () => {
  it('Should output a button', () => {
    const { container } = render(<Button>Title</Button>);

    container.firstElementChild!.tagName.should.equal('BUTTON');
  });

  it('Should have type=button by default', () => {
    const { container } = render(<Button>Title</Button>);

    container.firstElementChild!.getAttribute('type')!.should.equal('button');
  });

  it('Should show the type if passed one', () => {
    const { container } = render(<Button type="submit">Title</Button>);

    container.firstElementChild!.getAttribute('type')!.should.equal('submit');
  });

  it('Should show the type if explicitly passed in when "as" is used', () => {
    const { container } = render(
      <Button as="div" type="submit">
        Title
      </Button>,
    );

    container.firstElementChild!.getAttribute('type')!.should.equal('submit');
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

    ref.current!.tagName.should.equal('BUTTON');

    rerender(
      <div>
        <Button ref={ref} href="a">
          Yo
        </Button>
      </div>,
    );

    ref.current.tagName.should.equal('A');
  });

  it('Should output an anchor if called with a href', () => {
    const href = '/url';

    const { container } = render(<Button href={href}>Title</Button>);
    //.assertSingle(`a[href="${href}"]`);

    expect(container.querySelector(`a[href="${href}"]`)).to.exist;
  });

  it('Should call onClick callback', (done) => {
    const { container } = render(<Button onClick={() => done()}>Title</Button>);

    fireEvent.click(container.firstElementChild!);
  });

  it('Should be disabled button', () => {
    const { container } = render(<Button disabled>Title</Button>);

    expect(container.querySelector(`button[disabled]`)).to.exist;
  });

  it('Should be inferred disabled link', () => {
    const clickSpy = sinon.spy();

    const { container } = render(
      <Button disabled href="#foo" onClick={clickSpy}>
        Title
      </Button>,
    );

    expect(container.querySelector(`a[disabled]`)).to.not.exist;
    const anchor = container.querySelector(`a[role="button"][aria-disabled]`)!;

    expect(anchor).to.exist;

    fireEvent.click(anchor);

    expect(clickSpy).to.have.not.been.called;
  });

  it('Should be disabled link', () => {
    const clickSpy = sinon.spy();

    const { container } = render(
      <Button disabled as="a" onClick={clickSpy}>
        Title
      </Button>,
    );

    const anchor = container.querySelector(`a[role="button"][aria-disabled]`)!;

    expect(anchor).to.exist;

    fireEvent.click(anchor);

    expect(clickSpy).to.have.not.been.called;
  });
});
