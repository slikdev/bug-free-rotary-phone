import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'
import BaseText2 from '../BaseText2/BaseText2'
import { up } from 'styled-breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const LinksContainer = styled.div`
  display: flex;
  white-space: nowrap;
  flex-wrap: wrap;
  > * {
    width: 100%;
    margin-bottom: ${vars.SPACING_5}
  }
  > *:not(:last-child) { margin-right: ${vars.SPACING_5} }
  ${up('md')} {
    > * {
      width: auto;
    }
  }
`

const SocialButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * { margin-bottom: ${vars.SPACING_5} }
  > *:not(:last-child) { margin-right: ${vars.SPACING_5} }
`

const BrandLink = styled.a`
  display: flex;
  color: ${vars.COLOR_RED_1};
  position: relative;
  align-items: center;
`

const ClickoutIcon = styled.img`
  width: 16.8px;
  margin-left: ${vars.SPACING_2};
  display: block;
`

export default ({ slotLinks, slotSocialButtons }) => {
  return (
    <Container>
      <LinksContainer>
      { slotLinks }
      <BaseText2 text={`© Copyright ${(new Date()).getFullYear()}. All Rights Reserved.`}/>
      </LinksContainer>
      <SocialButtonsContainer>
        { slotSocialButtons }
      </SocialButtonsContainer>
      <BrandLink href={process.env.HOME_URL}>{process.env.BRAND_NAME}<ClickoutIcon src={require('../../assets/img/clickout.svg')}/></BrandLink>
    </Container>
  )
}
