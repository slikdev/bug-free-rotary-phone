import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'

const Text = styled.div`
  font-size: 1.6rem;
  font-weight: ${vars.FONT_WEIGHT_BOLD};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`

export default ({ text }) => <Text>{ text }</Text>
