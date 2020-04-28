import React from 'react'
import ReactGA from 'react-ga'
import { useStaticQuery, graphql } from 'gatsby'
import BaseStickyActionBar from '../../components/BaseStickyActionBar/BaseStickyActionBar'
import { triggerFloodlightSignUp } from '../../utils/floodlights'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentStickyActionBar {
        allContentfulComponentStickyActionBar {
          nodes {
            id
            title
            copyDesktop
            copyMobile
            buttonCopy
            buttonLink
            trackButtonClick
            triggerSignupButtonFloodlightOnClick
          }
        }
      }
    `
  ).allContentfulComponentStickyActionBar.nodes.find(item => item.id === id)

  const trackEvent = () => {
    ReactGA.event({
      category: 'Component Sticky Action Bar',
      action: 'Click',
      label: data.title
    })
  }

  const triggerFloodlight = (e) => {
    e.preventDefault()
    triggerFloodlightSignUp()
    window.open(data.buttonLink, '_self')
  }

  return (
    <BaseStickyActionBar
      copyDesktop={data.copyDesktop}
      copyMobile={data.copyMobile}
      buttonCopy={data.buttonCopy}
      buttonLink={data.buttonLink}
      onClick={(e) => {
        data.trackButtonClick && trackEvent()
        data.triggerSignupButtonFloodlightOnClick && triggerFloodlight(e)
      }}
    />
  )
}
