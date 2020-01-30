import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseRichText from '../../components/BaseRichText/BaseRichText'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentTerms {
        allContentfulComponentTerms {
          nodes {
            id
            content {
              json
            }
          }
        }
      }
    `
  ).allContentfulComponentTerms.nodes.find(item => item.id === id)

  return <BaseRichText json={data.content.json} textAlign="left" forceFontSize="1.4rem" forceTextAlign="left"/>
}
