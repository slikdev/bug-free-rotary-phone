import React from 'react'
import styled from 'styled-components'

const A = styled.a`
display: block;
`

const Icon = styled.img`
height: 4.5rem;
`

export default ({ icon, href }) => (
  <A href={href}>
    <Icon src={icon}/>
  </A>
)
