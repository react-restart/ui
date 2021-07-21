module.exports = {
  docs: [
    'getting-started',

    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        'Button',
        'Dropdown',
        'Modal',
        'Nav',
        'Overlay',
        'Portal',
        'Waypoint',
      ],
    },
    {
      type: 'category',
      label: 'Utilities',
      collapsed: false,
      items: ['usePopper', 'useRootClose'],
    },

    'transitions',
    'SSR',
  ],
};
