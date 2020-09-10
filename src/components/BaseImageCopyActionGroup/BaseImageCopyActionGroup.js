import React from 'react'
import BaseImageCopyAction from '../BaseImageCopyAction/BaseImageCopyAction'
import { BaseColumnGroupSlider } from '../BaseColumnGroupSlider/BaseColumnGroupSlider'
import styled from 'styled-components'

const Spacer = styled.div`
  height: 0;
  width: 100%;
`

export class BaseImageCopyActionGroup extends React.Component {

  constructor(props) {
    super(props)

    this.spacerRef = React.createRef()
    this.state = { selectedVideoIndex: 0 }
  }

  render () {
    return (
      <>
        <Spacer ref={ this.spacerRef }/>
        <BaseColumnGroupSlider
          items={this.props.items.map((item, i) => (
            <BaseImageCopyAction
              title={item.title}
              paragraph={item.paragraph}
              image={item.image}
              bannerCopy={item.bannerCopy}
              buttonCopy={item.buttonCopy}
              buttonLink={item.buttonLink}
              columns={this.props.items.length}
              key={i}
            />
          ))}
        />
      </>
    )
  }
}
