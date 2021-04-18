import * as React from "react"
import * as S from "./styled"
import { GlobalStyles } from "../../styles/global"
import { MenuBar } from "../MenuBar"
import { Sidebar } from "../Sidebar"

export const Layout: React.FC = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Sidebar />
    <S.LayoutMain>{children}</S.LayoutMain>
    <MenuBar />
  </S.LayoutWrapper>
)
