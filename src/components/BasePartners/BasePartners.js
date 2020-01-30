import React from 'react'
import styled from 'styled-components'
import BaseCategories from './components/BaseCategories/BaseCategories'
import BasePartner from './components/BasePartner/BasePartner'
import { up } from 'styled-breakpoints'

const partnerSpacing = '2rem'

const Partners = styled.div`
  display: flex;
  margin-right: calc(-1 * ${partnerSpacing});
  margin-bottom: calc(-1 * ${partnerSpacing});
  margin-left: calc(-1 * ${partnerSpacing});
  padding-left: ${partnerSpacing};
  overflow: auto;
  ${up('md')} {
    flex-wrap: wrap;
    overflow: visible;
    margin-left: 0;
    padding-left: 0;
  }
`

const PartnerContainer = styled.div`
  position: relative;
  padding-right: ${partnerSpacing};
  padding-bottom: ${partnerSpacing};
  width: 80%;
  ${up('md')} { width: calc(100% / 3); }
  ${up('lg')} { width: calc(100% / 4); }
`

export class BasePartners extends React.Component {

  constructor (props) {
    super(props)
    this.state = { selectedCategoryIndex: 0 }
  }

  onCategorySelected (i) {
    this.setState({ selectedCategoryIndex: i })
  }

  render () {
    return (
      <>
        <BaseCategories
          categories={this.props.categories}
          onCategorySelected={this.onCategorySelected.bind(this)}
          selectedCategoryIndex={this.state.selectedCategoryIndex}
        />
        <Partners>
          { this.props.categories[this.state.selectedCategoryIndex].partners.map((partner, i) => (
            <PartnerContainer key={i}>
              <BasePartner
                title={partner.title}
                paragraph={partner.paragraph}
                terms={partner.terms}
                bannerCopy={partner.bannerCopy}
                buttonCopy={partner.buttonCopy}
                buttonLink={partner.buttonLink}
                logo={partner.logo}
              />
            </PartnerContainer>
          )) }
        </Partners>
      </>
    )
  }
}
