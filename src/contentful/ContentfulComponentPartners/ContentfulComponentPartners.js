import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BasePartners } from '../../components/BasePartners/BasePartners'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentPartners {
        allContentfulComponentPartners {
          nodes {
            id
            categories {
              title
              partners {
                partner
                title
                paragraph {
                  paragraph
                }
                terms {
                  terms
                }
                bannerCopy
                buttonCopy
                buttonLink
                logo {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  ).allContentfulComponentPartners.nodes.find(item => item.id === id)

  const categories = data.categories.map(category => ({
    title: category.title,
    partners: category.partners.map(partner => ({
      partner: partner.partner,
      title: partner.title,
      paragraph: partner.paragraph.paragraph,
      terms: partner.terms && partner.terms.terms,
      bannerCopy: partner.bannerCopy,
      buttonCopy: partner.buttonCopy,
      buttonLink: partner.buttonLink,
      logo: partner.logo.file.url
    }))
  }))

  return <BasePartners categories={ categories } />
}
