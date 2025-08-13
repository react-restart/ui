import listen from 'dom-helpers/listen';
import ownerDocument from 'dom-helpers/ownerDocument';
import { useEffect } from 'react';

import useEventCallback from '@restart/hooks/useEventCallback';
import useClickOutside, {
  type ClickOutsideOptions,
  getRefTarget,
} from './useClickOutside.js';
import { isEscKey } from './utils.js';
import { getWindowEvent } from './getWindowEvent.js';

const noop = () => {};

export interface RootCloseOptions extends ClickOutsideOptions {
  disabled?: boolean;
}

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(
  ref: React.RefObject<Element | null> | Element | null | undefined,
  onRootClose: (e: Event) => void,
  { disabled, clickTrigger }: RootCloseOptions = {},
) {
  const onClose = onRootClose || noop;

  useClickOutside(ref, onClose, { disabled, clickTrigger });

  const handleKeyUp = useEventCallback((e: KeyboardEvent) => {
    if (isEscKey(e)) {
      onClose(e);
    }
  });

  useEffect(() => {
    if (disabled || ref == null) return undefined;

    const doc = ownerDocument(getRefTarget(ref)!);

    let currentEvent = getWindowEvent(doc.defaultView);

    const removeKeyupListener = listen(doc as any, 'keyup', (e) => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleKeyUp(e);
    });

    return () => {
      removeKeyupListener();
    };
  }, [ref, disabled, handleKeyUp]);
}

export default useRootClose;
