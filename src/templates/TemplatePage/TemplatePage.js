import React from 'react'
import { graphql } from 'gatsby'
import contentfulComponents from '../../contentful/components'

export const query = graphql`
  query ContentfulPageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      components {
        ... on Node {
          __typename
          id
        }
      }
    }
  }
`

export default class TemplatePage extends React.Component {
  createContentfulComponent(id, __typename, i) {
    return (ContentfulComponent => <ContentfulComponent id={id} key={i} />)(
      contentfulComponents[__typename]
    )
  }
  render() {
    const data = this.props.data.contentfulPage
    return (
      <div>
        {data.components.map((component, i) =>
          this.createContentfulComponent(component.id, component.__typename, i)
        )}
      </div>
    )
  }
}
