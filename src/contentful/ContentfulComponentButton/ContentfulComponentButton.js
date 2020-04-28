import React from 'react'
import ReactGA from 'react-ga'
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
            contentfulTitle
            text
            color
            link
            style
          }
        }
      }
    `
  ).allContentfulComponentButton.nodes.find(item => item.id === id)

  const trackEvent = () => {
    ReactGA.event({
      category: 'Component Button',
      action: 'Click',
      label: data.contentfulTitle
    })
  }

  const button = (() => {
    if (data.style === 'text') return <BaseButtonText text={ data.text } color={ data.color } href={ data.link } onClick={ trackEvent }/>
    else if (data.style === 'outline') return <BaseButtonOutline text={ data.text } color={ data.color } href={ data.link } onClick={ trackEvent }/>
    else if (data.style === 'solid') return <BaseButtonSolid text={ data.text } color={ data.color } href={ data.link } onClick={ trackEvent }/>
  })()

  return (
    <Container>
      { button }
    </Container>
  )
}
