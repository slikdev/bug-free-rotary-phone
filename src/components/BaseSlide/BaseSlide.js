import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import BaseButtonText from '../BaseButtonText/BaseButtonText'
import BaseButtonOutline from '../BaseButtonOutline/BaseButtonOutline'
import BaseButtonSolid from '../BaseButtonSolid/BaseButtonSolid'
import vars from '../../assets/css/vars/vars'

export default ({ title, caption, subtitle, imageLarge, imageMedium, imageSmall, fontColor, buttonCopy, buttonColor, buttonStyle, buttonLink }) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${imageSmall});
    background-size: cover;
    background-position: center center;
    padding: 3rem 2rem;
    color: ${fontColor};
    ${up('md')} {
      background-image: url(${imageMedium});
      padding: 8rem 2rem;
    }
    ${up('lg')} {
      background-image: url(${imageLarge});
      padding: 6rem 2rem;
    }
  `

  const Content = styled.div`
    max-width: 956px;
    width: 100%;
  `

  const Title = styled.div`
    font-weight: ${vars.FONT_WEIGHT_BOLD};
    font-size: 2.6rem;
    ${up('md')} {
      font-size: 4.2rem;
    }
  `

  const Caption = styled.div`
    margin-top: ${vars.SPACING_1};
    font-size: 1.4rem;
  `

  const Subtitle = styled.div`
    margin-top: ${vars.SPACING_3};
    font-size: 2.2rem;
  `

  const Button = styled.div`
    display: flex;
    margin-top: ${vars.SPACING_4};
  `

  return (
    <Container>
      <Content>
        <Title dangerouslySetInnerHTML={{ __html: title }}/>
        { caption && <Caption>{ caption }</Caption> }
        { subtitle && <Subtitle>{ subtitle }</Subtitle> }
        { buttonCopy && (
          <Button>{
            (() => {
              const props = { text: buttonCopy, color: buttonColor, href: buttonLink }
              if (buttonStyle === 'text') return <BaseButtonText { ...props }/>
              if (buttonStyle === 'outline') return <BaseButtonOutline { ...props }/>
              if (buttonStyle === 'solid') return <BaseButtonSolid { ...props }/>
            })()
          }</Button>
        )}
      </Content>
    </Container>
  )
}
