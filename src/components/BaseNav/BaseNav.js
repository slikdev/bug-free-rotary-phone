import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

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
  }

  render () {
    return <Nav className="qbr-components" id="qbr-header-and-navigation"/>
  }
}
