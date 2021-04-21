import React from "react"
import { externalLinks } from "./content"
import * as S from "./styled"

export const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {externalLinks.map(link => (
        <S.SocialLinksItem key={link.id}>
          <S.SocialLinksLink
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <link.icon />
            </S.IconWrapper>
          </S.SocialLinksLink>
        </S.SocialLinksItem>
      ))}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)
