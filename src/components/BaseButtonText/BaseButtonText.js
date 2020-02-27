import React from 'react'
import styled from 'styled-components'
import BaseText2 from '../BaseText2/BaseText2'
import vars from '../../assets/css/vars/vars'

const Button = styled.a`
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  color: ${props => props.color};
  font-size: 1.8rem;
`

const Arrow = styled.svg`
  height: calc(0.45 * 1em);
  width: 11.27px;
  margin-left: ${vars.SPACING_2};
  flex-shrink: 0;
  transition: transform ${vars.TRANSITION_SETTINGS};
  ${Button}:hover & {
    transform: translateX(5px);
  }
`

export default ({ text, color, href, as }) => {
  return (
    <Button href={ href } as={ as } color={ color }>
      <BaseText2 text={ text }/>
      <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.071 7.071">
        <polygon fill={color} points="0 3 0 4 9.192 4 6.828 6.364 7.536 7.071 11.071 3.536 10.718 3.182 7.536 0 6.828 0.707 9.121 3 0 3"/>
      </Arrow>
    </Button>
  )
}
