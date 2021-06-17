import useIsomorphicEffect from '@restart/hooks/useIsomorphicEffect';
import getScrollParent from 'dom-helpers/scrollParent';
import { useState } from 'react';

export default function useScrollParent(element: null | Element) {
  const [parent, setParent] = useState<Element | Document | null | undefined>(
    null,
  );

  useIsomorphicEffect(() => {
    if (element) {
      setParent(getScrollParent(element as any, true));
    }
  }, [element]);

  return parent;
}
