import React from 'react'
import styled from 'styled-components'
import BaseButtonText from '../BaseButtonText/BaseButtonText'
import BaseButtonOutline from '../BaseButtonOutline/BaseButtonOutline'
import { up, only } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

export default ({ icon, title, paragraph, fontColor, buttonCopy, buttonStyle, buttonColor, buttonLink, columns }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    ${only('sm')} {
      ${columns > 1 && `
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
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: ${vars.SPACING_6};
    color: ${fontColor};
  `

  const Icon = styled.img`
    max-width: 100%;
    max-height: 100%;
  `

  const Title = styled.div`
    margin-bottom: ${vars.SPACING_4};
    font-size: 2.6rem;
    line-height: 1.35;
    ${up('md')} {
      font-size: 3rem;
      ${columns >= 3 ? 'font-size: 2.2rem;' : null}
      ${columns >= 4 ? 'font-size: 2rem;' : null}
    }
    ${only('sm')} {
      ${columns > 1 && `
        font-size: 1.9rem !important;
        font-weight: ${vars.FONT_WEIGHT_BOLD};
      `}
    }
  `

  const Paragraph = styled.div`
    margin-bottom: ${vars.SPACING_5};
    line-height: 1.6;
    font-size: 2rem;
    ${up('md')} {
      font-size: 1.8rem;
    }
    ${only('sm')} {
      ${columns > 1 && `
        font-size: 1.6rem !important;
      `}
    }
  `

  return (
    <Container>
      <IconContainer>
        <Icon src={ icon }/>
      </IconContainer>
      <Title>
        { title }
      </Title>
      <Paragraph>
        { paragraph }
      </Paragraph>
      { buttonStyle === 'text' ? <BaseButtonText text={ buttonCopy } color={ buttonColor } href={ buttonLink }/> : null }
      { buttonStyle === 'outline' ? <BaseButtonOutline text={ buttonCopy } color={ buttonColor } href={ buttonLink }/> : null }
    </Container>
  )
}
