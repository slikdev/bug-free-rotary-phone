import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import BaseText1 from '../BaseText1/BaseText1'
import BaseText2 from '../BaseText2/BaseText2'

export default ({ title, subtitle, imageLarge, imageMedium, imageSmall }) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${imageSmall});
    background-size: cover;
    background-position: center center;
    padding: var(--spacing-7) var(--spacing-4);
    ${up('md')} { background-image: url(${imageMedium}) }
    ${up('lg')} { background-image: url(${imageLarge}) }
  `

  const Content = styled.div`
    max-width: 996px;
    width: 100%;
  `

  const ContainerTitle = styled.div`
    margin-bottom: var(--spacing-5);
    font-weight: var(--font-weight-bold);
  `

  return (
    <Container>
      <Content>
        <ContainerTitle>
          <BaseText1 text={title}/>
        </ContainerTitle>
        <BaseText2 text={subtitle}/>
      </Content>
    </Container>
  )
}
