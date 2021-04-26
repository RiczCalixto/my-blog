import * as React from "react"
import * as S from "./styled"
import { GlobalStyles } from "../../styles/global"
import { MenuBar } from "../MenuBar"
import { Sidebar } from "../SideBar"
import { TransitionPortal } from "gatsby-plugin-transition-link"

export const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}
