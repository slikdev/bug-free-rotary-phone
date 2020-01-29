import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import BaseText1 from '../BaseText1/BaseText1'
import BaseText2 from '../BaseText2/BaseText2'
import vars from '../../assets/css/vars/vars'

export default ({ title, subtitle, imageLarge, imageMedium, imageSmall }) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${imageSmall});
    background-size: cover;
    background-position: center center;
    padding: 3rem 2rem;
    ${up('md')} {
      background-image: url(${imageMedium});
      padding: 10rem 2rem;
    }
    ${up('lg')} {
      background-image: url(${imageLarge});
      padding: 6rem 2rem;
    }
  `

  const Content = styled.div`
    max-width: 996px;
    width: 100%;
  `

  const ContainerTitle = styled.div`
    margin-bottom: ${vars.SPACING_5};
    font-weight: ${vars.FONT_WEIGHT_BOLD};
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
