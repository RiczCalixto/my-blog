import * as S from "./styled"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../../static/assets/img/ric.png"
        alt="avatar"
        placeholder="blurred"
        loading="eager"
      />
    </S.AvatarWrapper>
  )
}
