import React from 'react'
import styled from 'styled-components'
import BaseButtonText from '../BaseButtonText/BaseButtonText'
import BaseButtonOutline from '../BaseButtonOutline/BaseButtonOutline'
import { up } from 'styled-breakpoints'

export default ({ icon, title, paragraph, fontColor, buttonCopy, buttonStyle, buttonColor, buttonLink, columns }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `

  const IconContainer = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: var(--spacing-6);
    color: ${fontColor};
  `

  const Icon = styled.img`
    max-width: 100%;
    max-height: 100%;
  `

  const Title = styled.div`
    margin-bottom: var(--spacing-4);
    font-size: 2.6rem;
    line-height: 1.35;
    ${up('md')} {
      font-size: 3rem;
      ${columns >= 3 ? 'font-size: 2.2rem;' : null}
      ${columns >= 4 ? 'font-size: 2rem;' : null}
    }
  `

  const Paragraph = styled.div`
    margin-bottom: var(--spacing-5);
    line-height: 1.6;
    font-size: 2rem;
    ${up('md')} {
      font-size: 1.8rem;
    }
  `

  return (
    <Container>
      <IconContainer>
        <Icon src={ icon }/>
      </IconContainer>
      <Title>
        { title }
      </Title>
      <Paragraph>
        { paragraph }
      </Paragraph>
      { buttonStyle === 'text' ? <BaseButtonText text={ buttonCopy } color={ buttonColor } href={ buttonLink }/> : null }
      { buttonStyle === 'outline' ? <BaseButtonOutline text={ buttonCopy } color={ buttonColor } href={ buttonLink }/> : null }
    </Container>
  )
}
