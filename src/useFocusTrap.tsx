import { useCallback, useMemo } from 'react';
import { useRef } from 'react';
import useWindow from './useWindow.js';
import useMounted from '@restart/hooks/useMounted';
import useEventCallback from '@restart/hooks/useEventCallback';
import { getTabbableElements, getTabbableElementsOrSelf } from './tabbable.js';
import activeElement from 'dom-helpers/activeElement';

export function useFocusTrap({
  getContainer,
  disabled,
}: {
  getContainer: () => HTMLElement | null;
  disabled?: () => boolean;
}) {
  const ownerWindow = useWindow();
  const isMounted = useMounted();

  const listenersRef = useRef(new Set<(...args: any[]) => void>());

  const handleKeydown = useEventCallback((event: KeyboardEvent) => {
    const container = getContainer();

    if (event.key !== 'Tab' || !container) {
      return;
    }

    const tabbables = getTabbableElementsOrSelf(container);

    const firstTabbable = tabbables[0];
    const lastTabbable = tabbables[tabbables.length - 1];

    if (event.shiftKey && event.target === tabbables[0]) {
      lastTabbable?.focus();
      event.preventDefault();
      return;
    }

    if (
      (!event.shiftKey && event.target === lastTabbable) ||
      !container.contains(event.target as Element)
    ) {
      firstTabbable?.focus();
      event.preventDefault();
    }
  });

  const handleEnforceFocus = useEventCallback((_event: FocusEvent) => {
    if (disabled?.()) {
      return;
    }

    const container = getContainer();
    const currentActiveElement = activeElement(ownerWindow?.document);

    if (
      container &&
      currentActiveElement &&
      !container.contains(currentActiveElement)
    ) {
      const tabbables = getTabbableElementsOrSelf(container);

      tabbables[0]?.focus();
    }
  });

  const start = useCallback(() => {
    const document = ownerWindow?.document;

    if (!ownerWindow || !document || !isMounted()) {
      return;
    }

    ownerWindow.addEventListener('focus', handleFocus, { capture: true });
    ownerWindow.addEventListener('blur', handleBlur);
    document.addEventListener('keydown', handleKeydown);

    listenersRef.current.add(() => {
      ownerWindow.removeEventListener('focus', handleFocus, { capture: true });
      ownerWindow.removeEventListener('blur', handleBlur);
      document.removeEventListener('keydown', handleKeydown);
    });

    function handleFocus(event: FocusEvent) {
      console.log('handleFocus', event.target);
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      setTimeout(() => handleEnforceFocus(event));
    }

    function handleBlur(event: FocusEvent) {
      console.log('handleBlur', event.target);
    }
  }, [handleEnforceFocus]);

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
