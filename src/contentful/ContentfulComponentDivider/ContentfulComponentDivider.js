import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'

export default () => {

  const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: ${vars.COLOR_GRAY_2};
    margin: ${vars.SPACING_7} 0;
  `

  return <Divider/>
}
