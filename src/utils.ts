import * as React from 'react';

export function isEscKey(e: KeyboardEvent) {
  return e.code === 'Escape' || e.keyCode === 27;
}

export function getReactVersion() {
  const parts = React.version.split('.');
  return {
    major: +parts[0],
    minor: +parts[1],
    patch: +parts[2],
  };
}

export function getChildRef(
  element?: React.ReactElement | ((...args: any[]) => React.ReactNode) | null,
): React.Ref<any> | null {
  if (!element || typeof element === 'function') {
    return null;
  }
  const { major } = getReactVersion();
  const childRef =
    major >= 19 ? (element.props as any).ref : (element as any).ref;
  return childRef;
}
