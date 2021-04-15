import * as React from 'react';
import PropTypes from 'prop-types';

import { DynamicRefForwardingComponent } from './types';
import { useButtonProps } from './Button';
import { useEventCallback } from '@restart/hooks';

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
  ({ disabled, onKeyDown, ...props }: AnchorProps, ref) => {
    const buttonProps = useButtonProps({ tagName: 'a', ...props });

    const handleKeyDown = useEventCallback(
      (e: React.KeyboardEvent<HTMLElement>) => {
        buttonProps.onKeyDown!(e);
        onKeyDown?.(e);
      },
    );

    if ((isTrivialHref(props.href) && !props.role) || props.role === 'button') {
      return (
        <a ref={ref} {...props} {...buttonProps} onKeyDown={handleKeyDown} />
      );
    }

    return <a ref={ref} {...props} />;
  },
);

Anchor.propTypes = propTypes;
Anchor.displayName = 'Anchor';

export default Anchor;
