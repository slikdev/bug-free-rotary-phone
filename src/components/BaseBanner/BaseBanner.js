import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'

export default ({ text }) => {
  const Banner = styled.div`
    position: relative;
    font-size: 1.6rem;
    padding: 0 1em;
    height: 2em;
    display: flex;
    align-items: center;
    background-color: ${vars.COLOR_BLUE_1};
    border-bottom-right-radius: ${vars.BORDER_RADIUS_2};
  `

  return <Banner>{ text }</Banner>
}
