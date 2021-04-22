import React from "react"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

interface PostItemProps {
  slug: string
  background?: string
  category: string
  date: string
  timeToRead?: number
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
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)
