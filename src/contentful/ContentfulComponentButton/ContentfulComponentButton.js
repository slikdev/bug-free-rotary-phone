import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseButtonOutline from '../../components/BaseButtonOutline/BaseButtonOutline'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentButton {
        allContentfulComponentButton {
          nodes {
            id
            text
            color
            link
          }
        }
      }
    `
  ).allContentfulComponentButton.nodes.find(item => item.id === id)

  return (
    <Container>
      <BaseButtonOutline
        text={ data.text }
        href={ data.link }
        color={ data.color }
      />
    </Container>
  )
}
