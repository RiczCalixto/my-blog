import React from "react"
import * as S from "./styled"

export type ActionFields = {
  frontmatter: { title: string }
  fields: { slug: string }
}

type RecommendedPostsProps = {
  next: ActionFields
  previous: ActionFields
}

export const RecommendedPosts = ({ next, previous }: RecommendedPostsProps) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink to={previous.fields.slug}>
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink to={next.fields.slug} isNextLink>
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)
