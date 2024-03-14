import * as React from 'react';
import useRTGTransitionProps, {
  TransitionProps,
} from './useRTGTransitionProps';

export type RTGTransitionProps = TransitionProps & {
  component: React.ElementType;
};

// Normalizes Transition callbacks when nodeRef is used.
const RTGTransition = React.forwardRef<any, RTGTransitionProps>(
  ({ component: Component, ...props }, ref) => {
    const transitionProps = useRTGTransitionProps(props);

    return <Component ref={ref} {...transitionProps} />;
  },
);

export default RTGTransition;
