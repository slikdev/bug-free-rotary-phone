import React from 'react'
import styled from 'styled-components'
import BaseText5 from '../BaseText5/BaseText5'
import vars from '../../assets/css/vars/vars'

export default ({ text, color, href }) => {

  const styles = (() => {
    if (color === '#e40000') return {
      fontColor: '#ffffff',
      backgroundColor: '#e40000',
      hoverFontColor: '#ffffff',
      hoverBackgroundColor: '#ba0000'
    }
    if (color === '#ffffff') return {
      fontColor: '#e40000',
      backgroundColor: '#ffffff',
      hoverFontColor: '#ffffff',
      hoverBackgroundColor: '#e40000'
    }
  })()

  const Container = styled.a`
    font-size: 1.6rem;
    height: 2em;
    display: flex;
    align-items: center;
    padding: 1.25em 1.8em;
    border-radius: ${vars.BORDER_RADIUS_1};
    background: ${styles.backgroundColor};
    color: ${styles.fontColor};
    transition:
      background-color ${vars.TRANSITION_SETTINGS},
      color ${vars.TRANSITION_SETTINGS};
    &:hover {
      background-color: ${styles.hoverBackgroundColor};
      color: ${styles.hoverFontColor};
    }
  `

  return (
    <Container href={ href }>
      <BaseText5 text={ text }/>
    </Container>
  )
}
