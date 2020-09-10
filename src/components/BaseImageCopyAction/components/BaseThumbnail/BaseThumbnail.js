import React from 'react'
import styled from 'styled-components'
import BaseBanner from '../../../BaseBanner/BaseBanner'
import vars from '../../../../assets/css/vars/vars'
import { only } from 'styled-breakpoints'

const Container = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  padding-top: ${props => props.columns > 1 ? 'calc(100% / 3 * 2)' : 'calc(100% / 16 * 9)'};
  margin-bottom: ${vars.SPACING_6};

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

export class BaseThumbnail extends React.Component {

  constructor(props) {
    super(props)
    this.imageThumbnailRef = React.createRef()
  }

  render () {
    return (
      <Container columns={ this.props.columns }>
        <ImageThumbnail
          image={ this.props.image }
          ref={ this.imageThumbnailRef }
        >
          <BannerContainer>
            <BaseBanner text={ this.props.bannerCopy }/>
          </BannerContainer>
        </ImageThumbnail>
      </Container>
    )
  }

}
