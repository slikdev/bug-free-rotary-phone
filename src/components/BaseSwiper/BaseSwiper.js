import React from 'react'
import styled from 'styled-components'
import Swiper from 'swiper/js/swiper.esm.bundle'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const NavigationContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  max-width: 996px;
  transform: translateX(-50%);
  z-index: 1;
  pointer-events: none;
`

const PaginationContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
`

const PlayPauseButton = styled.img`
  position: relative;
  height: 1.3rem;
  margin-right: 1rem;
  z-index: 1;
  cursor: pointer;
`

const NavigationButton = styled.img`
  position: absolute;
  height: 5rem;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 ${vars.SPACING_6};
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  pointer-events: all;
  ${Container}:hover & {
    opacity: 1;
  }
  display: none;
  ${up('lg')} {
    display: block;
  }
`

const PrevButton = styled(NavigationButton)`
  right: 100%;
`

const NextButton = styled(NavigationButton)`
  left: 100%;
`

export class BaseSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { autoplaying: true }
    this.swiperContainerRef = React.createRef()
    this.prevButtonRef = React.createRef()
    this.nextButtonRef = React.createRef()
    this.swiper = null
  }

  componentDidMount() {
    this.swiper = new Swiper(this.swiperContainerRef.current, {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: this.nextButtonRef.current,
        prevEl: this.prevButtonRef.current,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      effect: 'fade',
      loop: true,
      followFinger: false
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
          <NavigationContainer>
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
            <PrevButton ref={ this.prevButtonRef } src={ require('../../assets/img/prev-button.svg') }/>
            <NextButton ref={ this.nextButtonRef } src={ require('../../assets/img/next-button.svg') }/>
          </NavigationContainer>
        </div>
      </Container>
    )
  }
}
