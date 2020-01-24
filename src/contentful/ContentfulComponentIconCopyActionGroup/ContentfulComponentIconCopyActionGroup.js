import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseIconCopyAction from '../../components/BaseIconCopyAction/BaseIconCopyAction'
import { BaseColumnGroup } from '../../components/BaseColumnGroup/BaseColumnGroup'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentIconCopyActionGroup {
        allContentfulComponentIconCopyActionGroup {
          nodes {
            id
            items {
              icon {
                file {
                  url
                }
              }
              title {
                title
              }
              paragraph {
                paragraph
              }
              fontColor
              buttonCopy
              buttonStyle
              buttonColor
              buttonLink
            }
          }
        }
      }
    `
  ).allContentfulComponentIconCopyActionGroup.nodes.find(item => item.id === id)

  return (
    <BaseColumnGroup
      items={data.items.map((item, i) => (
        <BaseIconCopyAction
          icon={item.icon.file.url}
          title={item.title.title}
          paragraph={item.paragraph.paragraph}
          fontColor={item.fontColor}
          buttonCopy={item.buttonCopy}
          buttonStyle={item.buttonStyle}
          buttonColor={item.buttonColor}
          buttonLink={item.buttonLink}
          columns={data.items.length}
          key={i}
        />
      ))}
    />
  )
}
