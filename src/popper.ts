import {
  computePosition,
  offset,
  flip,
  shift,
  arrow,
  hide,
  autoUpdate,
  Placement,
  Middleware,
  OffsetOptions,
  Strategy,
  limitShift,
  MiddlewareState,
  AutoUpdateOptions,
  autoPlacement,
} from '@floating-ui/dom';

// Mimic Popper’s placements enum
export const placements = {
  top: 'top',
  bottom: 'bottom',
  right: 'right',
  left: 'left',
  'top-start': 'top-start',
  'top-end': 'top-end',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
  'right-start': 'right-start',
  'right-end': 'right-end',
  'left-start': 'left-start',
  'left-end': 'left-end',
};

export interface Modifier<Name, Options extends { [key: string]: any }> {
  name: Name;
  enabled?: boolean;
  fn: (arg0: MiddlewareState) => ReturnType<Middleware['fn']>;
  options?: Partial<Options>;
}

export type PopperModifierLikeMiddleware = Middleware & {
  enabled?: boolean;
  options?: Modifier<any, any>['options'];
};

export function createPopper(
  reference: HTMLElement,
  popper: HTMLElement,
  options?: {
    placement?: Placement;
    modifiers?: PopperModifierLikeMiddleware[];
    strategy?: Strategy;
  },
) {
  const {
    placement = 'bottom',
    modifiers = [],
    strategy = 'absolute',
  } = options || {};

  // Detect arrow element from modifiers if present
  const arrowModifier = modifiers.find((m) => m.name === 'arrow');

  // Default Popper-like values
  const defaultOffset = 0;
  const defaultArrowPadding = 5;

  const offsetValue = () => {
    let offsetValue: OffsetOptions = defaultOffset;
    const o = modifiers.find((m) => m.name === 'offset');
    if (o?.options?.offset) {
      if (Array.isArray(o?.options?.offset)) {
        if (o.options.offset.length == 2) {
          offsetValue = {
            crossAxis: o.options.offset[0],
            mainAxis: o.options.offset[1],
          };
        } else {
          offsetValue = { mainAxis: o.options.offset[0] };
        }
      }
    }
    return offsetValue;
  };

  const flipMiddleware = () => {
    const flipModifier = modifiers.find((m) => m.name === 'flip');
    if (flipModifier?.enabled !== false) {
      return flip({
        fallbackPlacements: flipModifier?.options?.fallbackPlacements,
        //Rest of the options are not supported by Floating UI
      });
    }
    return undefined;
  };

  const shiftMiddleware = () => {
    const preventOverflowModifier = modifiers.find(
      (m) => m.name === 'preventOverflow',
    );
    if (preventOverflowModifier?.enabled !== false) {
      const {
        mainAxis = true,
        altAxis = false,
        boundary,
        rootBoundary,
        padding = 0,
        tether = true,
        altBoundary = false,
      } = preventOverflowModifier?.options || {};

      return shift({
        mainAxis,
        crossAxis: altAxis,
        boundary,
        rootBoundary,
        padding,
        altBoundary,
        limiter: tether ? limitShift() : undefined,
      });
    }
    return undefined;
  };

  // Map Popper modifiers to Floating UI middleware
  const middleware: Middleware[] = [
    modifiers.find((m) => m.name === 'hide') ? hide() : undefined,
    offset(offsetValue()),
    flipMiddleware(),
    shiftMiddleware(),
    arrowModifier?.options?.element
      ? arrow({
          element: arrowModifier?.options?.element,
          padding: arrowModifier?.options?.padding ?? defaultArrowPadding,
        })
      : undefined,
    ...modifiers.filter(
      (m) =>
        ![
          'offset',
          'flip',
          'preventOverflow',
          'arrow',
          'hide',
          'eventListeners',
        ].includes(m.name),
    ),
    (placement as Placement & 'auto') === 'auto' ? autoPlacement() : undefined,
  ].filter(Boolean) as Middleware[];

  const update = async (): Promise<void> => {
    const { x, y, middlewareData } = await computePosition(reference, popper, {
      placement,
      middleware,
    });

    Object.assign(popper.style, {
      left: `${x}px`,
      top: `${y}px`,
      position: strategy,
    });

    if (arrowModifier?.options?.element && middlewareData.arrow) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow as {
        x: number | null;
        y: number | null;
      };
      Object.assign(arrowModifier.options.element.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
      });
    }
  };

  let autoUpdateOptions: AutoUpdateOptions = {};
  const eventListenersModifier = modifiers.find(
    (m) => m.name === 'eventListeners',
  );

  if (eventListenersModifier?.enabled === false) {
    autoUpdateOptions = {
      ancestorScroll: false,
      ancestorResize: false,
    };
  } else {
    autoUpdateOptions = {
      ancestorScroll: eventListenersModifier?.options?.scroll ?? true,
      ancestorResize: eventListenersModifier?.options?.resize ?? true,
    };
  }

  const cleanup = autoUpdate(reference, popper, update, autoUpdateOptions);
  update();

  return { update, cleanup };
}
