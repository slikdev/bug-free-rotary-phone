import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'
import { BaseLottie } from '../BaseLottie/BaseLottie'
import { up } from 'styled-breakpoints'

export default ({ title, paragraph, icon }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    ${up('md')} {
      flex-direction: column;
      align-items: center;
    }
  `

  const IconContainer = styled.div`
    position: relative;
    margin-right: 2rem;
    flex-shrink: 0;
    width: ${vars.CVP_ICON_CONTAINER_SIZE_SM};
    height: ${vars.CVP_ICON_CONTAINER_SIZE_SM};
    ${up('md')} {
      margin-right: 0;
      margin-bottom: 2rem;
      width: ${vars.CVP_ICON_CONTAINER_SIZE_LG};
      height: ${vars.CVP_ICON_CONTAINER_SIZE_LG};
    }
  `

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    ${up('md')} {
      align-items: center;
      text-align: center;
    }
  `

  const Title = styled.div`
    font-size: 2.2rem;
    font-weight: ${vars.FONT_WEIGHT_BOLD};
    line-height: 1.45;
    margin-bottom: 1rem;
    ${up('md')} {
      margin-bottom: 2rem;
      font-size: 2rem;
    }
  `

  const Paragraph = styled.div`
    font-size: 1.6rem;
    line-height: 1.6;
  `

  return (
    <Container>
      <IconContainer>
        <BaseLottie
          json={icon}
          autoplay={true}
          loop={true}
        />
      </IconContainer>
      <Content>
        <Title>
          { title }
        </Title>
        <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }}/>
      </Content>
    </Container>
  )
}
