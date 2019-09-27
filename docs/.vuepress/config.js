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
        sidebarDepth: 0, // important otherwise the sidebar would get confusing
        children: [
          ['/blockchain/install', 'Install'],
          ['/blockchain/docker', 'Docker'],
          {
            title: 'Sub-Packages',
            path: '/blockchain/sub-packages/',
            sidebarDepth: 1,
            collapsable: true,
            children: [
              ['/blockchain/sub-packages/architecture', 'Architecture'],
              [
                '/blockchain/sub-packages/database-postgres',
                'Pkg. Database-Postgres',
              ],
              ['/blockchain/sub-packages/base', 'Pkg. Base'],
              ['/blockchain/sub-packages/interfaces', 'Pkg. Interfaces'],
              ['/blockchain/sub-packages/p2p', 'Pkg. P2P'],
            ],
          },
        ],
      },
      {
        title: 'TypeScript Client',
        path: '/client/',
        collapsable: false,
        children: [['/client/install', 'Install'], ['/client/api', 'API']],
      },
      {
        title: 'Guides',
        path: '/guide/',
        collapsable: false,
        children: [['/guide/send-transaction', 'Send Transaction']],
      },
    ],
  },
};
