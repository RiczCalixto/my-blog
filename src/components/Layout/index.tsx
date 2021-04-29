import * as React from "react"
import * as S from "./styled"
import { GlobalStyles } from "../../styles/global"
import { MenuBar } from "../MenuBar"
import { Sidebar } from "../SideBar"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadataQuery } from "../../../graphql-types"
import { Profile } from "../Profile"

const SiteMetadata = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
      description
      author
      position
    }
  }

  query SiteMetadata {
    site {
      ...SiteInformation
    }
  }
`

export const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadataQuery>(SiteMetadata)
  console.log("dentrod e layout")
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Profile siteMetadata={siteMetadata} isMobileHeader={true} />
        <Sidebar
          siteMetadata={siteMetadata}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}
