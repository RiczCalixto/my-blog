import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

interface PaginationProps {
  isFirst: boolean
  isLast: boolean
  currentPage: number
  numPages: number
  prevPage: string
  nextPage: string
}

export const Pagination: React.FC<PaginationProps> = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink
        to={prevPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        proxima página →
      </AniLink>
    )}
  </S.PaginationWrapper>
)
