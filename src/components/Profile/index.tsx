import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadataQuery, SiteSiteMetadata } from "../../../graphql-types"
import { Avatar } from "../Avatar"

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
  <div>
    <Avatar />
    <h1>{data.title}</h1>
    <h2>{data.position}</h2>
    <p>{data.description}</p>
  </div>
)
