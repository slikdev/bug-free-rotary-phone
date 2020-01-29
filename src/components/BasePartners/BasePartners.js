import React from 'react'
import styled from 'styled-components'
import BasePartner from './components/BasePartner/BasePartner'
import { up } from 'styled-breakpoints'
import vars from '../../assets/css/vars/vars'

const categorySpacing = '2rem'
const partnerSpacing = '2rem'

const Container = styled.div``

const CategoriesContainer = styled.div`
  margin-bottom: 7.5rem;
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-1 * ${categorySpacing});
  margin-bottom: calc(-1 * ${categorySpacing});
`

const CategoryContainer = styled.div`
  position: relative;
  width: calc(100% / 6);
  padding-right: ${categorySpacing};
  padding-bottom: ${categorySpacing};
`

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  line-height: 1.25;
  font-size: 1.6rem;
  border-radius: ${vars.BORDER_RADIUS_1};
  box-shadow: ${vars.BOX_SHADOW_2};
  border: solid 1px ${vars.COLOR_GRAY_2};
  text-align: center;
  border: solid 1px ${props => props.active ? vars.COLOR_TRANSPARENT : vars.COLOR_GRAY_2};
  color: ${props => props.active ? vars.COLOR_WHITE_1 : vars.COLOR_BLACK_2};
  background: ${props => props.active ? vars.COLOR_RED_1 : vars.COLOR_WHITE_1};
  cursor: pointer;
`

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

  onCategoryClick (i) {
    this.setState({ selectedCategoryIndex: i })
  }

  render () {
    return (
      <Container>
        <CategoriesContainer>
          <Categories>
            { this.props.categories.map((category, i) => (
              <CategoryContainer key={i}>
                <Category onClick={ () => this.onCategoryClick(i) } active={ this.state.selectedCategoryIndex === i }>
                  { category.title }
                </Category>
              </CategoryContainer>
            )) }
          </Categories>
        </CategoriesContainer>
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
      </Container>
    )
  }
}
