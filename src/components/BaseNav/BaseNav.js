import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { triggerFloodlightLogin, triggerFloodlightSignUp } from '../../utils/floodlights'

const Nav = styled.div`
  ${down('md')} {
    height: 5.4rem;
  }
`

export class BaseNav extends React.Component {

  componentDidMount () {
    const link = document.createElement('link')
    link.href = 'https://qant2018.s3-ap-southeast-2.amazonaws.com/qloy0350/css/qbr-nav.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = 'https://qant2018.s3-ap-southeast-2.amazonaws.com/qloy0350/js/qbr-nav.js'
    document.head.appendChild(script)
    this.addFloodlightClickListeners()
  }

  addFloodlightClickListeners () {
    const checkExist = setInterval(() => {
      if (document.querySelector('.css-g3zg5p') && document.querySelector('.css-dqc9g8')) {
        document.querySelector('.css-g3zg5p').addEventListener('click', e => {
          e.preventDefault()
          ReactGA.event({
            category: 'Header module',
            action: 'Click',
            label: 'Join button'
          })
          triggerFloodlightSignUp()
          window.open(e.target.getAttribute('href'), "_self")
        })
        document.querySelector('.css-dqc9g8').addEventListener('click', e => {
          e.preventDefault()
          ReactGA.event({
            category: 'Header module',
            action: 'Click',
            label: 'Login button'
          })
          triggerFloodlightLogin()
          window.open(e.target.getAttribute('href'), "_self")
        })
        clearInterval(checkExist)
      }
    }, 100)
  }

  render () {
    return <Nav className="qbr-components" id="qbr-header-and-navigation"/>
  }
}
