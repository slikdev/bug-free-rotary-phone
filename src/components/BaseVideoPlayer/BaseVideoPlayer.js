import React from 'react'
import styled from 'styled-components'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

const Container = styled.div`
  position: relative;
`

const CloseButton = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 7%;
  opacity: 0.8;
  z-index: 1;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
`

export class BaseVideoPlayer extends React.Component {

  constructor (props) {
    super(props)
    this.videoPlayerEl = React.createRef()
  }

  componentDidMount () {
    this.initPlyr()
    this.setSrc()
  }

  componentDidUpdate(prevProps) {
    if (this.props.src !== prevProps.src) this.setSrc()
  }

  initPlyr () {
    this.plyr = new Plyr(this.videoPlayerEl.current, {
      ratio: '16:9'
    })
  }

  setSrc () {
    this.plyr.source = {
      type: 'video',
      title: this.props.title,
      sources: [ { src: this.props.src, type: 'video/mp4', size: 720 } ]
    }
  }

  render () {
    return (
      <Container>
        <CloseButton src={require('../../assets/img/close.svg')} onClick={ this.props.onClose }/>
        <VideoPlayer ref={this.videoPlayerEl}/>
      </Container>
    )
  }

}
