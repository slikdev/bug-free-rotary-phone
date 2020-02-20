import React from 'react'
import styled from 'styled-components'
import BaseButtonText from '../BaseButtonText/BaseButtonText'
import { BaseThumbnail } from './components/BaseThumbnail/BaseThumbnail'
import { up, only } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

export default ({ title, paragraph, image, video, bannerCopy, buttonCopy, buttonLink, columns, onImageThumbnailClick }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    ${only('sm')} {
      ${columns > 1 && `
        width: 72vw;
        box-shadow: ${vars.BOX_SHADOW_1};
        border-radius: ${vars.BORDER_RADIUS_1};
        overflow: hidden;
        background: ${vars.COLOR_WHITE_1};
        * {
          font-size: 1.6rem !important;
        }
      `}
    }
  `

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${columns > 1 ? 'flex-start' : 'center'};
    text-align: ${columns > 1 ? 'left' : 'center'};
    ${only('sm')} {
      ${ columns > 1 && `
        padding: ${vars.SPACING_4};
      `}
    }
  `

  const Title = styled.div`
    margin-bottom: ${vars.SPACING_4};
    font-size: 2.6rem;
    line-height: 1.35;
    ${only('sm')} {
      ${columns > 1 && `
        font-weight: ${vars.FONT_WEIGHT_BOLD};
      `}
    }
    ${up('md')} {
      font-size: 3rem;
      ${columns >= 3 ? 'font-size: 2.2rem;' : null}
      ${columns >= 4 ? 'font-size: 2rem;' : null}
    }
  `

  const Paragraph = styled.div`
    margin-bottom: ${vars.SPACING_5};
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
      <Content>
        <Title>
          { title }
        </Title>
        <Paragraph>
          { paragraph }
        </Paragraph>
        <BaseButtonText text={ buttonCopy } color={vars.COLOR_RED_1} href={ buttonLink }/>
      </Content>
    </Container>
  )
}
