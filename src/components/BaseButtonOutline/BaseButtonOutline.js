import React from 'react'
import styled from 'styled-components'
import BaseText5 from '../BaseText5/BaseText5'
import vars from '../../assets/css/vars/vars'

const Container = styled.a`
  font-size: 1.6rem;
  height: 2em;
  display: flex;
  align-items: center;
  padding: 1.25em 1.8em;
  color: ${props => props.fontColor};
  border: solid ${props => props.borderColor} 2px;
  background: ${props => props.backgroundColor};
  border-radius: ${vars.BORDER_RADIUS_1};
  transition:
    border-color ${vars.TRANSITION_SETTINGS},
    background-color ${vars.TRANSITION_SETTINGS},
    color ${vars.TRANSITION_SETTINGS};
  &:hover {
    color: ${props => props.hoverFontColor};
    border-color: ${props => props.hoverBorderColor};
    background: ${props => props.hoverBackgroundColor};
  }
`


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

  return (
    <Container
      href={ href }
      fontColor={ styles.fontColor }
      borderColor={ styles.borderColor }
      backgroundColor={ styles.backgroundColor }
      hoverFontColor={ styles.hoverFontColor }
      hoverBorderColor={ styles.hoverBorderColor }
      hoverBackgroundColor={ styles.hoverBackgroundColor }>
      <BaseText5 text={ text }/>
    </Container>
  )
}
