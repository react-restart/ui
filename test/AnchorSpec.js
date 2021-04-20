import { mount, shallow } from 'enzyme';

import Anchor from '../src/Anchor';

describe('Anchor', () => {
  it('renders an anchor tag', () => {
    mount(<Anchor />)
      .getDOMNode()
      .tagName.should.equal('A');
  });

  it('forwards provided href', () => {
    shallow(<Anchor href="http://google.com" />)
      .find('a')
      .prop('href')
      .should.equal('http://google.com');
  });

  xit('ensures that an href is provided', () => {
    mount(<Anchor />)
      .getDOMNode()
      .hasAttribute('href').should.be.true;
  });

  it('forwards onClick handler', () => {
    const handleClick = sinon.spy();

    shallow(<Anchor onClick={handleClick} />)
      .find('a')
      .simulate('click', { preventDefault() {} });

    handleClick.should.have.been.calledOnce;
  });

  it('provides onClick handler as onKeyDown handler for "space"', () => {
    const handleClick = sinon.spy();

    shallow(<Anchor onClick={handleClick} />)
      .find('a')
      .simulate('keyDown', { key: ' ', preventDefault() {} });

    handleClick.should.have.been.calledOnce;
  });

  it('prevents default when no href is provided', () => {
    const handleClick = sinon.spy();

    const wrapper = mount(<Anchor onClick={handleClick} />);
    wrapper.find('a').simulate('click');

    wrapper.setProps({ href: '#' }).find('a').simulate('click');

    expect(handleClick).to.have.been.calledTwice;
    expect(handleClick.getCall(0).args[0].isDefaultPrevented()).to.be.true;
    expect(handleClick.getCall(1).args[0].isDefaultPrevented()).to.be.true;
  });

  it('does not prevent default when href is provided', () => {
    const handleClick = sinon.spy();

    mount(<Anchor href="#foo" onClick={handleClick} />)
      .find('a')
      .simulate('click');

    expect(handleClick).to.have.been.calledOnce;
    expect(handleClick.getCall(0).args[0].isDefaultPrevented()).to.be.false;
  });

  it('forwards provided role', () => {
    shallow(<Anchor role="test" />)
      .find('a')
      .prop('role')
      .should.equal('test');
  });

  it('forwards provided role with href', () => {
    shallow(<Anchor role="test" href="http://google.com" />)
      .find('a')
      .prop('role')
      .should.equal('test');
  });

  it('set role=button with no provided href', () => {
    shallow(<Anchor />)
      .find('a')
      .prop('role')
      .should.equal('button');

    shallow(<Anchor href="#" />)
      .find('a')
      .prop('role')
      .should.equal('button');
  });

  it('sets no role with provided href', () => {
    expect(
      shallow(<Anchor href="http://google.com" />)
        .find('a')
        .prop('role'),
    ).to.not.exist;
  });

  it('Should have a as default component', () => {
    mount(<Anchor />).assertSingle('a');
  });
});
