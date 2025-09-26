import clsx from 'clsx';
import React from 'react';

const Tooltip = React.forwardRef(
  ({ children, arrowProps, popper, show: _, ...props }: any, ref: any) => (
    <div ref={ref} {...props} className={clsx(props.className, 'absolute')} role='tooltip'>
      <div
        {...arrowProps}
        style={arrowProps.style}
        className={clsx(
          'absolute w-3 h-3 z-[-1]',
          'before:absolute before:rotate-45 before:bg-black before:top-0 before:left-0 before:w-3 before:h-3',
          popper.placement === 'left' && '-right-1',
          popper.placement === 'right' && '-left-1',
          popper.placement === 'bottom' && '-top-1',
          popper.placement === 'top' && '-bottom-1',
        )}
      />
      <div className="py-1 px-2 text-center rounded bg-black text-white ">
        {children}
      </div>
    </div>
  ),
);

export default Tooltip;
