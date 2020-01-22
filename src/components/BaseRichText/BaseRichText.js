import React from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import BaseText2 from '../BaseText2/BaseText2'
import BaseText3 from '../BaseText3/BaseText3'
import BaseText4 from '../BaseText4/BaseText4'
import { up } from 'styled-breakpoints'

export default ({ json, textAlign }) => {
  const Container = styled.div`
    text-align: center;
    ${up('md')} {
      text-align: ${textAlign};
    }
  `

  const Bold = styled.span`
    font-weight: var(--font-weight-bold);
  `

  const Anchor = styled.a`
    color: var(--color-red-1);
    text-decoration: underline;
  `

  const Node = styled.div`
    margin-bottom: ${props => props.marginBottom};
  `

  const html = documentToReactComponents(json, {
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => (
        <Node marginBottom="var(--spacing-6)">
          <BaseText3 text={children}/>
        </Node>
      ),
      [BLOCKS.HEADING_2]: (_, children) => (
        <Node marginBottom="var(--spacing-5)">
          <BaseText4 text={children}/>
        </Node>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => (
        children[0][1] &&
        <Node marginBottom="var(--spacing-5)">
          <BaseText2 text={children}/>
        </Node>
      ),
      [INLINES.HYPERLINK]: (node, children) => <Anchor href={node.data.uri}>{ children }</Anchor>,
    },
    renderMark: {
      [MARKS.BOLD]: children => <Bold>{ children }</Bold>
    }
  })

  return <Container>{ html }</Container>
}
