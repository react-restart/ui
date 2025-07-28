function isInput(node: Element | null): node is HTMLInputElement {
  return node?.tagName === 'INPUT';
}

function isTabbableRadio(node: HTMLInputElement) {
  if (!node.name) {
    return true;
  }

  const radioScope = node.form || node.ownerDocument;

  const radioSet = Array.from(
    radioScope.querySelectorAll(
      `input[type="radio"][name="${escape(node.name)}"]`,
    ),
  ) as HTMLInputElement[];

  const { form } = node;
  const checked = radioSet.find(
    (input) => input.checked && input.form === form,
  );
  return !checked || checked === node;
}

function isInDisabledFieldset(node: Element) {
  return !!node && node.matches('fieldset[disabled] *');
}

function isFocusableElementMatchingSelector(element: HTMLElement | SVGElement) {
  return (
    !(element as any).disabled &&
    !isInDisabledFieldset(element) &&
    !(isInput(element) && element.type === 'hidden')
  );
}

function isTabbableElementMatchingSelector(element: HTMLElement | SVGElement) {
  if (
    isInput(element) &&
    element.type === 'radio' &&
    !isTabbableRadio(element)
  ) {
    return false;
  }

  if (element.tabIndex < 0) {
    return false;
  }

  return isFocusableElementMatchingSelector(element);
}

// An incomplete set of selectors for HTML elements that are focusable.
// Goal here is to cover 95% of the cases.
const FOCUSABLE_SELECTOR = [
  'input',
  'textarea',
  'select',
  'button',
  'a[href]',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');

export function getTabbableElements(
  container: Element | Document,
  startAt?: HTMLElement,
) {
  let items = Array.from(
    container.querySelectorAll<HTMLElement | SVGElement>(FOCUSABLE_SELECTOR),
  );

  if (startAt) {
    const startIndex = items.indexOf(startAt);

    if (startIndex !== -1) {
      items = items.slice(startIndex);
    }
  }

  return items.filter(isTabbableElementMatchingSelector);
}
