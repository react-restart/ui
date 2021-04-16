module.exports = {
  docs: [
    'getting-started',
    'transitions',

    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        'Button',
        {
          type: 'category',
          label: 'Dropdown',
          collapsed: false,
          items: ['Dropdown', 'useDropdownMenu', 'useDropdownToggle'],
        },
        'Modal',
        'Nav',
        'Overlay',
        'Portal',
      ],
    },
    {
      type: 'category',
      label: 'Utilities',
      collapsed: false,
      items: ['usePopper', 'useRootClose'],
    },
  ],
};
