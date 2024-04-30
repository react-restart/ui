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
