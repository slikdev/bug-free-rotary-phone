import React from 'react'
import styled from 'styled-components'

export default ({ icon, href }) => {
  const A = styled.a`
    display: block;
  `

  const Icon = styled.img`
    height: 4.5rem;
  `

  return (
    <A href={href}>
      <Icon src={icon}/>
    </A>
  )
}
