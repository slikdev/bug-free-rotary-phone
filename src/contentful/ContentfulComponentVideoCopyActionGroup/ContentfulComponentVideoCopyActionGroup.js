import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseVideoCopyAction from '../../components/BaseVideoCopyAction/BaseVideoCopyAction'
import BaseColumnGroup from '../../components/BaseColumnGroup/BaseColumnGroup'

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

  return (
    <BaseColumnGroup
      items={data.items.map((item, i) => (
        <BaseVideoCopyAction
          title={item.title.title}
          paragraph={item.paragraph.paragraph}
          image={item.imageThumbnail.file.url}
          bannerCopy={item.imageBannerCopy}
          buttonCopy={item.buttonCopy}
          buttonLink={item.buttonLink}
          columns={data.items.length}
          key={i}
        />
      ))}
    />
  )
}
