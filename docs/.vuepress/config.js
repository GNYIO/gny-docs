module.exports = {
  title: 'GNY Blockchain',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2],
    },
  },
  themeConfig: {
    // displayAllHeaders: true,
    nav: [
      {
        text: 'GNY Source Code',
        link: 'https://github.com/gnyio/gny-experiment',
      },
      {
        text: 'Enhance Documentation',
        link: 'https://github.com/gnyio/gny-docs',
      },
      {
        text: 'Website',
        link: 'https://www.gny.io',
      },
    ],
    sidebar: [
      {
        title: 'Get Started',
        path: '/blockchain/', // important is a / at the end
        collapsable: false,
        sidebarDepth: 3,
        children: [
          ['/blockchain/install', 'Install'],
          ['/blockchain/docker', 'Docker'],
        ],
      },
      {
        title: 'Guides',
        path: '/guide/',
        collapsable: false,
        children: [
          /* ... */
        ],
      },
    ],
  },
};
