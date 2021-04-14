import * as React from 'react';
import { mount } from 'enzyme';

import Button from '../src/Button';

describe('<Button>', () => {
  it('Should output a button', () => {
    mount(<Button>Title</Button>)
      .find('button')
      .should.have.length(1);
  });

  it('Should have type=button by default', () => {
    mount(<Button>Title</Button>)
      .find('button')
      .getDOMNode()
      .getAttribute('type')
      .should.equal('button');
  });

  it('Should show the type if passed one', () => {
    mount(<Button type="submit">Title</Button>)
      .find('button')
      .getDOMNode()
      .getAttribute('type')
      .should.equal('submit');
  });

  it('Should show the type if explicitly passed in when "as" is used', () => {
    mount(
      <Button as="div" type="submit">
        Title
      </Button>,
    )
      .getDOMNode()
      .getAttribute('type')
      .should.equal('submit');
  });

  it('Should not have default type=button when "as" is used', () => {
    const wrapper = mount(<Button as="div">Title</Button>);

    expect(wrapper.getDOMNode().getAttribute('type')).to.be.null;
  });

  it('should forward refs to the button', () => {
    const ref = React.createRef();
    mount(
      <div>
        <Button ref={ref}>Yo</Button>
      </div>,
    );

    ref.current.tagName.should.equal('BUTTON');

    mount(
      <div>
        <Button ref={ref} href="a">
          Yo
        </Button>
      </div>,
    );

    ref.current.tagName.should.equal('A');
  });

  it('Should output an anchor if called with a href', () => {
    let href = '/url';

    mount(<Button href={href}>Title</Button>).assertSingle(`a[href="${href}"]`);
  });

  it('Should call onClick callback', (done) => {
    mount(<Button onClick={() => done()}>Title</Button>).simulate('click');
  });

  it('Should be disabled', () => {
    mount(<Button disabled>Title</Button>).assertSingle(`button[disabled]`);
  });

  it('Should be inferred disabled link', () => {
    let clickSpy = sinon.spy();

    mount(
      <Button disabled href="#foo" onClick={clickSpy}>
        Title
      </Button>,
    )
      .assertSingle(`a[aria-disabled]`)
      .simulate('click');

    expect(clickSpy).to.have.not.been.called;
  });

  it('Should be disabled link', () => {
    let clickSpy = sinon.spy();

    mount(
      <Button disabled as="a" onClick={clickSpy}>
        Title
      </Button>,
    )
      .assertSingle(`a[role="button"][aria-disabled]`)
      .simulate('click');

    expect(clickSpy).to.have.not.been.called;
  });
});
