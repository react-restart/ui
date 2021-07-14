import * as React from 'react';

export type ButtonType = 'button' | 'reset' | 'submit';

export interface AnchorOptions {
  href?: string;
  rel?: string;
  target?: string;
}

export interface UseButtonPropsOptions extends AnchorOptions {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  tabIndex?: number;
  tagName?: string;
}

export function isTrivialHref(href?: string) {
  return !href || href.trim() === '#';
}

export interface AriaButtonProps {
  type?: ButtonType | undefined;
  disabled: boolean | undefined;
  role?: 'button';
  tabIndex?: number | undefined;
  href?: string | undefined;
  target?: string | undefined;
  rel?: string | undefined;
  'aria-disabled'?: true | undefined;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

export function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type,
}: UseButtonPropsOptions): [AriaButtonProps, { tagName: string }] {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = { tagName };
  if (tagName === 'button') {
    return [{ type: (type as any) || 'button', disabled }, meta];
  }

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

  return [
    {
      role: 'button',
      // explicitly undefined so that it overrides the props disabled in a spread
      // e.g. <Tag {...props} {...hookProps} />
      disabled: undefined,
      tabIndex: disabled ? undefined : tabIndex,
      href: tagName === 'a' && disabled ? undefined : href,
      target: tagName === 'a' ? target : undefined,
      'aria-disabled': !disabled ? undefined : disabled,
      rel: tagName === 'a' ? rel : undefined,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
    },
    meta,
  ];
}

export interface BaseButtonProps {
  /**
   * Control the underlying rendered element directly by passing in a valid
   * component type
   */
  as?: string | undefined;

  /** The disabled state of the button */
  disabled?: boolean | undefined;

  /** Optionally specify an href to render a `<a>` tag styled as a button */
  href?: string | undefined;

  /** Anchor target, when rendering an anchor as a button */
  target?: string | undefined;

  rel?: string | undefined;
}

export interface ButtonProps
  extends BaseButtonProps,
    React.ComponentPropsWithoutRef<'button'> {}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ as: asProp, disabled, ...props }, ref) => {
    const [buttonProps, { tagName }] = useButtonProps({
      tagName: asProp,
      disabled,
      ...props,
    });

    const Component = tagName as any;

    return <Component {...props} {...buttonProps} ref={ref} />;
  },
);

Button.displayName = 'Button';

export default Button;
