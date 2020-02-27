import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 2.2rem;
  line-height: 1.5;
`

export default ({ text }) => <Text>{ text }</Text>
