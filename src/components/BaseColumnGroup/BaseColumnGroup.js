import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

const Container = styled.div`
width: 100%;
display: flex;
position: relative;
overflow: auto;
> * {
  margin-right: var(--spacing-4);
  min-width: 100%;
  ${up('md')} {
    flex: 1;
    min-width: auto;
    margin-right: 0;
    &:not(:last-child) {
      margin-right: calc(var(--spacing-8) / ${props => props.columns});
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
