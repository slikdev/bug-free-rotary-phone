import React from 'react'
import styled from 'styled-components'
import BaseButtonText from '../BaseButtonText/BaseButtonText'
import { BaseThumbnail } from './components/BaseThumbnail/BaseThumbnail'
import { up } from 'styled-breakpoints'

export default ({ title, paragraph, image, video, bannerCopy, buttonCopy, buttonLink, columns, onImageThumbnailClick }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${columns > 1 ? 'flex-start' : 'center'};
    text-align: ${columns > 1 ? 'left' : 'center'};
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
      <BaseThumbnail
        bannerCopy={ bannerCopy }
        onImageThumbnailClick={ onImageThumbnailClick }
        image={ image }
        video={ video }
        columns={ columns }
      />
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
