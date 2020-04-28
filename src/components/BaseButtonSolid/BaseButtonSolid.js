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
  border-radius: ${vars.BORDER_RADIUS_1};
  background: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  transition:
    background-color ${vars.TRANSITION_SETTINGS},
    color ${vars.TRANSITION_SETTINGS};
  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
    color: ${props => props.hoverFontColor};
  }
`

export default ({ text, color, href, onClick }) => {

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

  return (
    <Container
      href={ href }
      fontColor={ styles.fontColor }
      backgroundColor={ styles.backgroundColor }
      hoverFontColor={ styles.hoverFontColor }
      hoverBackgroundColor={ styles.hoverBackgroundColor }
      onClick={ onClick }
    >
      <BaseText5 text={ text }/>
    </Container>
  )
}
