import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import vars from '../../../../assets/css/vars/vars'
import { up } from 'styled-breakpoints'

const categorySpacing = '2rem'

const Container = styled.div`
  margin-bottom: 7.5rem;
`

const CategoryTilesContainer = styled.div`
  display: none;
  ${up('md')} {
    display: flex;
    flex-wrap: wrap;
    margin-right: calc(-1 * ${categorySpacing});
    margin-bottom: calc(-1 * ${categorySpacing});
  }
`

const TileContainer = styled.div`
  position: relative;
  width: calc(100% / 6);
  padding-right: ${categorySpacing};
  padding-bottom: ${categorySpacing};
`

const Tile = styled.div`
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
  transition: border-color ${vars.TRANSITION_SETTINGS};
  &:hover {
    border-color: ${vars.COLOR_RED_1};
  }
`

const CategoryDropdownContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: 60rem;
  margin: auto;
  ${up('md')} {
    display: none;
  }
`

const Dropdown = styled.select`
  width: 100%;
  font-size: 1.8rem;
  border-radius: 0;
  border: solid 2px ${vars.COLOR_GRAY_2};
  font-weight: ${vars.FONT_WEIGHT_REGULAR};
  padding: ${vars.SPACING_3} ${vars.SPACING_4};
  background: ${vars.COLOR_WHITE_1};
`

const Option = styled.option``

const ArrowDown = styled.img`
  position: absolute;
  height: 15%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: ${vars.SPACING_4};
  pointer-events: none;
`

export default ({ categories, onCategorySelected, selectedCategoryIndex }) => {

  const trackEvent = (category) => {
    ReactGA.event({
      category: 'Partner Category',
      action: 'Click',
      label: category
    })
  }

  return (
    <Container>
      <CategoryTilesContainer>
        { categories.map((category, i) => (
          <TileContainer key={i}>
            <Tile
              onClick={() => {
                onCategorySelected(i)
                trackEvent(category.title)
              }}
              active={ selectedCategoryIndex === i }
            >
              { category.title }
            </Tile>
          </TileContainer>
        )) }
      </CategoryTilesContainer>
      <CategoryDropdownContainer>
        <Dropdown onChange={e => onCategorySelected(parseInt(e.target.value))} value={selectedCategoryIndex}>
          { categories.map((category, i) => (
            <Option value={i} key={i}>{category.title}</Option>
          )) }
        </Dropdown>
        <ArrowDown src={require('../../../../assets/img/arrow-down.svg')}/>
      </CategoryDropdownContainer>
    </Container>
  )
}
