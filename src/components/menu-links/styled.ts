import styled from "styled-components"
import { Link } from "gatsby"
import { Color } from "../../utils/design-system"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: ${Color.Blue};
  }
`

export const MenuLinksLink = styled(Link)`
  color: ${Color.Grey};
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: ${Color.Blue};
  }
`
