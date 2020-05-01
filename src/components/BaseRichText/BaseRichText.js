import React from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import BaseText2 from '../BaseText2/BaseText2'
import BaseText3 from '../BaseText3/BaseText3'
import BaseText4 from '../BaseText4/BaseText4'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

const Container = styled.div`
  text-align: center;
  ${up('md')} {
    text-align: ${props => props.textAlign};
  }
`

const Bold = styled.span`
  font-weight: ${vars.FONT_WEIGHT_BOLD};
`

const Anchor = styled.a`
  color: ${vars.COLOR_RED_1};
  text-decoration: underline;
`

const Node = styled.div`
  margin-bottom: ${props => props.marginBottom};
  * {
    ${props => props.forceFontSize ? `font-size: ${props.forceFontSize} !important;` : null}
    ${props => props.forceTextAlign ? `text-align: ${props.forceTextAlign} !important;` : null}
  }
`

export default ({ json, textAlign, forceFontSize, forceTextAlign }) => {
  const html = documentToReactComponents(json, {
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => (
        <Node marginBottom={vars.SPACING_6} forceFontSize={ forceFontSize } forceTextAlign={ forceTextAlign }>
          <BaseText3 text={children}/>
        </Node>
      ),
      [BLOCKS.HEADING_2]: (_, children) => (
        <Node marginBottom={vars.SPACING_5} forceFontSize={ forceFontSize } forceTextAlign={ forceTextAlign }>
          <BaseText4 text={children}/>
        </Node>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => (!Array.isArray(children[0]) || !!children[0][1]) && (
        <Node marginBottom={vars.SPACING_5} forceFontSize={ forceFontSize } forceTextAlign={ forceTextAlign }>
          <BaseText2 text={children}/>
        </Node>
      ),
      [INLINES.HYPERLINK]: (node, children) => <Anchor href={node.data.uri}>{ children }</Anchor>,
    },
    renderMark: {
      [MARKS.BOLD]: children => <Bold>{ children }</Bold>
    }
  })

  return <Container textAlign={ textAlign }>{ html }</Container>
}
