module.exports = {
  title: 'GNY Blockchain',
  description: 'Decentralized machine learning on the blockchain',
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
          bgColor: 'white',
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
        title: 'Run Node with Docker',
        path: '/run-node/', // important is a / at the end
        collapsable: false,
        sidebarDepth: 0, // important otherwise the sidebar would get confusing
        children: [
          ['/run-node/get-started', 'Get Started'],
          ['/run-node/start-node', 'Start node'],
          ['/run-node/configure', 'Configure'],
          ['/run-node/manage-node', 'Manage node'],
        ],
      },
      {
        title: 'Run Bare Metal Node',
        path: '/run-bare-metal-node',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['/run-bare-metal-node/get-started', 'Get Started'],
          ['/run-bare-metal-node/start-node', 'Start node'],
          ['/run-bare-metal-node/configure', 'Configure'],
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
      // {
      //   title: 'Contribute',
      //   path: '/contribute/', // important is a / at the end
      //   collapsable: false,
      //   sidebarDepth: 0, // important otherwise the sidebar would get confusing
      //   children: [
      //     ['/contribute/install', 'Install'],
      //     ['/contribute/docker', 'Docker'],
      //     {
      //       title: 'Sub-Packages',
      //       path: '/contribute/sub-packages/',
      //       sidebarDepth: 0,
      //       collapsable: true,
      //       children: [
      //         ['/contribute/sub-packages/architecture', 'Architecture'],
      //         [
      //           '/contribute/sub-packages/database-postgres',
      //           'Pkg. Database-Postgres',
      //         ],
      //         ['/contribute/sub-packages/base', 'Pkg. Base'],
      //         ['/contribute/sub-packages/interfaces', 'Pkg. Interfaces'],
      //         ['/contribute/sub-packages/p2p', 'Pkg. P2P'],
      //         ['/contribute/sub-packages/extendedJoi', 'Pkg. Extended Joi'],
      //         ['/contribute/sub-packages/utils', 'Pkg. Utils'],
      //       ],
      //     },
      //   ],
      // },
      {
        title: 'JavaScript Client',
        path: '/client/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['/client/install', 'Install'],
          ['/client/api', 'API'],
          ['/client/contract', 'Contract'],
          ['/client/exchange', 'Exchange API'],
        ],
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
        children: [
          ['/guide/create-p2p-secret', 'Create P2P Secret'],
          ['/guide/create-secret', 'Create Secret'],
          ['/guide/check-balance', 'Check Balance'],
          ['/guide/get-gny-on-testnet', 'Get GNY on Testnet'],
          ['/guide/show-address-from-secret', 'Show Address from Secret'],
          ['/guide/how-to-send-transactions', 'Send Transaction'],
          ['/guide/set-username', 'Set Username'],
          ['/guide/register-as-delegate', 'Register as Delegate'],
          ['/guide/vote-for-delegate', 'Vote for Delegate'],
          ['/guide/unvote-delegate', 'Unvote Delegate'],
        ],
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
