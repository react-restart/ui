//import * as Popper from '@popperjs/core';
import { useCallback, useEffect, useRef, useState } from 'react';
import useSafeState from '@restart/hooks/useSafeState';
import {
  createPopper,
  PopperModifierLikeMiddleware,
  Modifier,
} from './popper.js';
import type { Placement } from '@floating-ui/dom';
import type { Middleware, Strategy } from '@floating-ui/core';

export type { Placement, OffsetOptions as Offset } from '@floating-ui/dom';
export type { Modifier } from './popper.js';

export type ModifierMap = Record<string, Partial<Modifier<any, any>>>;
export type Modifiers =
  | Partial<Modifier<any, any>>[]
  | Record<string, Partial<Modifier<any, any>>>;

// VirtualElement compatible with Floating UI
export type VirtualElement = {
  getBoundingClientRect(): DOMRect;
  contextElement?: Element;
};

// Options for usePopper hook
export interface UsePopperOptions {
  enabled?: boolean;
  placement?: Placement;
  strategy?: Strategy;
  modifiers?: Modifiers;
}

// Popper state returned by the hook
export interface UsePopperState {
  placement: Placement;
  update: () => void;
  attributes: Record<string, Record<string, any>>;
  styles: Record<string, Partial<CSSStyleDeclaration>>;
  state?: any;
}

const EMPTY_MODIFIERS: Modifier<any, any>[] = [];

function useAriaDescribedBy(
  reference: HTMLElement | null,
  popper: HTMLElement | null,
) {
  useEffect(() => {
    if (!reference || !popper) return;

    const role = popper.getAttribute('role')?.toLowerCase();
    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      const ids = reference.getAttribute('aria-describedby');
      if (!ids || !ids.split(',').includes(popper.id)) {
        reference.setAttribute(
          'aria-describedby',
          ids ? `${ids},${popper.id}` : popper.id,
        );
      }
    }

    return () => {
      if ('removeAttribute' in reference) {
        const ids = (reference.getAttribute('aria-describedby') || '')
          .split(',')
          .filter((id) => id.trim() !== popper.id);
        if (!ids.length) reference.removeAttribute('aria-describedby');
        else reference.setAttribute('aria-describedby', ids.join(','));
      }
    };
  }, [reference, popper]);
}

/**
 * React hook for positioning a floating element relative to a reference element using Floating UI
 */
function usePopper(
  referenceElement: VirtualElement | null | undefined,
  popperElement: HTMLElement | null | undefined,
  {
    enabled = true,
    placement = 'bottom',
    modifiers = EMPTY_MODIFIERS,
    strategy = 'absolute',
  }: UsePopperOptions = {},
): UsePopperState {
  const popperInstanceRef = useRef<any>(undefined);

  const update = useCallback(() => {
    popperInstanceRef.current?.update?.();
  }, []);

  const [popperState, setState] = useSafeState(
    useState<UsePopperState>({
      placement,
      update,
      attributes: {},
      styles: { popper: {}, arrow: {} },
    }),
  );

  useAriaDescribedBy(
    referenceElement as HTMLElement | null,
    popperElement as HTMLElement | null,
  );

  const updateModifier: Middleware = {
    name: 'updateStateModifier',
    fn(args) {
      setState({
        ...popperState,
        styles: {
          popper: {
            top: String(args.y ?? 0),
            left: String(args.x ?? 0),
            position: args.strategy,
          },
        },
        state: args,
        placement: args.placement,
      });

      return {};
    },
  };

  // Create the popper instance
  useEffect(() => {
    if (!enabled || referenceElement == null || popperElement == null) return;

    popperInstanceRef.current?.cleanup?.();
    popperInstanceRef.current = createPopper(
      referenceElement as any,
      popperElement,
      {
        placement,
        strategy,
        modifiers: [
          ...((Array.isArray(modifiers)
            ? modifiers
            : Object.values(modifiers)) as PopperModifierLikeMiddleware[]),
          updateModifier,
        ],
      },
    );

    return () => {
      popperInstanceRef.current?.cleanup?.();
      popperInstanceRef.current = undefined;
      setState((s) => ({
        ...s,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      }));
    };
  }, [placement, strategy, enabled, referenceElement, popperElement]);

  return popperState;
}

export default usePopper;
