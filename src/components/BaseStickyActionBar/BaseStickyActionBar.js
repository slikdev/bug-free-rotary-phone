import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'
import BaseButtonSolid from '../BaseButtonSolid/BaseButtonSolid'
import { up } from 'styled-breakpoints'

const Container = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  background: ${vars.COLOR_BLACK_2};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  z-index: 3;
`

const Text = styled.div`
  font-size: 2rem;
  color: ${vars.COLOR_WHITE_1};
  margin-right: ${vars.SPACING_4};
`

const TextMobile = styled(Text)`
  ${up('md')} {
    display: none;
  }
`

const TextDesktop = styled(Text)`
  display: none;
  ${up('md')} {
    display: block;
  }
`

export default ({ copyDesktop, copyMobile, buttonCopy, buttonLink }) => (
  <Container>
    <TextDesktop>{ copyDesktop }</TextDesktop>
    <TextMobile>{ copyMobile }</TextMobile>
    <BaseButtonSolid
      text={buttonCopy}
      href={buttonLink}
      color="#e40000"
    />
  </Container>
)
