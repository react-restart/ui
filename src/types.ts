import * as React from 'react';

export type EventKey = string | number;

export type IntrinsicElementTypes = keyof JSX.IntrinsicElements;

export type AssignPropsWithRef<
  Inner extends string | React.ComponentType<any>,
  P,
> = Omit<
  React.ComponentPropsWithRef<Inner extends React.ElementType ? Inner : never>,
  keyof P
> &
  P;

export type { AssignPropsWithRef as AssignProps };

export type AssignPropsWithoutRef<
  Inner extends string | React.ComponentType<any>,
  P,
> = Omit<
  React.ComponentPropsWithoutRef<
    Inner extends React.ElementType ? Inner : never
  >,
  keyof P
> &
  P;

export interface DynamicRefForwardingComponent<
  TInitial extends string | React.ComponentType<any>,
  P = { children?: React.ReactNode },
> {
  <As extends string | React.ComponentType<any> = TInitial>(
    props: AssignPropsWithRef<As, { as?: As } & P>,
    context?: any,
  ): React.ReactElement | null;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}

export interface DynamicFunctionComponent<
  TInitial extends string | React.ComponentType<any>,
  P = { children?: React.ReactNode },
> {
  <As extends string | React.ComponentType<any> = TInitial>(
    props: AssignPropsWithoutRef<As, { as?: As } & P>,
    context?: any,
  ): React.ReactElement | null;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}

export class DynamicComponent<
  As extends string | React.ComponentType<any>,
  P = unknown,
> extends React.Component<AssignPropsWithRef<As, { as?: As } & P>> {}

// Need to use this instead of typeof Component to get proper type checking.
export type DynamicComponentClass<
  As extends string | React.ComponentType<any>,
  P = unknown,
> = React.ComponentClass<AssignPropsWithRef<As, { as?: As } & P>>;

export type SelectCallback = (
  eventKey: string | null,
  e: React.SyntheticEvent<unknown>,
) => void;

export interface TransitionCallbacks {
  /**
   * Callback fired before the component transitions in
   */
  onEnter?(node: HTMLElement, isAppearing: boolean): void;
  /**
   * Callback fired as the component begins to transition in
   */
  onEntering?(node: HTMLElement, isAppearing: boolean): void;
  /**
   * Callback fired after the component finishes transitioning in
   */
  onEntered?(node: HTMLElement, isAppearing: boolean): void;
  /**
   * Callback fired right before the component transitions out
   */
  onExit?(node: HTMLElement): void;
  /**
   * Callback fired as the component begins to transition out
   */
  onExiting?(node: HTMLElement): void;
  /**
   * Callback fired after the component finishes transitioning out
   */
  onExited?(node: HTMLElement): void;
}

/** Callback function signatures actually sent to react-transition-group
 * components.
 *
 * Because nodeRef is supplied, react-transition-group leaves off the first
 * HTMLElement positional prop.
 */
export interface ReactTransitionGroupCallbacks {
  /**
   * Callback fired before the component transitions in
   */
  onEnter?(isAppearing: boolean): void;
  /**
   * Callback fired as the component begins to transition in
   */
  onEntering?(isAppearing: boolean): void;
  /**
   * Callback fired after the component finishes transitioning in
   */
  onEntered?(isAppearing: boolean): void;
  /**
   * Callback fired right before the component transitions out
   */
  onExit?(): void;
  /**
   * Callback fired as the component begins to transition out
   */
  onExiting?(): void;
  /**
   * Callback fired after the component finishes transitioning out
   */
  onExited?(): void;
}

export interface TransitionProps extends TransitionCallbacks {
  appear?: boolean;
  children: React.ReactElement;
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}
export interface ReactTransitionGroupProps
  extends ReactTransitionGroupCallbacks {
  children: React.ReactElement;
  in?: boolean;
  mountOnEnter?: boolean;
  nodeRef: React.RefObject<HTMLElement>;
  unmountOnExit?: boolean;
}

export type TransitionComponent = React.ComponentType<TransitionProps>;
export type ReactTransitionGroupComponent =
  React.ComponentType<ReactTransitionGroupProps>;
