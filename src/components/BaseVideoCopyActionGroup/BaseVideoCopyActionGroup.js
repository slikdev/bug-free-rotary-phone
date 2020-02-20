import React from 'react'
import BaseVideoCopyAction from '../BaseVideoCopyAction/BaseVideoCopyAction'
import { BaseColumnGroupSlider } from '../BaseColumnGroupSlider/BaseColumnGroupSlider'
import { BaseVideoPlayer } from '../BaseVideoPlayer/BaseVideoPlayer'
import styled from 'styled-components'
import anime from 'animejs'

const VideoPlayerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  opacity: 0;
  height: 0;
`

const Spacer = styled.div`
  height: 0;
  width: 100%;
`

export class BaseVideoCopyActionGroup extends React.Component {

  constructor(props) {
    super(props)
    this.videoPlayerRef = React.createRef()
    this.videoPlayerContainerRef = React.createRef()
    this.spacerRef = React.createRef()
    this.state = { selectedVideoIndex: 0 }
  }

  onClose () {
    this.animateVideoPlayer('out')
  }

  onImageThumbnailClick (i) {
    this.setState({ selectedVideoIndex: i }, () => this.animateVideoPlayer('in'))
  }

  animateVideoPlayer (direction) {
    const tl = new anime.timeline({
      easing: 'easeInOutQuad',
      begin: () => direction === 'in' ? this.videoPlayerRef.current.plyr.play() : null,
      complete: () => direction === 'out' ? this.videoPlayerRef.current.plyr.stop() : null
    })
    tl.add({
      targets: this.videoPlayerContainerRef.current,
      height: direction === 'in' ? ({ children: [ el ] }) => el.offsetHeight : 0,
      opacity: direction === 'in' ? 1 : 0,
      duration: 500
    }, 0)
    tl.add({
      targets: this.spacerRef.current,
      height: direction === 'in' ? 40 : 0,
      duration: 500
    }, 0)
  }

  render () {
    return (
      <>
        <VideoPlayerContainer ref={ this.videoPlayerContainerRef }>
          <BaseVideoPlayer
            ref={ this.videoPlayerRef }
            title={ this.props.items[this.state.selectedVideoIndex].title }
            poster={ this.props.items[this.state.selectedVideoIndex].image }
            src={ this.props.items[this.state.selectedVideoIndex].video }
            onClose={ () => this.onClose() }
          />
        </VideoPlayerContainer>
        <Spacer ref={ this.spacerRef }/>
        <BaseColumnGroupSlider
          items={this.props.items.map((item, i) => (
            <BaseVideoCopyAction
              title={item.title}
              paragraph={item.paragraph}
              image={item.image}
              bannerCopy={item.bannerCopy}
              buttonCopy={item.buttonCopy}
              buttonLink={item.buttonLink}
              columns={this.props.items.length}
              onImageThumbnailClick={() => this.onImageThumbnailClick(i)}
              key={i}
            />
          ))}
        />
      </>
    )
  }
}
