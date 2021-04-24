import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import * as S from "./styled"

type CommentsProps = {
  url: string
  title: string
}

export const Comments = ({ url, title }: CommentsProps) => {
  const completeURL = `https://riczcalixto.dev${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="jhondoe"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}
