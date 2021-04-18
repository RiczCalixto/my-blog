import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadataQuery, SiteSiteMetadata } from "../../../graphql-types"
import { Avatar } from "../Avatar"
import * as S from "./styled"

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
    <S.ProfileLink to="/">
      <Avatar />
      <S.ProfileAuthor>
        <h1>{data.title}</h1>
        <S.ProfilePosition>
          <h2>{data.position}</h2>
        </S.ProfilePosition>
      </S.ProfileAuthor>
    </S.ProfileLink>
    <S.ProfileDescription>
      <p>{data.description}</p>
    </S.ProfileDescription>
  </S.ProfileWrapper>
)
