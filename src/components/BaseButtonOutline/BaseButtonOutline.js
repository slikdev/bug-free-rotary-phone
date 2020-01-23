import React from 'react'
import styled from 'styled-components'
import BaseText5 from '../BaseText5/BaseText5'

export default ({ text, color, href }) => {
  const Container = styled.div`
    font-size: 1.6rem;
    height: 2em;
    display: flex;
    align-items: center;
    padding: 1.25em 1.8em;
    border: solid ${color} 2px;
    border-radius: var(--border-radius-1);
    color: ${color};
  `

  const A = styled.a``

  return (
    <Container>
      <A href={ href }>
        <BaseText5 text={ text }/>
      </A>
    </Container>
  )
}
