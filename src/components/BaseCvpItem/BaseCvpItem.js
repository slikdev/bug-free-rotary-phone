import React from 'react'
import styled from 'styled-components'
import vars from '../../assets/css/vars/vars'
import { BaseLottie } from '../BaseLottie/BaseLottie'
import { up } from 'styled-breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: ${props => props.fontColor};
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
  width: 100%;
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
  max-width: 100%;
  ${up('md')} {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`

const Paragraph = styled.div`
  font-size: 1.6rem;
  line-height: 1.6;
  max-width: 100%;
`

export default ({ title, paragraph, icon, theme }) => {

  const themeVars = (() => {
    if (theme === 'colored') return {
      fontColor: vars.COLOR_BLACK_2
    }
    if (theme === 'white') return {
      fontColor: vars.COLOR_WHITE_1
    }
  })()

  return (
    <Container fontColor={ themeVars.fontColor }>
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
