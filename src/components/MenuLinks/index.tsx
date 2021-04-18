import React from "react"
import { internalLinks } from "./content"
import * as S from "./styled"

export const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {internalLinks.map(link => (
        <S.MenuLinksItem key={link.id}>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)
