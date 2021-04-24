import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadataQuery, SiteSiteMetadata } from "../../../graphql-types"
import { Avatar } from "../Avatar"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

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

export const Profile: React.FC = () => {
  const { site } = useStaticQuery<SiteMetadataQuery>(SiteMetadata)

  return <ProfileSection data={site.siteMetadata} />
}

interface ProfileSectionProps {
  data: SiteSiteMetadata
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => (
  <S.ProfileWrapper>
    <S.ProfileLink
      to="/"
      cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6}
    >
      <Avatar />
      <S.ProfileAuthor>
        {data.title}
        <S.ProfilePosition>{data.position}</S.ProfilePosition>
      </S.ProfileAuthor>
    </S.ProfileLink>
    <S.ProfileDescription>{data.description}</S.ProfileDescription>
  </S.ProfileWrapper>
)
