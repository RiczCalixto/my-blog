import * as React from "react"
import { SiteInformationFragment } from "../../../graphql-types"
import { Avatar } from "../Avatar"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

type ProfileSectionProps = Partial<SiteInformationFragment> & {
  isMobileHeader: boolean
}

export const Profile = ({
  siteMetadata,
  isMobileHeader,
}: ProfileSectionProps) => (
  <S.ProfileContainer isMobileHeader={isMobileHeader}>
    <S.ProfileLink
      to="/"
      cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6}
    >
      <Avatar />
      <S.ProfileAuthor>
        {siteMetadata.title}
        <S.ProfilePosition>{siteMetadata.position}</S.ProfilePosition>
      </S.ProfileAuthor>
    </S.ProfileLink>
    <S.ProfileDescription>{siteMetadata.description}</S.ProfileDescription>
  </S.ProfileContainer>
)
