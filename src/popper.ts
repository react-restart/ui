// Since tsconfig is set for nodenext, these imports are resolving with a { default: ... } object, which
// messes up the types.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import arrow from '@popperjs/core/lib/modifiers/arrow.js';
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles.js';
import eventListeners from '@popperjs/core/lib/modifiers/eventListeners.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';
import hide from '@popperjs/core/lib/modifiers/hide.js';
import offset from '@popperjs/core/lib/modifiers/offset.js';
import popperOffsets from '@popperjs/core/lib/modifiers/popperOffsets.js';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import { placements } from '@popperjs/core/lib/enums.js';
import { popperGenerator } from '@popperjs/core/lib/popper-base.js';

// For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment
export const createPopper = popperGenerator({
  defaultModifiers: [
    hide,
    popperOffsets,
    computeStyles,
    eventListeners,
    offset,
    flip,
    preventOverflow,
    arrow,
  ],
});

export { placements };
