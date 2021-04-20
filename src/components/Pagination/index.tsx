import React from "react"
import { Link } from "gatsby"
import * as S from "./styled"

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
  <>
    {numPages > 1 && (
      <S.PaginationWrapper>
        {!isFirst && <Link to={prevPage}>← página anterior</Link>}
        <p>
          {currentPage} de {numPages}
        </p>
        {!isLast && <Link to={nextPage}>proxima página →</Link>}
      </S.PaginationWrapper>
    )}
  </>
)
