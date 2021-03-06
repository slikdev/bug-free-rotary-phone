import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: relative;
overflow: auto;
${up('md')} {
  flex-direction: row;
}
> * {
  margin-right: ${vars.SPACING_4};
  min-width: 100%;
  ${up('md')} {
    flex: 1;
    min-width: auto;
    margin-right: 0;
    &:not(:last-child) {
      margin-right: calc(${vars.SPACING_8} / ${props => props.columns});
    }
  }
}
`

export class BaseColumnGroup extends React.Component {

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Container columns={ this.props.items.length }>
        { this.props.items }
      </Container>
    )
  }

}
