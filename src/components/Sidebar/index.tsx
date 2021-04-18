import React from "react"
import * as S from "./styled"
import { MenuLinks } from "../MenuLinks"
import { Profile } from "../Profile"
import { SocialLinks } from "../SocialLinks"

export const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)
