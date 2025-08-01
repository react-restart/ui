import clsx from 'clsx';
import Button from '@restart/ui/Button';
import BaseDropdown, { DropdownProps } from '@restart/ui/Dropdown';
import { useDropdownMenu } from '@restart/ui/DropdownMenu';
import { useDropdownToggle } from '@restart/ui/DropdownToggle';
import { useDropdownItem } from '@restart/ui/DropdownItem';

import StyledButton from './Button';

const DropdownMenu = ({ role, ...props }) => {
  const [menuProps, { show }] = useDropdownMenu({
    flip: true,
    offset: [0, 8],
  });

  return (
    <div
      {...props}
      {...menuProps}
      role={role}
      className={clsx(
        show ? 'flex ' : 'invisible opacity-0',
        'w-48 py-2 flex-col shadow-lg border-gray-200 border bg-white z-10 rounded absolute',
        'transition-all',
      )}
    />
  );
};

const DropdownItem = ({ eventKey, ...props }) => {
  const [itemProps, { isActive }] = useDropdownItem({
    key: eventKey,
    ...props,
  });

  return (
    <Button
      {...props}
      {...itemProps}
      className={clsx(
        'text-left hover:bg-primary-100 px-6 py-2 focus:ring-2 focus:outline-none',
        isActive && 'bg-primary',
      )}
    />
  );
};

const DropdownToggle = ({ as: Tag = StyledButton, ...props }) => {
  const [itemProps] = useDropdownToggle();

  return (
    <Tag {...props} {...itemProps} className={clsx(props.className, 'caret')} />
  );
};

const Dropdown = (props: DropdownProps) => <BaseDropdown {...props} />;

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
