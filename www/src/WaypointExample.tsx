import useCallbackRef from '@restart/hooks/useCallbackRef';
import useIsomorphicEffect from '@restart/hooks/useIsomorphicEffect';
import Waypoint, { Position } from '@restart/ui/Waypoint';
import clsx from 'clsx';
import { useState } from 'react';

interface Props {
  horizontal?: boolean;
  scrollIntoView?: boolean;
  margins?: any;
}

const VIEWPORT = 60;
const defaultMargin = {
  top: -VIEWPORT,
  right: -VIEWPORT,
  bottom: -VIEWPORT,
  left: -VIEWPORT,
};
function Spacer({ horizontal }) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center text-4xl',
        horizontal && 'min-w-[30%]',
      )}
    >
      <span
        style={{ lineHeight: '100px' }}
        className={clsx(horizontal && 'transform -rotate-90')}
      >
        ▼
      </span>
    </div>
  );
}

function Overlay({ horizontal }) {
  return (
    <div
      className={clsx('absolute border-black border-2 inset-0')}
      style={{
        boxShadow: `0 0 0 ${VIEWPORT}px rgba(0, 0, 0, .4)`,
        ...(horizontal
          ? { left: `${VIEWPORT}px`, right: `${VIEWPORT}px` }
          : { top: `${VIEWPORT}px`, bottom: `${VIEWPORT}px` }),
      }}
    />
  );
}

function Margins({ margins }) {
  const { top, bottom } = margins;

  return (
    <>
      {top != null && (
        <div
          className="absolute inset-0 z-10 bg-yellow-200 bg-opacity-50"
          style={{
            top: `${top < 0 ? VIEWPORT : VIEWPORT - top}px`,
            bottom: 'auto',
            height: Math.abs(top),
            right: 17,
          }}
        />
      )}
      {bottom != null && (
        <div
          className="absolute inset-0 z-10 bg-yellow-200 bg-opacity-50"
          style={{
            top: 'auto',
            bottom: `${bottom < 0 ? VIEWPORT : VIEWPORT - bottom}px`,
            height: Math.abs(bottom),
            right: 17,
          }}
        />
      )}
    </>
  );
}

function normalizeMargins(margins) {
  if (!margins) return defaultMargin;
  const next = { ...defaultMargin };
  if (margins.top != null) next.top += margins.top;
  if (margins.bottom != null) next.bottom += margins.bottom;

  return next;
}
function WaypointExample({ horizontal, scrollIntoView, margins }: Props) {
  const [root, attachRef] = useCallbackRef<HTMLDivElement>();
  const [message, setMessage] = useState('');

  useIsomorphicEffect(() => {
    if (!scrollIntoView || !root) return;

    root
      .querySelector('.docs-example-waypoint')!
      .scrollIntoView({ block: 'center' });
    // root.scrollTop = root.scrollHeight / 2;
  }, [root]);

  return (
    <div className="relative overflow-hidden mb-4">
      {message && (
        <div
          className={clsx(
            'bg-black bg-opacity-50 text-white p-4 left-1/2 top-1/2 text-center z-10 transform -translate-y-1/2 -translate-x-1/2 absolute w-64',
          )}
        >
          {message}
        </div>
      )}
      <Overlay horizontal={horizontal} />
      {margins && <Margins margins={margins} />}
      <div
        ref={attachRef}
        className={clsx(
          'flex relative overflow-auto border rounded',
          !horizontal && 'flex-col',
        )}
        style={{ minHeight: 200, maxHeight: 400 }}
      >
        <Spacer horizontal={horizontal} />
        <Spacer horizontal={horizontal} />
        <Spacer horizontal={horizontal} />
        <Spacer horizontal={horizontal} />
        <Spacer horizontal={horizontal} />
        <Waypoint
          root="scrollParent"
          rootMargin={normalizeMargins(margins)}
          scrollDirection={horizontal ? 'horizontal' : 'vertical'}
          renderComponent={(ref) => (
            <div
              ref={ref}
              className={clsx(
                'docs-example-waypoint',
                'border-dashed border-primary',
                horizontal ? 'border-l-4' : 'border-t-4',
              )}
            />
          )}
          onPositionChange={({ position }) => {
            if (position === Position.BEFORE || position === Position.AFTER) {
              setMessage(`Exited (${Position[position].toLowerCase()})`);
            }
            if (position === Position.INSIDE) {
              setMessage('Entered');
            }
          }}
        />
        <Spacer horizontal={horizontal} />
        <Spacer horizontal={horizontal} />
        <Spacer horizontal={horizontal} />
        <Spacer horizontal={horizontal} />
        <Spacer horizontal={horizontal} />
      </div>
    </div>
  );
}

export default WaypointExample;
