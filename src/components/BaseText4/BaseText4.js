import React from 'react'
import styled from 'styled-components'

export default ({ text, showMargin }) => {
  const Text = styled.div`
    font-size: 2.2rem;
    line-height: 1.5;
    ${showMargin ? 'margin: var(--spacing-5) 0' : ''}
  `

  return <Text>{ text }</Text>
}
