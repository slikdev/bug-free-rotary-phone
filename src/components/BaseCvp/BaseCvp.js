import React from 'react'
import styled from 'styled-components'
import BaseCvpItem from '../../components/BaseCvpItem/BaseCvpItem'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

const itemHorizontalSpacing = '6rem'

export default ({ paragraph, items, displayMathOperators }) => {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-container {
      width: 100px;
      height: 100px;
    }
  `

  const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 9rem;
    position: relative;
    > *:not(:last-child) {
      margin-bottom: ${displayMathOperators ? '0' : '5rem'};
    }
    ${up('md')} {
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 3rem;
      > * {
        flex: 1;
      }
      > *:not(:last-child) {
        margin-right: ${itemHorizontalSpacing};
        margin-bottom: 0;
      }
    }
  `

  const MathIconContainer = styled.div`
    display: ${displayMathOperators ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    margin: 0 !important;
    width: ${vars.CVP_ICON_CONTAINER_SIZE_SM};
    height: ${vars.CVP_ICON_CONTAINER_SIZE_SM};
    ${up('md')} {
      position: absolute;
      transform: translateX(-50%);
      top: 0;
      width: ${vars.CVP_ICON_CONTAINER_SIZE_LG};
      height: ${vars.CVP_ICON_CONTAINER_SIZE_LG};
    }
  `

  const MathIcon = styled.img`
    width: 3rem;
  `

  const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${up('lg')} {
      flex-direction: row;
      justify-content: center;
    }
  `

  const Img = styled.img`
    height: 3.5rem;
    margin-bottom: 3rem;
    ${up('lg')} {
      margin-bottom: 0;
      margin-right: 3rem;
    }
  `

  const Paragraph = styled.div`
    font-size: 1.6rem;
    line-height: 1.6;
    text-align: center;
    ${up('md')} {
      text-align: left;
    }
  `

  return (
    <Container>
      <Content>
        <BaseCvpItem
          title={items[0].title}
          paragraph={items[0].paragraph}
          icon={items[0].icon}
        />
        <MathIconContainer style={{ left: `calc(25% - (${itemHorizontalSpacing} / 2) + (0.25 * ${itemHorizontalSpacing}))` }}>
          <MathIcon src={require('../../assets/img/plus.svg')}/>
        </MathIconContainer>
        <BaseCvpItem
          title={items[1].title}
          paragraph={items[1].paragraph}
          icon={items[1].icon}
        />
        <MathIconContainer style={{ left: `calc(50% - (${itemHorizontalSpacing} / 2) + (0.50 * ${itemHorizontalSpacing}))` }}>
          <MathIcon src={require('../../assets/img/plus.svg')}/>
        </MathIconContainer>
        <BaseCvpItem
          title={items[2].title}
          paragraph={items[2].paragraph}
          icon={items[2].icon}
        />
        <MathIconContainer style={{ left: `calc(75% - (${itemHorizontalSpacing} / 2) + (0.75 * ${itemHorizontalSpacing}))` }}>
          <MathIcon src={require('../../assets/img/equals.svg')}/>
        </MathIconContainer>
        <BaseCvpItem
          title={items[3].title}
          paragraph={items[3].paragraph}
          icon={items[3].icon}
        />
      </Content>
      <Footer>
        <Img src={require('../../assets/img/logo-ff.svg')}/>
        <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }}/>
      </Footer>
    </Container>
  )
}
