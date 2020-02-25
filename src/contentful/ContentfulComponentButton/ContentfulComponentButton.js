import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseButtonText from '../../components/BaseButtonText/BaseButtonText'
import BaseButtonOutline from '../../components/BaseButtonOutline/BaseButtonOutline'
import BaseButtonSolid from '../../components/BaseButtonSolid/BaseButtonSolid'
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
            style
          }
        }
      }
    `
  ).allContentfulComponentButton.nodes.find(item => item.id === id)

  const button = (() => {
    if (data.style === 'text') return <BaseButtonText text={ data.text } color={ data.color } href={ data.link }/>
    else if (data.style === 'outline') return <BaseButtonOutline text={ data.text } color={ data.color } href={ data.link }/>
    else if (data.style === 'solid') return <BaseButtonSolid text={ data.text } color={ data.color } href={ data.link }/>
  })()

  return (
    <Container>
      { button }
    </Container>
  )
}
