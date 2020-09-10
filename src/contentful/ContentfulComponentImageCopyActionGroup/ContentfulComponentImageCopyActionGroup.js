import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BaseImageCopyActionGroup } from '../../components/BaseImageCopyActionGroup/BaseImageCopyActionGroup'
import BaseImageCopyAction from '../../components/BaseImageCopyAction/BaseImageCopyAction'

export default ({ id }) => {

  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentImageCopyActionGroup {
        allContentfulComponentImageCopyActionGroup {
          nodes {
            id
            __typename
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
              imageBannerCopy
              buttonCopy
              buttonLink
            }
          }
        }
      }
    `
  ).allContentfulComponentImageCopyActionGroup.nodes.find(
    item => item.id === id
  )

  const items = data.items.map(item => ({
    title: item.title && item.title.title,
    paragraph: item.paragraph && item.paragraph.paragraph,
    image: item.imageThumbnail && item.imageThumbnail.file.url,
    bannerCopy: item.imageBannerCopy,
    buttonCopy: item.buttonCopy,
    buttonLink: item.buttonLink
  }))

  const columns = items.length

  return (
    <>
      { columns > 1
        ? <BaseImageCopyActionGroup items={ items } />
        : <BaseImageCopyAction { ...items[0] } columns={ columns } />
      }
    </>
  )
}
