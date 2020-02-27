import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 1.8rem;
  line-height: 1.5;
`

export default ({ text }) => <Text>{ text }</Text>
