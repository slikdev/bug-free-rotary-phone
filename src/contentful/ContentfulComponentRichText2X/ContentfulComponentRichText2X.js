import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseRichText from '../../components/BaseRichText/BaseRichText'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${up('md')} {
    flex-direction: row;
    > * { flex: 1 }
  }
`

const Spacer = styled.div`
  flex: 0 0 var(--spacing-6);
  display: none;
  ${up('md')} {
    display: block;
  }
`

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentRichText2X {
        allContentfulComponentRichText2X {
          nodes {
            id
            content1 {
              json
            }
            content1TextAlign
            content2 {
              json
            }
            content2TextAlign
          }
        }
      }
    `
  ).allContentfulComponentRichText2X.nodes.find(item => item.id === id)

  return (
    <Container>
      <BaseRichText json={data.content1.json} textAlign={data.content1TextAlign}/>
      <Spacer/>
      <BaseRichText json={data.content2.json} textAlign={data.content2TextAlign}/>
    </Container>
  )
}
