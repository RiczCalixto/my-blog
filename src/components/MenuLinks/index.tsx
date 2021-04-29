import React from "react"
import { internalLinks } from "./content"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

type MenuLinksProps = {
  setIsMenuOpen: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
}

export const MenuLinks = ({ setIsMenuOpen, isMenuOpen }: MenuLinksProps) => {
  const menuLinkClickTrack = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {internalLinks.map(link => (
          <S.MenuLinksItem key={link.id}>
            <S.MenuLinksLink
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
              to={link.url}
              activeClassName="active"
              onClick={menuLinkClickTrack}
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}
