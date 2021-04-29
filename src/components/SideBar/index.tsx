import React from "react"
import * as S from "./styled"
import { MenuLinks } from "../MenuLinks"
import { Profile } from "../Profile"
import { SocialLinks } from "../SocialLinks"
import { SiteInformationFragment } from "../../../graphql-types"

type SidebarProps = Partial<SiteInformationFragment> & {
  setIsMenuOpen: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
}

export const Sidebar = ({
  siteMetadata,
  isMenuOpen,
  setIsMenuOpen,
}: SidebarProps) => (
  <S.SidebarContainer isMenuOpen={isMenuOpen}>
    <Profile siteMetadata={siteMetadata} isMobileHeader={false} />
    <S.SidebarLinksContainer>
      <SocialLinks />
      <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.SidebarLinksContainer>
  </S.SidebarContainer>
)
