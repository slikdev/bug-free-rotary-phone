import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import { up, only } from 'styled-breakpoints'
import BaseButtonText from '../BaseButtonText/BaseButtonText'
import BaseButtonOutline from '../BaseButtonOutline/BaseButtonOutline'
import BaseButtonSolid from '../BaseButtonSolid/BaseButtonSolid'
import vars from '../../assets/css/vars/vars'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${props => props.imageSmall});
  background-size: cover;
  background-position: center center;
  padding: 3rem 2rem;
  color: ${props => props.fontColor};
  ${up('md')} {
    background-image: url(${props => props.imageMedium});
    padding: 8rem 2rem;
  }
  ${up('lg')} {
    background-image: url(${props => props.imageLarge});
    padding: 6rem 2rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 956px;
  width: 100%;
  ${only('sm')} {
    ${props => props.alignContentMobile === 'center-center' && `
      text-align: center;
      justify-content: center;
      align-items: center;
      br {
        content: '';
        &::after {
          content: ' ';
        }
      }
    `}
  }
`

const Title = styled.div`
  font-weight: ${vars.FONT_WEIGHT_BOLD};
  font-size: 2.6rem;
  ${only('sm')} {
    ${props => props.alignContentMobile === 'center-center' && `
      font-size: 3.5rem;
    `}
  }
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
  font-size: 1.8rem;
  ${up('md')} {
    font-size: 2.2rem;
  }
`

const Button = styled.div`
  display: flex;
  margin-top: ${vars.SPACING_4};
`

export default ({ contentfulTitle, title, caption, subtitle, imageLarge, imageMedium, imageSmall, fontColor, buttonCopy, buttonColor, buttonStyle, buttonLink, alignContentMobile }) => {

  const trackEvent = () => {
    ReactGA.event({
      category: 'Carousel Slide',
      action: 'Click',
      label: contentfulTitle
    })
  }

  return (
    <Container
      fontColor={fontColor}
      imageLarge={imageLarge}
      imageMedium={imageMedium}
      imageSmall={imageSmall}>
      <Content alignContentMobile={alignContentMobile}>
        <Title
          dangerouslySetInnerHTML={{ __html: title }}
          alignContentMobile={alignContentMobile}
        />
        { caption && <Caption>{ caption }</Caption> }
        { subtitle && <Subtitle>{ subtitle }</Subtitle> }
        { buttonCopy && (
          <Button>{
            (() => {
              const props = { text: buttonCopy, color: buttonColor, href: buttonLink, onClick: trackEvent }
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
