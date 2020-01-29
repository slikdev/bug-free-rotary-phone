import React from 'react'
import styled from 'styled-components'
import BaseBanner from '../../../BaseBanner/BaseBanner'
import BaseButtonText from '../../../BaseButtonText/BaseButtonText'

export default ({ title, paragraph, terms, bannerCopy, buttonCopy, buttonLink, logo }) => {
  const Container = styled.a`
    display: flex;
    flex-direction: column;
    box-shadow: var(--box-shadow-1);
    border-radius: var(--border-radius-1);
    height: 35rem;
    position: relative;
    width: 100%;
    overflow: hidden;
  `

  const LogoContainer = styled.div`
    background: var(--color-gray-1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
  `

  const BannerContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    border-top-left-radius: var(--border-radius-1);
    max-width: 100%;
    white-space: nowrap;
  `

  const Logo = styled.div`
    width: 14rem;
    height: 5rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${logo});
  `

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--color-white-1);
    padding: var(--spacing-4);
    flex: 1;
  `

  const ContentUpper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `

  const ContentLower = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
  `

  const Title = styled.div`
    font-size: 1.6rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.5;
  `

  const Paragraph = styled.div`
    font-size: 1.6rem;
    line-height: 1.5;
  `

  const Terms = styled.div`
    font-size: 1.2rem;
  `

  const ButtonContainer = styled.div`
    margin-top: var(--spacing-2);
    * {
      font-size: 1.6rem !important;
    }
  `

  return (
    <Container href={ buttonLink }>
      <LogoContainer>
        { bannerCopy
          ? (
            <BannerContainer>
              <BaseBanner text={ bannerCopy }/>
            </BannerContainer>
          ) : null
        }
        <Logo/>
      </LogoContainer>
      <Content>
        <ContentUpper>
          <Title>{ title }</Title>
          <Paragraph>{ paragraph }</Paragraph>
        </ContentUpper>
        <ContentLower>
          <Terms>{ terms }</Terms>
          <ButtonContainer>
            <BaseButtonText text={ buttonCopy } color="var(--color-red-1)" as="div"/>
          </ButtonContainer>
        </ContentLower>
      </Content>
    </Container>
  )
}
