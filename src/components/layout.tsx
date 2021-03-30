import * as React from "react"
import { Profile } from "./Profile"

const Layout: React.FC = ({ children }) => (
  <>
    <aside>
      <Profile />
    </aside>
    <main>{children}</main>
  </>
)

export default Layout
