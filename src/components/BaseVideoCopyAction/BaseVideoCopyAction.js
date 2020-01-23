import React from 'react'
import styled from 'styled-components'
import BaseButtonText from '../BaseButtonText/BaseButtonText'
import { up } from 'styled-breakpoints'

export default ({ title, paragraph, image, bannerCopy, buttonCopy, buttonLink, columns }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  `

  const ImageContainer = styled.div`
    width: 100%;
    height: 0px;
    position: relative;
    padding-top: calc(100% / 3 * 2);
    margin-bottom: var(--spacing-6);
    cursor: pointer;
  `

  const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `

  const Banner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.6rem;
    padding: 0 1em;
    height: 2em;
    display: flex;
    align-items: center;
    background-color: var(--color-blue-1);
    border-bottom-right-radius: var(--border-radius-2);
  `

  const PlayIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 20%;
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
      <ImageContainer>
        <Image src={ image }/>
        <Banner>{ bannerCopy }</Banner>
        <PlayIcon src={require('../../assets/img/play.svg')}/>
      </ImageContainer>
      <Title>
        { title }
      </Title>
      <Paragraph>
        { paragraph }
      </Paragraph>
      <BaseButtonText text={ buttonCopy } color="var(--color-red-1)" href={ buttonLink }/>
    </Container>
  )
}
