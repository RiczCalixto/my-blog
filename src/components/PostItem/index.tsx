import React from "react"
import * as S from "./styled"

interface PostItemProps {
  slug: string
  background?: string
  category: string
  date: string
  timeToRead: number
  title: string
  description: string
}

export const PostItem: React.FC<PostItemProps> = ({
  slug,
  background,
  category,
  date,
  title,
  timeToRead,
  description,
}) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)
