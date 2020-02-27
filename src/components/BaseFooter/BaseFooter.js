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

const QantasLink = styled.a`
  display: flex;
  color: ${vars.COLOR_RED_1};
  position: relative;
  align-items: center;
`

const ClickoutIcon = styled.img`
  height: 1em;
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
      <QantasLink href="https://www.qantas.com/">qantas<ClickoutIcon src={require('../../assets/img/clickout.svg')}/></QantasLink>
    </Container>
  )
}
