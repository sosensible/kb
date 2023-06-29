export default {
  base: '/kb/',
  title: 'SOSensible Knowledgebase',
  description: 'Welcome to the team!',
  lastUpdated: true,
  outDir: '../deploy',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/sosensible/kb/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Internal team docs.',
      copyright: 'Copyright © 2022-present <a href="https://github.com/sosensible">John Farrar</a>'
    },
    nav: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Projects', link: '/projects' },
          { text: 'Teams', link: '/teams' },
          { text: 'Tools', link: '/tools' },
          { text: 'Tech Directory', link: '/techdir' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'KB',
        collapsible: true,
        items: [
          { text: 'Projects', link: '/projects' },
          { text: 'Teams', link: '/teams' },
          { text: 'Tools', link: '/tools' },
          { text: 'Tech Directory', link: '/techdir' }
        ]
      }
    ]
  }
}