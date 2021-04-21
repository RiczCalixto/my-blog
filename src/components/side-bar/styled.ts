import styled from "styled-components"
import { Color } from "../../utils/design-system"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid ${Color.DarkGrey};
  background: ${Color.LightBlack};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
`
