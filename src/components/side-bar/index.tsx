import React from "react"
import * as S from "./styled"
import { MenuLinks } from "../menu-links"
import { Profile } from "../profile"
import { SocialLinks } from "../social-links"

export const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)
