import * as React from 'react';
import PropTypes from 'prop-types';

import { useEventCallback } from '@restart/hooks';
import { useButtonProps } from './Button';

export interface AnchorProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  href?: string;
  disabled?: boolean;
  role?: string;
  tabIndex?: number;
}

const propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  role: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number]),
};

function isTrivialHref(href?: string) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial are treated like buttons
 */
const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ onKeyDown, ...props }: AnchorProps, ref) => {
    const buttonProps = useButtonProps({ tagName: 'a', ...props });

    const handleKeyDown = useEventCallback(
      (e: React.KeyboardEvent<HTMLElement>) => {
        buttonProps.onKeyDown!(e);
        onKeyDown?.(e);
      },
    );

    if ((isTrivialHref(props.href) && !props.role) || props.role === 'button') {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/no-static-element-interactions
        <a ref={ref} {...props} {...buttonProps} onKeyDown={handleKeyDown} />
      );
    }

    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a ref={ref} {...props} />;
  },
);

Anchor.propTypes = propTypes;
Anchor.displayName = 'Anchor';

export default Anchor;
