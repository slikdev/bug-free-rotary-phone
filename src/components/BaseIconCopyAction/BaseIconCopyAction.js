import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import BaseButtonText from '../BaseButtonText/BaseButtonText'
import BaseButtonOutline from '../BaseButtonOutline/BaseButtonOutline'
import BaseButtonSolid from '../BaseButtonSolid/BaseButtonSolid'
import { up, only } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${props => props.fontColor};
  ${only('sm')} {
    ${props => props.columns > 1 && `
      width: 72vw;
      box-shadow: ${vars.BOX_SHADOW_1};
      border-radius: ${vars.BORDER_RADIUS_1};
      background: ${vars.COLOR_WHITE_1};
      overflow: hidden;
      padding: ${vars.SPACING_6} ${vars.SPACING_4};
      > *:not(:last-child) {
        margin-bottom: ${vars.SPACING_4} !important;
      }
    `}
  }
`

const IconContainer = styled.div`
  width: 8.4rem;
  height: 8.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: ${vars.SPACING_4};
`

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Title = styled.div`
  margin-bottom: ${vars.SPACING_4};
  font-size: 2.6rem;
  line-height: 1.35;
  max-width: 100%;
  ${up('md')} {
    font-size: 3rem;
    ${props => props.columns >= 3 ? 'font-size: 2.2rem;' : null}
    ${props => props.columns >= 4 ? 'font-size: 2rem;' : null}
  }
  ${only('sm')} {
    ${props => props.columns > 1 && `
      font-size: 1.9rem !important;
      font-weight: ${vars.FONT_WEIGHT_BOLD};
    `}
  }
`

const Paragraph = styled.div`
  margin-bottom: ${vars.SPACING_5};
  line-height: 1.6;
  font-size: 2rem;
  max-width: 100%;
  ${up('md')} {
    font-size: 1.8rem;
  }
  ${only('sm')} {
    ${props => props.columns > 1 && `
      font-size: 1.6rem !important;
    `}
  }
`

export default ({ contentfulTitle, icon, title, paragraph, fontColor, buttonCopy, buttonStyle, buttonColor, buttonLink, trackButtonClick, columns }) => {

  const trackEvent = () => {
    if (!trackButtonClick) return
    ReactGA.event({
      category: 'Icon Copy Action',
      action: 'Click',
      label: contentfulTitle
    })
  }

  const button = (() => {
    if (buttonStyle === 'text') return <BaseButtonText text={ buttonCopy } color={ buttonColor } href={ buttonLink } onClick={ trackEvent }/>
    else if (buttonStyle === 'outline') return <BaseButtonOutline text={ buttonCopy } color={ buttonColor } href={ buttonLink } onClick={ trackEvent }/>
    else if (buttonStyle === 'solid') return <BaseButtonSolid text={ buttonCopy } color={ buttonColor } href={ buttonLink } onClick={ trackEvent }/>
  })()

  return (
    <Container columns={ columns } fontColor={ fontColor }>
      <IconContainer>
        <Icon src={ icon }/>
      </IconContainer>
      <Title columns={ columns }>
        { title }
      </Title>
      <Paragraph columns={ columns }>
        { paragraph }
      </Paragraph>
      { button }
    </Container>
  )
}
