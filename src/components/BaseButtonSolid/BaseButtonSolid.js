import React from 'react'
import styled from 'styled-components'
import BaseText5 from '../BaseText5/BaseText5'
import vars from '../../assets/css/vars/vars'

export default ({ text, backgroundColor, color, href }) => {
  const Container = styled.a`
    font-size: 1.6rem;
    height: 2em;
    display: flex;
    align-items: center;
    padding: 1.25em 1.8em;
    border-radius: ${vars.BORDER_RADIUS_1};
    background: ${backgroundColor};
    color: ${color};
  `

  return (
    <Container href={ href }>
      <BaseText5 text={ text }/>
    </Container>
  )
}
