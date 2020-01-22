import React from 'react'
import styled from 'styled-components'

export default ({ text }) => {
  const Text = styled.div`
    font-size: 4.2rem;
  `

  return <Text>{ text }</Text>
}
