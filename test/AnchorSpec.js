import { render, fireEvent } from '@testing-library/react';
import Anchor from '../src/Anchor';

describe('Anchor', () => {
  it('renders an anchor tag', () => {
    const { container } = render(<Anchor data-testid="anchor" />);

    container.firstChild.tagName.should.equal('A');
  });

  it('forwards provided href', () => {
    const { container } = render(<Anchor href="http://google.com" />);

    container.firstChild.getAttribute('href').should.equal('http://google.com');
  });

  // xit('ensures that an href is provided', () => {
  //   mount(<Anchor />)
  //     .getDOMNode()
  //     .hasAttribute('href').should.be.true;
  // });

  it('forwards onClick handler', () => {
    const handleClick = sinon.spy();

    const { container } = render(<Anchor onClick={handleClick} />);

    fireEvent.click(container.firstChild);

    handleClick.should.have.been.calledOnce;
  });

  it('provides onClick handler as onKeyDown handler for "space"', () => {
    const handleClick = sinon.spy();

    const { container } = render(<Anchor onClick={handleClick} />);

    fireEvent.keyDown(container.firstChild, { key: ' ' });

    handleClick.should.have.been.calledOnce;
  });

  it('should call onKeyDown handler when href is non-trivial', () => {
    const onKeyDownSpy = sinon.spy();

    const { container } = render(
      <Anchor href="http://google.com" onKeyDown={onKeyDownSpy} />,
    );

    fireEvent.keyDown(container.firstChild, { key: ' ' });

    onKeyDownSpy.should.have.been.calledOnce;
  });

  it('prevents default when no href is provided', () => {
    const handleClick = sinon.spy();

    const { container, rerender } = render(<Anchor onClick={handleClick} />);

    fireEvent.click(container.firstChild);

    rerender(<Anchor onClick={handleClick} href="#" />);

    fireEvent.click(container.firstChild);

    expect(handleClick).to.have.been.calledTwice;
    expect(handleClick.getCall(0).args[0].isDefaultPrevented()).to.be.true;
    expect(handleClick.getCall(1).args[0].isDefaultPrevented()).to.be.true;
  });

  it('does not prevent default when href is provided', () => {
    const handleClick = sinon.spy();

    fireEvent.click(
      render(<Anchor href="#foo" onClick={handleClick} />).container.firstChild,
    );

    expect(handleClick).to.have.been.calledOnce;
    expect(handleClick.getCall(0).args[0].isDefaultPrevented()).to.be.false;
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
      ).container.firstChild.hasAttribute('role'),
    ).to.be.false;
  });
});
