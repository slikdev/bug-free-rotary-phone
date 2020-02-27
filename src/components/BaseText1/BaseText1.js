import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 4.2rem;
`

export default ({ text }) => <Text dangerouslySetInnerHTML={{ __html: text }}/>
