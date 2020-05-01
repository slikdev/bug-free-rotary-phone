import React from 'react'
import styled from 'styled-components'
import BaseCvpItem from '../../components/BaseCvpItem/BaseCvpItem'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'
import { useRef } from 'react'
import { useEffect } from 'react'

const itemHorizontalSpacing = '3rem'

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
    margin-bottom: ${props => props.displayMathSymbols ? '0' : '5rem'};
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
  display: ${props => props.displayMathSymbols ? 'flex' : 'none'};
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
  color: ${props => props.fontColor};
  ${up('md')} {
    text-align: left;
  }
`

export default ({ paragraph, items, displayMathSymbols, theme }) => {

  const themeVars = (() => {
    if (theme === 'colored') return {
      fontColor: vars.COLOR_BLACK_2,
      logo: require('../../assets/img/logo-ff-color.svg'),
      plusIcon: require('../../assets/img/plus-red.svg'),
      equalsIcon: require('../../assets/img/equals-red.svg')
    }
    if (theme === 'white') return {
      fontColor: vars.COLOR_WHITE_1,
      logo: require('../../assets/img/logo-ff-white.svg'),
      plusIcon: require('../../assets/img/plus-white.svg'),
      equalsIcon: require('../../assets/img/equals-white.svg')
    }
  })()

  const contentRef = useRef()
  const lottieRefs = useRef([])
  useEffect(() => {
    const playAnimationSequence = async () => {
      for (const [i, lottieRef] of lottieRefs.current.entries()) {
        if (i === lottieRefs.length - 1) return
        await lottieRef.play()
      }
    }
    let observer = null
    observer = new IntersectionObserver(([ entry ]) => {
      if (entry.isIntersecting) {
        playAnimationSequence()
        observer.unobserve(entry.target)
      }
    })
    observer.observe(contentRef.current)
  }, [])

  return (
    <Container>
      <Content displayMathSymbols={ displayMathSymbols } ref={contentRef}>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <BaseCvpItem
              ref={el => (lottieRefs.current[i] = el)}
              title={item.title}
              paragraph={item.paragraph}
              icon={item.icon}
              theme={theme}
            />
            {i < items.length - 1 && (
              <MathIconContainer
                style={{ left: `calc(${1 / items.length * (i + 1) * 100}% - (${itemHorizontalSpacing} / 2) + (${1 / items.length * (i + 1)} * ${itemHorizontalSpacing}))` }}
                displayMathSymbols={ displayMathSymbols }>
                <MathIcon src={themeVars.plusIcon}/>
              </MathIconContainer>
            )}
          </React.Fragment>
        ))}
      </Content>
      <Footer>
        <Img src={themeVars.logo}/>
        <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} fontColor={ themeVars.fontColor }/>
      </Footer>
    </Container>
  )
}
