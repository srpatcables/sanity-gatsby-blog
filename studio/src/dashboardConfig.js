export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f562b5f989466301db6e8a7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-28rsq1cy',
                  apiId: '46ad58a6-9d88-4bcb-a785-156b950e3a7a'
                },
                {
                  buildHookId: '5f562b5f1e2b2fb920b67731',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6vfmsjva',
                  apiId: 'e9cdd5c4-4734-4398-9863-2cd7bbed2337'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/srpatcables/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6vfmsjva.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
