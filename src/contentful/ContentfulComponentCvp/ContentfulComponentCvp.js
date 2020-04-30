import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseCvp from '../../components/BaseCvp/BaseCvp'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentCvp {
        allContentfulComponentCvp {
          nodes {
            id
            theme
            supportingCopy {
              supportingCopy
            }
            displayMathSymbols
            items {
              title
              paragraph {
                paragraph
              }
              animation {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  ).allContentfulComponentCvp.nodes.find(item => item.id === id)

  const items = data.items.map(item => ({
    title: item.title,
    paragraph: item.paragraph && item.paragraph.paragraph,
    icon: item.animation && item.animation.file.url
  }))

  return (
    <BaseCvp
      items={items}
      displayMathSymbols={data.displayMathSymbols}
      paragraph={data.supportingCopy && data.supportingCopy.supportingCopy}
      theme={data.theme}
    />
  )
}
