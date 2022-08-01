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
  tagName?: keyof JSX.IntrinsicElements;
  role?: React.AriaRole;
}

export function isTrivialHref(href?: string) {
  return !href || href.trim() === '#';
}

export interface AriaButtonProps {
  type?: ButtonType;
  disabled: boolean | undefined;
  role?: React.AriaRole;
  tabIndex?: number;
  href?: string;
  target?: string;
  rel?: string;
  'aria-disabled'?: true;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

export interface UseButtonPropsMetadata {
  tagName: React.ElementType;
}

export function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type,
}: UseButtonPropsOptions): [AriaButtonProps, UseButtonPropsMetadata] {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta: UseButtonPropsMetadata = { tagName };
  if (tagName === 'button') {
    return [{ type: (type as any) || 'button', disabled }, meta];
  }

  const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (disabled || (tagName === 'a' && isTrivialHref(href))) {
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

  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href ||= '#';
    if (disabled) {
      href = undefined;
    }
  }

  return [
    {
      role: role ?? 'button',
      // explicitly undefined so that it overrides the props disabled in a spread
      // e.g. <Tag {...props} {...hookProps} />
      disabled: undefined,
      tabIndex: disabled ? undefined : tabIndex,
      href,
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
  as?: keyof JSX.IntrinsicElements;

  /** The disabled state of the button */
  disabled?: boolean;

  /** Optionally specify an href to render a `<a>` tag styled as a button */
  href?: string;

  /** Anchor target, when rendering an anchor as a button */
  target?: string;

  rel?: string;
}

export interface ButtonProps
  extends BaseButtonProps,
    React.ComponentPropsWithoutRef<'button'> {}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ as: asProp, disabled, ...props }, ref) => {
    const [buttonProps, { tagName: Component }] = useButtonProps({
      tagName: asProp,
      disabled,
      ...props,
    });

    return <Component {...props} {...buttonProps} ref={ref} />;
  },
);

Button.displayName = 'Button';

export default Button;
