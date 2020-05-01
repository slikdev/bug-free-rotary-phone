import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseRichText from '../../components/BaseRichText/BaseRichText'
import { BaseColumnGroup } from '../../components/BaseColumnGroup/BaseColumnGroup'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentRichTextGroup {
        allContentfulComponentRichTextGroup {
          nodes {
            id
            items {
              content {
                json
              }
              textAlign
            }
          }
        }
      }
    `
  ).allContentfulComponentRichTextGroup.nodes.find(item => item.id === id)

  return data.items && (
    <BaseColumnGroup
      items={ data.items.map((item, i) => (
        <BaseRichText json={item.content && item.content.json} textAlign={item.textAlign} key={i}/>
      )) }
    />
  )
}
