import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import contentfulComponents from '../components'
import BaseLayoutCenter from '../../components/BaseLayoutCenter/BaseLayoutCenter'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentSection {
        allContentfulComponentSection {
          nodes {
            id
            backgroundColorTop
            backgroundColorBottom
            components {
              ... on Node {
                __typename
                id
              }
            }
          }
        }
      }
    `
  ).allContentfulComponentSection.nodes.find(item => item.id === id)

  const createContentfulComponent = (id, __typename, i) => {
    return (ContentfulComponent => <ContentfulComponent id={id} key={i} />)(
      contentfulComponents[__typename]
    )
  }

  return (
    <BaseLayoutCenter
      backgroundColorTop={data.backgroundColorTop}
      backgroundColorBottom={data.backgroundColorBottom}
      slot={data.components.map((component, i) =>
        createContentfulComponent(component.id, component.__typename, i)
      )}
    />
  )
}
