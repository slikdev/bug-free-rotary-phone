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
            title
            description{
              text:description
            }
            successMessage{
              text:successMessage
            }
            contentfulfields{
              ... on ContentfulFormInput{
                name
                type
                label
                required
                placeholder
                options
                width
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
      title={data.title}
      description={data.description.text}
    />
  )
}