import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'

export default ({ slot, backgroundColorTop, backgroundColorBottom }) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, ${backgroundColorTop}, ${backgroundColorBottom});
    padding: ${vars.SPACING_8} ${vars.SPACING_4};
  `

  const Content = styled.div`
    max-width: 996px;
    width: 100%;
  `

  return (
    <Container>
      <Content>
        { slot }
      </Content>
    </Container>
  )
}
