export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d0e10683b68c4f294cacd92',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fs2yygy5',
                  apiId: '3620f8f2-deb7-4ed7-b359-048e0463b5ce'
                },
                {
                  buildHookId: '5d0e106873b5815c87bdad9d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-h2votufa',
                  apiId: 'f10ba7cc-df96-4e98-af96-ffd10df4580c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/8mediatech/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-h2votufa.netlify.com', category: 'apps'}
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
