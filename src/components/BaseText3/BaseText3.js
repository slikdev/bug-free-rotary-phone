import React from 'react'
import styled from 'styled-components'

export default ({ text }) => {
  const Text = styled.div`
    font-size: 3rem;
    line-height: 1.3;
  `

  return <Text>{ text }</Text>
}
