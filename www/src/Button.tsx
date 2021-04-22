import * as React from 'react';
import { Button as BaseButton, ButtonProps } from '@restart/ui';
import clsx from 'clsx';

const Button = React.forwardRef((props: ButtonProps, ref) => (
  <BaseButton
    ref={ref}
    {...props}
    className={clsx(
      props.className,
      'transition text-md',
      'h-10 cursor-pointer bg-white border border-primary text-primary rounded px-8 mt-4 appearance-none text-center whitespace-no-wrap',
      'focus:outline-none focus:ring-4 ring-brand-200',
      'hover:bg-primary hover:text-white',
      'active:bg-brand-600 active:text-white',
      props.disabled && 'cursor-not-allowed opacity-60',
    )}
  />
));

export default Button;
