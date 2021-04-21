import styled from "styled-components"
import { Link } from "gatsby"
import { Color } from "../../utils/design-system"

export const PostItemLink = styled(Link)`
  color: ${Color.Grey};
  display: flex;
  text-decoration: none;
  &:hover {
    color: ${Color.Blue};
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid ${Color.DarkGrey};
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`

interface PostItemTagProps {
  background: string
}

export const PostItemTag = styled.div<PostItemTagProps>`
  align-items: center;
  background: ${props => (props.background ? props.background : Color.Blue)};
  border-radius: 50%;
  color: ${Color.White};
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
