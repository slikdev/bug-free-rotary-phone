import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseFooter from '../../components/BaseFooter/BaseFooter'
import BaseText2 from '../../components/BaseText2/BaseText2'
import BaseSocialButton from '../../components/BaseSocialButton/BaseSocialButton'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentFooter {
        allContentfulComponentFooter {
          nodes {
            id
            footerLinks {
              text
              link
            }
            socialButtons {
              icon {
                file {
                  url
                }
              }
              link
            }
          }
        }
      }
    `
  ).allContentfulComponentFooter.nodes.find(item => item.id === id)

  return (
    <BaseFooter
      slotLinks={ data.footerLinks.map((item, i) => <a href={item.link} key={i}><BaseText2 text={item.text}/></a>) }
      slotSocialButtons={ data.socialButtons.map((item, i) => <BaseSocialButton icon={item.icon.file.url} href={item.link} key={i}/>) }
    />
  )
}
