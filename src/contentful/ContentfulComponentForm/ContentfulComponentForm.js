import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BaseForm from '../../components/BaseForm/BaseForm'

export default ({ id }) => {
  
  const data = useStaticQuery(
    graphql`
      query AllContentfulComponentForm{
        allContentfulComponentForm{
          nodes{
            id
            name
            slug
            contentfulfields{
              ... on ContentfulFormInput{
                name
                type
                label
                required
              }
            }
          }
        }
      }
    `
  ).allContentfulComponentForm.nodes.find(item => item.id === id)

  return(
    <BaseForm 
      name={data.slug} 
      fields={data.contentfulfields} 
    />
  )
}