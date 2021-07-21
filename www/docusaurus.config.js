/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'restart/ui',
  tagline: 'Accessible UI building blocks',
  url: ' https://react-restart.github.io/',
  baseUrl: '/ui/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'refresh-dot.svg',
  organizationName: 'react-restart', // Usually your GitHub org/user name.
  projectName: 'ui', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'restart/ui',
      logo: {
        alt: 'My Site Logo',
        src: 'refresh-dot.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  plugins: [require.resolve('./plugins/webpack')],
  presets: [
    [
      '@4c/docusaurus-preset',
      {
        theme: [
          '@docusaurus/theme-classic',
          {
            customCss: [require.resolve('./src/css/tailwind.css')],
          },
        ],
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        reactMetadata: {
          src: '../src/**/*.{js,tsx,ts}',
        },
      },
    ],
  ],
};
