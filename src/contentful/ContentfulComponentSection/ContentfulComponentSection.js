import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import contentfulComponents from '../components'
import styled from 'styled-components'

export default ({ id }) => {
  const item = useStaticQuery(
    graphql`
      query AllContentfulComponentSection {
        allContentfulComponentSection {
          nodes {
            id
            backgroundColor
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

  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${item.backgroundColor};
    padding: var(--spacing-7) var(--spacing-4);
  `

  const Content = styled.div`
    max-width: 996px;
    width: 100%;
  `

  return (
    <Container>
      <Content>
        {item.components.map((component, i) =>
          createContentfulComponent(component.id, component.__typename, i)
        )}
      </Content>
    </Container>
  )
}
