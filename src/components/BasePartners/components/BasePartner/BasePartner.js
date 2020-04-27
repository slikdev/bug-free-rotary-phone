import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import BaseBanner from '../../../BaseBanner/BaseBanner'
import BaseButtonText from '../../../BaseButtonText/BaseButtonText'
import vars from '../../../../assets/css/vars/vars'
import { up } from 'styled-breakpoints'

const Container = styled.a`
  display: flex;
  flex-direction: column;
  box-shadow: ${vars.BOX_SHADOW_1};
  border-radius: ${vars.BORDER_RADIUS_1};
  height: 35rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  ${up('md')} {
    transition: transform ${vars.TRANSITION_SETTINGS};
    &:hover {
      transform: translateY(-5px);
    }
  }
`

const LogoContainer = styled.div`
  background: ${vars.COLOR_GRAY_1};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`

const BannerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border-top-left-radius: ${vars.BORDER_RADIUS_1};
  max-width: 100%;
  white-space: nowrap;
`

const Logo = styled.div`
  width: 14rem;
  height: 5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.logo});
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: ${vars.COLOR_WHITE_1};
  padding: ${vars.SPACING_4};
  flex: 1;
`

const ContentUpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentLower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: ${vars.FONT_WEIGHT_BOLD};
  line-height: 1.5;
`

const Paragraph = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
`

const Terms = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
`

const ButtonContainer = styled.div`
  margin-top: ${vars.SPACING_2};
  * {
    font-size: 1.6rem !important;
  }
`

const trackClick = partner => {
  ReactGA.event({
    category: 'Partner module',
    action: 'Click',
    label: `Partner tile - ${partner}`
  })
}

export default ({ partner, title, paragraph, terms, bannerCopy, buttonCopy, buttonLink, logo }) => (
  <Container href={ buttonLink } onClick={() => trackClick(partner)} target="_blank">
    <LogoContainer>
      { bannerCopy
        ? (
          <BannerContainer>
            <BaseBanner text={ bannerCopy }/>
          </BannerContainer>
        ) : null
      }
      <Logo logo={ logo }/>
    </LogoContainer>
    <Content>
      <ContentUpper>
        <Title>{ title }</Title>
        <Paragraph>{ paragraph }</Paragraph>
      </ContentUpper>
      <ContentLower>
        <Terms>{ terms }</Terms>
        <ButtonContainer>
          <BaseButtonText text={ buttonCopy } color={vars.COLOR_RED_1} as="div"/>
        </ButtonContainer>
      </ContentLower>
    </Content>
  </Container>
)
