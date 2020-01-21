import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ id }) => {
  const item = useStaticQuery(
    graphql`
      query AllContentfulComponentRichText {
        allContentfulComponentRichText {
          nodes {
            id
          }
        }
      }
    `
  ).allContentfulComponentRichText.nodes.find(item => item.id === id)
  return <div>{item.id}</div>
}
