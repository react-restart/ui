import { useCallback, useMemo } from 'react';
import { useRef } from 'react';
import useWindow from './useWindow.js';
import useMounted from '@restart/hooks/useMounted';
import useEventCallback from '@restart/hooks/useEventCallback';
import { getTabbableElements } from './tabbable.js';
import activeElement from 'dom-helpers/activeElement';

export function useFocusTrap({
  container,
  disabled,
}: {
  container: HTMLElement;
  disabled?: boolean;
}) {
  const ownerWindow = useWindow();
  const isMounted = useMounted();

  const listenersRef = useRef(new Set<(...args: any[]) => void>());

  const handleEnforceFocus = useEventCallback((_event: FocusEvent) => {
    if (disabled) {
      return;
    }

    const currentActiveElement = activeElement(ownerWindow?.document);

    if (
      container &&
      currentActiveElement &&
      !container.contains(currentActiveElement)
    ) {
      container.focus();
    }
  });

  const start = useCallback(() => {
    const document = ownerWindow?.document;

    if (!document || !isMounted()) {
      return;
    }

    document.addEventListener('focus', handleFocus, { capture: true });
    document.addEventListener('keydown', handleKeydown);

    listenersRef.current.add(handleFocus);
    listenersRef.current.add(handleKeydown);

    function handleKeydown(event: KeyboardEvent) {
      const tabbables = getTabbableElements(container);
      const currentActiveElement = activeElement(ownerWindow?.document);

      const isTabbingBackwards =
        currentActiveElement === tabbables[0] && event.shiftKey;

      const isTabbingForward =
        currentActiveElement === tabbables[tabbables.length - 1];

      if (!isTabbingBackwards && !isTabbingForward) {
        return;
      }

      /**
       * We want focus to move from the focus trapped container out of the document like
       * it would if you tabbed from the end or start of the page.
       *
       * Generally this Just Works for tabbing forward out of the modal, as modals are often
       * the last element in the document. In cases where it isn't or if you tabbed backwards
       * we need to allow focus to move out of the document.
       *
       * This is done by way of a little "trick". `tab` events happen before focus moves so
       * you can shift the focus to a new element and the tab will then move focus forward or backwards
       * depending on the direction. We take advantage of this by moving focus to the first or last tabbable element
       * in the document.
       */
      const bodyTabbables = getTabbableElements(
        ownerWindow?.document ?? document!,
      );

      if (isTabbingBackwards) {
        if (bodyTabbables[0] !== currentActiveElement) {
          bodyTabbables[0]?.focus();
        }
      } else if (isTabbingForward) {
        const lastTabbable = bodyTabbables[bodyTabbables.length - 1];

        if (lastTabbable !== currentActiveElement) {
          lastTabbable?.focus();
        }
      }
    }

    function handleFocus(event: FocusEvent) {
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      setTimeout(() => handleEnforceFocus(event));
    }
  }, [container, handleEnforceFocus]);

  const stop = useCallback(() => {
    listenersRef.current.forEach((listener) => listener());
    listenersRef.current.clear();
  }, []);

  return useMemo(
    () => ({
      start,
      stop,
    }),
    [start, stop],
  );
}
