import React from 'react'
import styled from 'styled-components'
import { up, only } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: auto;
  ${only('sm')} {
    width: calc(100% + 2 * 2rem);
    margin: -2rem;
  }
`

const ItemContainer = styled.div`
  ${only('sm')} {
    padding: 2rem;
    &:not(:last-child) {
      margin-right: -2rem;
    }
  }
  ${up('md')} {
    margin-right: ${vars.SPACING_4};
    min-width: 100%;
    flex: 1;
    min-width: auto;
    margin-right: 0;
    &:not(:last-child) {
      margin-right: calc(${vars.SPACING_8} / ${({columns}) => columns});
    }
  }
`

export class BaseColumnGroupSlider extends React.Component {

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Container>
        { this.props.items.map((item, i) => <ItemContainer columns={ this.props.items.length } key={i}>{ item }</ItemContainer>) }
      </Container>
    )
  }

}
