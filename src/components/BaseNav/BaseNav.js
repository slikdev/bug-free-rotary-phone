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
    const script = document.createElement('script')
    script.src = '/qbr-nav.js'
    script.async = true
    document.body.appendChild(script)
  }

  render () {
    return <Nav className="qbr-components" id="qbr-header-and-navigation"/>
  }
}
