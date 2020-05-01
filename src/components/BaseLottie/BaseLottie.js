import React from 'react'
import Lottie from 'lottie-web'
import styled from 'styled-components'

const El = styled.div`
  width: 100%;
  height: 100%;
`

export class BaseLottie extends React.Component {

  constructor (props) {
    super(props)
    this.el = React.createRef()
  }

  componentDidMount () {
    this.lottie = Lottie.loadAnimation({
      container: this.el.current,
      path: this.props.json,
      renderer: 'svg',
      loop: this.props.loop || false,
      autoplay: this.props.autoplay || false
    })
  }

  play () {
    return new Promise(resolve => {
      this.lottie.addEventListener('complete', resolve)
      this.lottie.play()
    })
  }

  render () {
    return <El ref={this.el}/>
  }

}
