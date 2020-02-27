import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 3rem;
  line-height: 1.3;
`

export default ({ text }) => <Text>{ text }</Text>
