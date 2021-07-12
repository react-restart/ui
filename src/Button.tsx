import * as React from 'react';

export type ButtonType = 'button' | 'reset' | 'submit' | string;

interface AnchorProps {
  href?: string;
  rel?: string;
  target?: string;
}
interface UseButtonPropsOptions extends AnchorProps {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  tabIndex?: number;
  tagName?: string;
}

function isTrivialHref(href?: string) {
  return !href || href.trim() === '#';
}

export interface DefaultButtonProps {
  type: 'button' | 'reset' | 'submit' | undefined;
  disabled: undefined | boolean;
}

export interface AriaButtonProps {
  role: 'button';
  tabIndex: number;
  href: undefined | string;
  target: undefined | string;
  rel: undefined | string;
  'aria-disabled': undefined | true;
  onClick: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
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
}: UseButtonPropsOptions): [
  DefaultButtonProps | AriaButtonProps,
  { tagName: string },
] {
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

export interface AnchorButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}

export interface HtmlButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export interface OtherButtonProps extends React.HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  as: string;
}

export type ButtonProps =
  | AnchorButtonProps
  | HtmlButtonProps
  | OtherButtonProps;

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ as: asProp, ...props }, ref) => {
    const [buttonProps, { tagName }] = useButtonProps({
      tagName: asProp,
      ...props,
    });

    const Component = (asProp || tagName) as any;

    return <Component {...props} {...buttonProps} ref={ref} />;
  },
);

Button.displayName = 'Button';

export default Button;
