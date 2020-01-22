import React from 'react'
import styled from 'styled-components'
import Swiper from 'swiper/js/swiper.esm.bundle'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export class BaseSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.el = React.createRef()
    this.swiper = null
  }

  componentDidMount() {
    this.swiper = new Swiper(this.el.current)
  }

  render() {
    return (
      <Container>
        <div className="swiper-container" ref={this.el}>
          <div className="swiper-wrapper">
            { this.props.slides.map((slide, i) => <div className="swiper-slide" key={i}>{ slide }</div>) }
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Container>
    )
  }
}
