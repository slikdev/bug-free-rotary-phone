import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseStickyActionBar from '../../components/BaseStickyActionBar/BaseStickyActionBar'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentStickyActionBar {
        allContentfulComponentStickyActionBar {
          nodes {
            id
            copyDesktop
            copyMobile
            buttonCopy
            buttonLink
          }
        }
      }
    `
  ).allContentfulComponentStickyActionBar.nodes.find(item => item.id === id)

  return (
    <BaseStickyActionBar
      copyDesktop={data.copyDesktop}
      copyMobile={data.copyMobile}
      buttonCopy={data.buttonCopy}
      buttonLink={data.buttonLink}
    />
  )
}
