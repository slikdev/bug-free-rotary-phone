import React from 'react'
import styled from 'styled-components'
import Swiper from 'swiper/js/swiper.esm.bundle'
import { up } from 'styled-breakpoints'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const PaginationContainer = styled.div`
  display: none;
  ${up('lg')} {
    position: absolute;
    width: 100%;
    bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const PlayPauseButton = styled.img`
  position: relative;
  height: 1.3rem;
  margin-right: 1rem;
  z-index: 1;
  cursor: pointer;
`

export class BaseSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { autoplaying: true }
    this.swiperContainerRef = React.createRef()
    this.swiper = null
  }

  componentDidMount() {
    this.swiper = new Swiper(this.swiperContainerRef.current, {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      effect: 'fade',
      loop: true
    })
  }

  onClickPlayPause () {
    this.setState({
      autoplaying: !this.state.autoplaying
    }, () => {
      this.swiper.autoplay[this.state.autoplaying ? 'start' : 'stop']()
    })
  }

  render() {
    return (
      <Container>
        <div className="swiper-container" ref={this.swiperContainerRef}>
          <div className="swiper-wrapper">
            { this.props.slides.map((slide, i) => <div className="swiper-slide" key={i}>{ slide }</div>) }
          </div>
          <PaginationContainer>
            <PlayPauseButton
              onClick={ this.onClickPlayPause.bind(this) }
              src={ this.state.autoplaying
                ? require('../../assets/img/pause.svg')
                : require('../../assets/img/play.svg')
              }
            />
            <div className="swiper-pagination"/>
          </PaginationContainer>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Container>
    )
  }
}
