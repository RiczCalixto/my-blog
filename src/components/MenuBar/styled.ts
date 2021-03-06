import styled, { css } from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
  &.active {
    span {
      color: var(--highlight);
    }
  }
`

const LightOnCss = css`
  color: var(--lightOn);
  &:hover {
    color: var(--lightOnHover);
  }
`

const ShowGridIconCss = css`
  ${media.lessThan("large")`
      display: none;
    `}
`

type MenuBarItemProps = { isLight?: boolean; hideOnMobile?: boolean }

export const MenuBarItem = styled.span<MenuBarItemProps>`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: var(--highlight);
  }
  ${props => props.isLight && LightOnCss}
  ${props => props.hideOnMobile && ShowGridIconCss}

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}

  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`

export const MenuBarGroupMobile = styled.div`
  display: none;
  ${media.lessThan("large")`
    display: block;
  `}
`


