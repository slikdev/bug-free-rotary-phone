import React from 'react'
import styled from 'styled-components'

export default ({ slot, backgroundColor }) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${backgroundColor};
    padding: var(--spacing-8) var(--spacing-4);
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
