import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseRichText from '../../components/BaseRichText/BaseRichText'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentRichText1X {
        allContentfulComponentRichText1X {
          nodes {
            id
            content {
              json
            }
            contentTextAlign
          }
        }
      }
    `
  ).allContentfulComponentRichText1X.nodes.find(item => item.id === id)

  return <BaseRichText json={data.content.json} textAlign={data.contentTextAlign}/>
}
