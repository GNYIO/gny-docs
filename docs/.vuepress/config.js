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
    ['vuepress-plugin-code-copy', true],
    ['seo'],
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
        title: 'HTTP',
        path: '/http/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['/http/api', 'API'],
          ['/http/exchange-endpoints', 'Exchange Endpoints'],
        ],
      },
      {
        title: 'Contribute',
        path: '/contribute/', // important is a / at the end
        collapsable: false,
        sidebarDepth: 0, // important otherwise the sidebar would get confusing
        children: [
          ['/contribute/install', 'Install'],
          ['/contribute/docker', 'Docker'],
          {
            title: 'Sub-Packages',
            path: '/contribute/sub-packages/',
            sidebarDepth: 0,
            collapsable: true,
            children: [
              ['/contribute/sub-packages/architecture', 'Architecture'],
              [
                '/contribute/sub-packages/database-postgres',
                'Pkg. Database-Postgres',
              ],
              ['/contribute/sub-packages/base', 'Pkg. Base'],
              ['/contribute/sub-packages/interfaces', 'Pkg. Interfaces'],
              ['/contribute/sub-packages/p2p', 'Pkg. P2P'],
              ['/contribute/sub-packages/extendedJoi', 'Pkg. Extended Joi'],
              ['/contribute/sub-packages/utils', 'Pkg. Utils'],
            ],
          },
        ],
      },
      {
        title: 'JavaScript Client',
        path: '/client/',
        collapsable: false,
        sidebarDepth: 0,
        children: [['/client/install', 'Install'], ['/client/api', 'API']],
      },
      {
        title: 'CLI',
        path: '/cli/',
        collapsable: false,
        sidebarDepth: 0,
        children: [['/cli/install', 'Install'], ['/cli/commands', 'Commands']],
      },
      {
        title: 'Guides',
        path: '/guide/',
        collapsable: false,
        sidebarDepth: 0,
        children: [['/guide/how-to-send-transactions', 'Send Transaction']],
      },
      {
        title: 'FAQ',
        path: '/faq/',
        collapsable: false,
        sidebarDepth: 0,
      },
    ],
  },
};
