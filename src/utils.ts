/* eslint-disable import/prefer-default-export */
export function isEscKey(e: KeyboardEvent) {
  return e.code === 'Escape' || e.keyCode === 27;
}
