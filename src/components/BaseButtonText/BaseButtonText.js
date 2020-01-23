import React from 'react'
import styled from 'styled-components'
import BaseText2 from '../BaseText2/BaseText2'

export default ({ text, color, href }) => {
  const A = styled.a`
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
    color: ${color};
    font-size: 1.8rem;
  `

  const Arrow = styled.svg`
    height: calc(0.45 * 1em);
    margin-left: var(--spacing-2);
    flex-shrink: 0;
  `

  return (
    <A href={ href }>
      <BaseText2 text={ text }/>
      <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.071 7.071">
        <polygon fill={color} points="0 3 0 4 9.192 4 6.828 6.364 7.536 7.071 11.071 3.536 10.718 3.182 7.536 0 6.828 0.707 9.121 3 0 3"/>
      </Arrow>
    </A>
  )
}
