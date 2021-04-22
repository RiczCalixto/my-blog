import styled, { css } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
`

type RecommendedLinkProps = {
  isNextLink?: boolean
  isPreviousLink?: boolean
  hasArrow?: boolean
}

const NextLinkCss = css`
  justify-content: flex-end;
  :after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
const PreviousLinkCss = css`
  border-right: 1px solid var(--borders);
  :before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
`
const PreviousLinkWithoutArrowCss = css`
  border-right: 1px solid var(--borders);
`

export const RecommendedLink = styled(AniLink)<RecommendedLinkProps>`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: var(--borders);
  }
  ${props => props.isNextLink && NextLinkCss}
  ${props => props.isPreviousLink && PreviousLinkCss}
  ${props => props.withoutArrow && PreviousLinkWithoutArrowCss}
`
