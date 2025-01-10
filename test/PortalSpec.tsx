import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import React from 'react';
import { Portal } from '../src';

describe('Portal', () => {
  it('should render overlay into container (document)', () => {
    render(
      /* @ts-expect-error missing required props  */
      <Portal>
        <div id="test1" />
      </Portal>,
    );

    expect(document.querySelectorAll('#test1')).to.have.lengthOf(1);
  });

  it('should render overlay into container (DOMNode)', () => {
    const container = document.createElement('div');

    render(
      <Portal container={container}>
        <div id="test1" />
      </Portal>,
    );

    expect(container.querySelectorAll('#test1')).to.have.lengthOf(1);
  });

  it('should render overlay into container (ReactComponent)', () => {
    class Container extends React.Component {
      container = React.createRef<any>();

      render() {
        return (
          <div ref={this.container}>
            <Portal container={this.container}>
              <div id="test1" />
            </Portal>
          </div>
        );
      }
    }

    render(<Container />);

    expect(document.querySelectorAll('#test1')).to.have.lengthOf(1);
  });

  it('should not fail to render a null overlay', () => {
    class Container extends React.Component {
      container = React.createRef<any>();

      render() {
        return (
          <div ref={this.container} id="test1">
            {/* @ts-expect-error  missing required props   */}
            <Portal container={this.container} />
          </div>
        );
      }
    }

    render(<Container />);

    expect(document.getElementById('test1')!.children).to.have.lengthOf(0);
  });
});
