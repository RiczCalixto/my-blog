import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    height: 5.75rem;
    margin: auto;
    width: 5.75rem;
    ${media.lessThan("large")`
      height: 2.875rem;
      width: 2.875rem;
    `};
  }
`
