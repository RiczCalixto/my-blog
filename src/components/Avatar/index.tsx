import * as S from "./styled"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Avatar = () => (
  <S.AvatarWrapper>
    <StaticImage
      alt="avatar"
      src="../../images/ric.png"
      placeholder="tracedSVG"
    />
  </S.AvatarWrapper>
)
