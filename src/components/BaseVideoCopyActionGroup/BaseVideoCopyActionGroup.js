import React from 'react'
import BaseVideoCopyAction from '../BaseVideoCopyAction/BaseVideoCopyAction'
import { BaseColumnGroup } from '../BaseColumnGroup/BaseColumnGroup'
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
    this.videoPlayerContainerRef = React.createRef()
    this.spacerRef = React.createRef()
    this.state = { selectedVideoIndex: 0 }
  }

  onVideoSelected (i) {
    this.setState({ selectedVideoIndex: i }, () => this.animateVideoPlayer('in'))
  }

  animateVideoPlayer (direction) {
    const tl = new anime.timeline({ easing: 'easeInOutQuad' })
    tl.add({
      targets: this.videoPlayerContainerRef.current,
      height: direction === 'in' ? ({ children: [ el ] }) => el.offsetHeight : 0,
      opacity: direction === 'in' ? 1 : 0,
      duration: 1000
    }, 0)
    tl.add({
      targets: this.spacerRef.current,
      height: direction === 'in' ? 40 : 0,
      duration: 1000
    }, 0)
  }

  render () {
    return (
      <>
        <VideoPlayerContainer ref={ this.videoPlayerContainerRef }>
          <BaseVideoPlayer
            title={ this.props.items[this.state.selectedVideoIndex].title }
            poster={ this.props.items[this.state.selectedVideoIndex].image }
            src={ this.props.items[this.state.selectedVideoIndex].video }
          />
        </VideoPlayerContainer>
        <Spacer ref={ this.spacerRef }/>
        <BaseColumnGroup
          items={this.props.items.map((item, i) => (
            <BaseVideoCopyAction
              title={item.title}
              paragraph={item.paragraph}
              image={item.image}
              bannerCopy={item.bannerCopy}
              buttonCopy={item.buttonCopy}
              buttonLink={item.buttonLink}
              columns={this.props.items.length}
              onVideoSelected={() => this.onVideoSelected(i)}
              key={i}
            />
          ))}
        />
      </>
    )
  }
}
