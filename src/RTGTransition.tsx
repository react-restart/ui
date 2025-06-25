import * as React from 'react';
import useRTGTransitionProps, {
  type TransitionProps,
} from './useRTGTransitionProps.js';

export type RTGTransitionProps = TransitionProps & {
  component: React.ElementType;
};

// Normalizes Transition callbacks when nodeRef is used.
const RTGTransition = React.forwardRef<any, RTGTransitionProps>(
  ({ component: Component, ...props }, ref) => {
    const transitionProps = useRTGTransitionProps(props as any);

    return <Component ref={ref} {...transitionProps} />;
  },
);

RTGTransition.displayName = 'RTGTransition';

export default RTGTransition;
