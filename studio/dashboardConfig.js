export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '635aee30b94a7e00502429d6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-q1ca5dpq',
                  apiId: '06a772f6-33f2-4cfb-bcc8-7ef0b9c099e3'
                },
                {
                  buildHookId: '635aee30b60ae7008cceba03',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xh7457dh',
                  apiId: 'e848125b-c8c8-49b1-8374-33e5442e8668'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joelisfar/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xh7457dh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
