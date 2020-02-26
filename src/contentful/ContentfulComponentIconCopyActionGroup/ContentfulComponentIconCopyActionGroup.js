import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseIconCopyAction from '../../components/BaseIconCopyAction/BaseIconCopyAction'
import { BaseColumnGroupSlider } from '../../components/BaseColumnGroupSlider/BaseColumnGroupSlider'
import { only } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'
import styled from 'styled-components'

export default ({ id }) => {
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentIconCopyActionGroup {
        allContentfulComponentIconCopyActionGroup {
          nodes {
            id
            items {
              icon {
                file {
                  url
                }
              }
              title {
                title
              }
              paragraph {
                paragraph
              }
              fontColor
              buttonCopy
              buttonStyle
              buttonColor
              buttonLink
            }
          }
        }
      }
    `
  ).allContentfulComponentIconCopyActionGroup.nodes.find(item => item.id === id)

  const columns = data.items.length

  const Desktop = styled.div`
    ${only('sm')} {
      ${columns > 1 && 'display: none'}
    }
  `

  const Mobile = styled.div`
    display: none;
    ${only('sm')} {
      ${columns > 1 && 'display: block'}
    }
  `

  return (
    <>
      <Desktop>
        <BaseColumnGroupSlider
          items={data.items.map((item, i) => (
            <BaseIconCopyAction
              icon={item.icon.file.url}
              title={item.title.title}
              paragraph={item.paragraph.paragraph}
              fontColor={item.fontColor}
              buttonCopy={item.buttonCopy}
              buttonStyle={item.buttonStyle}
              buttonColor={item.buttonColor}
              buttonLink={item.buttonLink}
              columns={columns}
              key={i}
            />
          ))}
        />
      </Desktop>
      <Mobile>
        <BaseColumnGroupSlider
          items={data.items.map((item, i) => (
            <BaseIconCopyAction
              icon={item.icon.file.url}
              title={item.title.title}
              paragraph={item.paragraph.paragraph}
              fontColor={vars.COLOR_BLACK_2}
              buttonCopy={item.buttonCopy}
              buttonStyle="text"
              buttonColor={vars.COLOR_RED_1}
              buttonLink={item.buttonLink}
              columns={columns}
              key={i}
            />
          ))}
        />
      </Mobile>
    </>
  )
}
