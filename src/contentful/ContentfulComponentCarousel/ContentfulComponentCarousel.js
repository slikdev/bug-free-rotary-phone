import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { BaseSwiper } from '../../components/BaseSwiper/BaseSwiper'
import BaseSlide from '../../components/BaseSlide/BaseSlide'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentCarousel {
        allContentfulComponentCarousel {
          nodes {
            id
            slides {
              title {
                title
              }
              caption {
                caption
              }
              subtitle {
                subtitle
              }
              imageSmall {
                file {
                  url
                }
              }
              imageMedium {
                file {
                  url
                }
              }
              imageLarge {
                file {
                  url
                }
              }
              fontColor
              buttonCopy
              buttonStyle
              buttonColor
              buttonLink
              alignContentMobile
            }
          }
        }
      }
    `
  ).allContentfulComponentCarousel.nodes.find(item => item.id === id)

  const slides = data.slides.map(slide => ({
    title: slide.title.title,
    caption: slide.caption && slide.caption.caption,
    subtitle: slide.subtitle && slide.subtitle.subtitle,
    imageLarge: slide.imageLarge.file.url,
    imageMedium: slide.imageMedium.file.url,
    imageSmall: slide.imageSmall.file.url,
    fontColor: slide.fontColor,
    buttonCopy: slide.buttonCopy,
    buttonStyle: slide.buttonStyle || 'outline',
    buttonColor: slide.buttonColor || '#e40000',
    buttonLink: slide.buttonLink || '',
    alignContentMobile: slide.alignContentMobile
  }))

  const Container = styled.div`
    width: 100%;
    height: 360px;
    position: relative;
    ${up('md')} {
      height: 400px;
    }
    ${up('lg')} {
      height: 480px;
    }
  `

  return (
  <Container>
    <BaseSwiper slides={ slides.map((slide, i) => <BaseSlide { ...slide } key={i}/> ) }/>
  </Container>
  )
}
