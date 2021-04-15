import * as React from 'react';
import PropTypes from 'prop-types';

import { DynamicRefForwardingComponent } from './types';
export type ButtonType = 'button' | 'reset' | 'submit' | string;

interface UseButtonPropsOptions {
  type?: ButtonType;
  href?: string;
  disabled?: boolean;
  target?: any;
  rel?: string;
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  tabIndex?: number;
}

function isTrivialHref(href?: string) {
  return !href || href.trim() === '#';
}

export function useButtonProps({
  tagName = 'button',
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
}: UseButtonPropsOptions & { tagName: string }) {
  if (tagName === 'button') return { disabled };

  const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return {
    role: 'button',
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
  };
}

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'>,
    UseButtonPropsOptions {
  as?: React.ElementType;
}

const propTypes = {
  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: PropTypes.bool,

  /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
  href: PropTypes.string,

  /**
   * Defines HTML button type attribute.
   *
   * @default 'button'
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),

  as: PropTypes.elementType,
};

const Button: DynamicRefForwardingComponent<
  'button',
  ButtonProps
> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, as: Component, ...props }, ref) => {
    const tagName =
      typeof Component === 'string' ? Component : props.href ? 'a' : 'button';

    const buttonProps = useButtonProps({ tagName, ...props });

    Component = Component || tagName;

    if (tagName === 'button' && !type) {
      type = 'button';
    }

    return <Component {...props} {...buttonProps} ref={ref} type={type} />;
  },
);

Button.displayName = 'Button';
Button.propTypes = propTypes;

export default Button;
