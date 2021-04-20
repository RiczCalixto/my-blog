import styled from "styled-components"
import { Color } from "../../utils/design-system"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid ${Color.DarkGrey};
  color: ${Color.Grey};
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: ${Color.Grey};
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: ${Color.Blue};
    }
  }
`
export const Casa = styled.div``
