import * as React from "react"
import * as S from "./styled"
import { GlobalStyles } from "../../styles/global"
import { MenuBar } from "../menu-bar"
import { Sidebar } from "../side-bar"

export const Layout: React.FC = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Sidebar />
    <S.LayoutMain>{children}</S.LayoutMain>
    <MenuBar />
  </S.LayoutWrapper>
)
