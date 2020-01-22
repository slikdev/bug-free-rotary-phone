import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentSpacer {
        allContentfulComponentSpacer {
          nodes {
            id
            height
          }
        }
      }
    `
  ).allContentfulComponentSpacer.nodes.find(item => item.id === id)

  const Spacer = styled.div`
    width: 100%;
    height: ${data.height};
  `

  return <Spacer/>
}
