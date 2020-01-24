import React from 'react'
import styled from 'styled-components'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

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
    this.plyr = new Plyr(this.videoPlayerEl.current)
  }

  setSrc () {
    this.plyr.source = {
      type: 'video',
      title: this.props.title,
      sources: [ { src: this.props.src, type: 'video/mp4', size: 720 } ]
    }
  }

  render () {
    return <VideoPlayer ref={this.videoPlayerEl}/>
  }

}
