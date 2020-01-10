module.exports = {
  title: 'GNY Blockchain',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2],
    },
  },
  plugins: [
    [
      'vuepress-plugin-zooming',
      {
        // selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
  ],
  themeConfig: {
    repo: 'gnyio/gny-experiment',
    repoLabel: 'GNY Source Code',
    docsRepo: 'gnyio/gny-docs',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: true, // string | boolean
    nav: [
      {
        text: 'Website',
        link: 'https://www.gny.io',
      },
    ],
    sidebar: [
      {
        title: 'Run Node',
        path: '/run-node/', // important is a / at the end
        collapsable: false,
        sidebarDepth: 0, // important otherwise the sidebar would get confusing
        children: [
          ['/run-node/get-started', 'Get Started'],
          ['/run-node/start-node', 'Start node'],
          ['/run-node/configure', 'Configure'],
        ],
      },
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
            sidebarDepth: 0,
            collapsable: true,
            children: [
              ['/blockchain/sub-packages/architecture', 'Architecture'],
              ['/blockchain/sub-packages/raw-api', 'Raw HTTP API'],
              [
                '/blockchain/sub-packages/database-postgres',
                'Pkg. Database-Postgres',
              ],
              ['/blockchain/sub-packages/base', 'Pkg. Base'],
              ['/blockchain/sub-packages/interfaces', 'Pkg. Interfaces'],
              ['/blockchain/sub-packages/p2p', 'Pkg. P2P'],
              ['/blockchain/sub-packages/extendedJoi', 'Pkg. Extended Joi'],
              ['/blockchain/sub-packages/utils', 'Pkg. Utils'],
            ],
          },
        ],
      },
      {
        title: 'TypeScript/JavaScript Client',
        path: '/client/',
        collapsable: false,
        sidebarDepth: 0,
        children: [['/client/install', 'Install'], ['/client/api', 'API']],
      },
      {
        title: 'Guides',
        path: '/guide/',
        collapsable: false,
        sidebarDepth: 0,
        children: [['/guide/how-to-send-transactions', 'Send Transaction']],
      },
    ],
  },
};
