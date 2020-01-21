import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ id }) => {
  const item = useStaticQuery(
    graphql`
      query AllContentfulComponentCarousel {
        allContentfulComponentCarousel {
          nodes {
            id
          }
        }
      }
    `
  ).allContentfulComponentCarousel.nodes.find(item => item.id === id)

  return <div>{item.id}</div>
}
