import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { down, up, only } from 'styled-breakpoints'

const ImageSmall = styled.img`
  width: 100%;
  display: block;
  ${up('md')} { display: none }
`

const ImageMedium = styled.img`
  width: 100%;
  display: none;
  ${only('md')} { display: block }
`
const ImageLarge = styled.img`
  width: 100%;
  display: block;
  ${down('md')} { display: none }
`

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentImageFullWidth {
        allContentfulComponentImageFullWidth {
          nodes {
            id
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
          }
        }
      }
    `
  ).allContentfulComponentImageFullWidth.nodes.find(item => item.id === id)

  return (
    <>
      <ImageSmall src={data.imageSmall.file.url}/>
      <ImageMedium src={data.imageMedium.file.url}/>
      <ImageLarge src={data.imageLarge.file.url}/>
    </>
  )
}
