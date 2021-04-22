import React from "react"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

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
    {previous ? (
      <S.RecommendedLink
        to={previous.fields.slug}
        cover
        direction="left"
        bg={getThemeColor()}
        isPreviousLink
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    ) : (
      <S.RecommendedLink withoutArrow />
    )}
    {next && (
      <S.RecommendedLink
        to={next.fields.slug}
        cover
        direction="right"
        bg={getThemeColor()}
        isNextLink
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)
