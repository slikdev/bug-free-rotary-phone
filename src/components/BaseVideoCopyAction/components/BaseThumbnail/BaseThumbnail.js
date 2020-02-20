import React from 'react'
import styled from 'styled-components'
import BaseBanner from '../../../BaseBanner/BaseBanner'
import { BaseVideoPlayer } from '../../../BaseVideoPlayer/BaseVideoPlayer'
import anime from 'animejs'
import vars from '../../../../assets/css/vars/vars'
import { only } from 'styled-breakpoints'

const Container = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  padding-top: ${props => props.columns > 1 ? 'calc(100% / 3 * 2)' : 'calc(100% / 16 * 9)'};
  margin-bottom: ${vars.SPACING_6};
  cursor: pointer;
  ${only('sm')} {
    ${({ columns }) => columns > 1 && `
      margin-bottom: 0;
    `}
  }
`

const ImageThumbnail = styled.div`
  position: absolute;
  will-change: transform;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

const BannerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const PlayIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5rem;
`

const VideoPlayerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`

export class BaseThumbnail extends React.Component {

  constructor(props) {
    super(props)
    this.baseVideoPlayerRef = React.createRef()
    this.imageThumbnailRef = React.createRef()
  }

  onImageThumbnailClick () {
    if (this.props.onImageThumbnailClick) return this.props.onImageThumbnailClick()
    this.playVideo()
  }

  playVideo () {
    this.imageThumbnailRef.current.style.pointerEvents = 'none'
    anime({
      begin: () => this.baseVideoPlayerRef.current.plyr.play(),
      targets: this.imageThumbnailRef.current,
      opacity: 0,
      easing: 'easeInOutQuad',
      duration: 500
    })
  }

  closeVideo () {
    this.imageThumbnailRef.current.style.pointerEvents = 'all'
    anime({
      complete: () => this.baseVideoPlayerRef.current.plyr.stop(),
      targets: this.imageThumbnailRef.current,
      opacity: 1,
      easing: 'easeInOutQuad',
      duration: 500
    })
  }

  render () {
    return (
      <Container columns={ this.props.columns }>
        <ImageThumbnail
          image={ this.props.image }
          onClick={ this.onImageThumbnailClick.bind(this) }
          ref={ this.imageThumbnailRef }
          >
          <BannerContainer>
            <BaseBanner text={ this.props.bannerCopy }/>
          </BannerContainer>
          <PlayIcon src={require('../../../../assets/img/play-circle.svg')}/>
        </ImageThumbnail>
        { this.props.video
          ? (
            <VideoPlayerContainer>
              <BaseVideoPlayer
                ref={ this.baseVideoPlayerRef }
                src={ this.props.video }
                onClose={ this.closeVideo.bind(this) }
              />
            </VideoPlayerContainer>
          ) : null
        }
      </Container>
    )
  }

}
