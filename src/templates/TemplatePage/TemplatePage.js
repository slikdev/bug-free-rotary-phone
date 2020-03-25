import React from 'react'
import { graphql } from 'gatsby'
import contentfulComponents from '../../contentful/components'
import styled, { ThemeProvider } from 'styled-components'
import { DefaultStyles } from '../../assets/css/defaults/defaults'
import { Helmet } from 'react-helmet'

const theme = {
  breakpoints: {
    sm: '0px',
    md: '768px',
    lg: '996px'
  }
}

const Page = styled.div`
  width: 100%;
  height: auto;
`

export const query = graphql`
  query ContentfulPageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      seo {
        title
        description
        keywords
        image {
          file {
            url
          }
        }
      }
      components {
        ... on Node {
          __typename
          id
        }
      }
      redirect
    }
  }
`

export default class TemplatePage extends React.Component {

  constructor (props) {
    super(props)
    window && this.props.data.contentfulPage.redirect && (window.location = this.props.data.contentfulPage.redirect)
  }

  createContentfulComponent(id, __typename, i) {
    return (ContentfulComponent => <ContentfulComponent id={id} key={i} />)(
      contentfulComponents[__typename]
    )
  }

  render() {
    const data = this.props.data.contentfulPage
    return (
      <ThemeProvider theme={theme}>
        <DefaultStyles />
        <Helmet>
          <title>{ data.seo.title }</title>
          <meta name="title" content={ data.seo.title }/>
          <meta name="description" content={ data.seo.description }/>
          <meta name="keywords" content={ data.seo.keywords }/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={ data.seo.title }/>
          <meta property="og:description" content={ data.seo.description }/>
          <meta property="og:image" content={ data.seo.image.file.url }/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:title" content={ data.seo.title }/>
          <meta property="twitter:description" content={ data.seo.description }/>
          <meta property="twitter:image" content={ data.seo.image.file.url }/>
          <link rel="shortcut icon" type="image/png" href={require('../../assets/img/favicon.ico')}/>
        </Helmet>
        <Page>
          {data.components.map((component, i) => this.createContentfulComponent(component.id, component.__typename, i))}
        </Page>
      </ThemeProvider>
    )
  }
}
