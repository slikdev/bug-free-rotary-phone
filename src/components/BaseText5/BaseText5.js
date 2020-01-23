import React from 'react'
import styled from 'styled-components'

export default ({ text }) => {
  const Text = styled.div`
    font-size: 1.6rem;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  `

  return (
    <Text>{ text }</Text>
  )
}
