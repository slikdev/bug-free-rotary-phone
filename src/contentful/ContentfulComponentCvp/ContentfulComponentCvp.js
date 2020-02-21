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
            supportingCopy {
              supportingCopy
            }
            displayMathOperators
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
    paragraph: item.paragraph.paragraph,
    icon: item.animation.file.url
  }))

  return (
    <BaseCvp
      items={items}
      displayMathOperators={data.displayMathOperators}
      paragraph={data.supportingCopy.supportingCopy}
    />
  )
}
