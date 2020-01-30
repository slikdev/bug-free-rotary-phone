import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BaseNav } from '../../components/BaseNav/BaseNav'

export default ({ id }) => {
  useStaticQuery(
    graphql`
      query AllContentfulComponentNav {
        allContentfulComponentNav {
          nodes {
            id
          }
        }
      }
    `
  ).allContentfulComponentNav.nodes.find(item => item.id === id)

  return <BaseNav/>
}
