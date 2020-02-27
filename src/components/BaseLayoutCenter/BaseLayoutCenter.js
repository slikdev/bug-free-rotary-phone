import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'

export default ({ slot, backgroundColorTop, backgroundColorBottom }) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, ${props => props.backgroundColorTop}, ${props => props.backgroundColorBottom});
    padding: 4.5rem ${vars.SPACING_4};
  `

  const Content = styled.div`
    max-width: 996px;
    width: 100%;
  `

  return (
    <Container
      backgroundColorTop={backgroundColorTop}
      backgroundColorBottom={backgroundColorBottom}>
      <Content>
        { slot }
      </Content>
    </Container>
  )
}
