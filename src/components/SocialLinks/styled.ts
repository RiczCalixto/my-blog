import styled from "styled-components"
import { Color } from "../../utils/design-system"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: ${Color.Grey};
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: ${Color.Blue};
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 2.5rem;
  height: 2.5rem;
`
