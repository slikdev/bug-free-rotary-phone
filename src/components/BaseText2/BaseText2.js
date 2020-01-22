import React from 'react'
import styled from 'styled-components'

export default ({ text }) => {
  const Text = styled.div`
    font-size: 1.8rem;
    line-height: 1.5;
  `

  return <Text>{ text }</Text>
}
