/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-has-content */

import * as React from 'react';

import { useEventCallback } from '@restart/hooks';
import { useButtonProps } from './Button';

export function isTrivialHref(href?: string) {
  return !href || href.trim() === '#';
}

export interface AnchorProps extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  disabled?: boolean;
  role?: string;
  tabIndex?: number;
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ onKeyDown, ...props }, ref) => {
    const [buttonProps] = useButtonProps({ tagName: 'a', ...props });

    const handleKeyDown = useEventCallback(
      (e: React.KeyboardEvent<HTMLElement>) => {
        buttonProps.onKeyDown!(e);
        onKeyDown?.(e);
      },
    );

    if (isTrivialHref(props.href) || props.role === 'button') {
      return (
        <a ref={ref} {...props} {...buttonProps} onKeyDown={handleKeyDown} />
      );
    }

    return <a ref={ref} {...props} onKeyDown={onKeyDown} />;
  },
);

Anchor.displayName = 'Anchor';

export default Anchor;
