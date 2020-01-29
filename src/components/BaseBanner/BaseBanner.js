import React from 'react'
import styled from 'styled-components'

export default ({ text }) => {
  const Banner = styled.div`
    position: relative;
    font-size: 1.6rem;
    padding: 0 1em;
    height: 2em;
    display: flex;
    align-items: center;
    background-color: var(--color-blue-1);
    border-bottom-right-radius: var(--border-radius-2);
  `

  return <Banner>{ text }</Banner>
}
