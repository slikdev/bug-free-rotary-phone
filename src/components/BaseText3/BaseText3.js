import React from 'react'
import styled from 'styled-components'

export default ({ text, showMargin }) => {
  const Text = styled.div`
    font-size: 3rem;
    line-height: 1.3;
    ${showMargin ? 'margin: var(--spacing-6) 0' : ''}
  `

  return <Text>{ text }</Text>
}
