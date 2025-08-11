export function getWindowEvent(ownerWindow?: Window | null) {
  const win = ownerWindow || window;

  // Store the current event to avoid triggering handlers immediately
  // For things rendered in an iframe, the event might originate on the parent window
  // so we should fall back to that global event if the local one doesn't exist
  // https://github.com/facebook/react/issues/20074
  try {
    return win.event ?? win.parent?.event;
  } catch (err) {
    // catch iframe security errors and fallback to nothing
    return undefined;
  }
}
