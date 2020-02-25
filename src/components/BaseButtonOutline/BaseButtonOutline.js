import React from 'react'
import styled from 'styled-components'
import BaseText5 from '../BaseText5/BaseText5'
import vars from '../../assets/css/vars/vars'


export default ({ text, color, href }) => {

  const styles = (() => {
    if (color === '#e40000') return {
      fontColor: '#e40000',
      borderColor: '#e40000',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      hoverFontColor: '#ffffff',
      hoverBorderColor: '#e40000',
      hoverBackgroundColor: '#e40000'
    }
    if (color === '#ffffff') return {
      fontColor: '#ffffff',
      borderColor: '#ffffff',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      hoverFontColor: '#e40000',
      hoverBorderColor: '#ffffff',
      hoverBackgroundColor: '#ffffff'
    }
  })()

  const Container = styled.a`
    font-size: 1.6rem;
    height: 2em;
    display: flex;
    align-items: center;
    padding: 1.25em 1.8em;
    color: ${styles.fontColor};
    border: solid ${styles.borderColor} 2px;
    background: ${styles.backgroundColor};
    border-radius: ${vars.BORDER_RADIUS_1};
    transition:
      border-color ${vars.TRANSITION_SETTINGS},
      background-color ${vars.TRANSITION_SETTINGS},
      color ${vars.TRANSITION_SETTINGS};
    &:hover {
      color: ${styles.hoverFontColor};
      border-color: ${styles.hoverBorderColor};
      background: ${styles.hoverBackgroundColor};
    }
  `

  return (
    <Container href={ href }>
      <BaseText5 text={ text }/>
    </Container>
  )
}
