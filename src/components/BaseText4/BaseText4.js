import React from 'react'
import styled from 'styled-components'

export default ({ text }) => {
  const Text = styled.div`
    font-size: 2.2rem;
    line-height: 1.5;
  `

  return <Text>{ text }</Text>
}
