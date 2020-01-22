import React from 'react'
import styled from 'styled-components'

export default ({ text }) => {
  const Text = styled.div`
    font-size: 1.8rem;
  `

  return <Text dangerouslySetInnerHTML={{ __html: text }}/>
}
