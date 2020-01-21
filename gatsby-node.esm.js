import * as path from 'path'

export const createPages = async ({ graphql, actions }) => {
  const pageTemplate = path.resolve('./src/templates/TemplatePage/TemplatePage.js')
  const result = await graphql(`
    {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  const pages = result.data.allContentfulPage.edges
  pages.forEach(page => actions.createPage({
    path: page.node.slug,
    component: pageTemplate,
    context: { slug: page.node.slug }
  }))
}
