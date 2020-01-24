import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BaseVideoCopyActionGroup } from '../../components/BaseVideoCopyActionGroup/BaseVideoCopyActionGroup'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentVideoCopyActionGroup {
        allContentfulComponentVideoCopyActionGroup {
          nodes {
            id
            items {
              title {
                title
              }
              paragraph {
                paragraph
              }
              imageThumbnail {
                file {
                  url
                }
              }
              video {
                file {
                  url
                }
              }
              imageBannerCopy
              buttonCopy
              buttonLink
            }
          }
        }
      }
    `
  ).allContentfulComponentVideoCopyActionGroup.nodes.find(
    item => item.id === id
  )

  const items = data.items.map(item => ({
    title: item.title.title,
    paragraph: item.paragraph.paragraph,
    video: item.video.file.url,
    image: item.imageThumbnail.file.url,
    bannerCopy: item.imageBannerCopy,
    buttonCopy: item.buttonCopy,
    buttonLink: item.buttonLink
  }))

  return <BaseVideoCopyActionGroup items={ items } />
}
