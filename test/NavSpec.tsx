import { fireEvent, render, screen } from '@testing-library/react';
import { expect, describe, beforeEach, afterEach, it } from 'vitest';
import Tabs from '../src/Tabs';
import Nav from '../src/Nav';
import NavItem from '../src/NavItem';

describe('<Nav>', () => {
  let focusableContainer: HTMLElement;

  beforeEach(() => {
    focusableContainer = document.createElement('div');
    document.body.appendChild(focusableContainer);
  });

  afterEach(() => {
    document.body.removeChild(focusableContainer);
  });

  it('When Arrow key is pressed and a nom NavItem element is the activeElement, then the activeElement keeps the same element', () => {
    render(
      <Tabs defaultActiveKey="1">
        <Nav>
          <NavItem eventKey="1">One</NavItem>
          <NavItem eventKey="2">Two</NavItem>
          <input type="text" autoFocus />
        </Nav>
      </Tabs>,
      { container: focusableContainer },
    );

    fireEvent.keyDown(screen.getByText('One'), { key: 'ArrowRight' });

    expect(document.activeElement).toEqual(screen.getByRole('textbox'));
  });
});
