import * as React from "react"
import { Profile } from "./Profile"

const ricInfo = {
  title: "Ricardo Calixto",
  subtitle: "Engenheiro de Software e Advogado",
  description:
    "Compartilho meus aprendizados sobre programação, desenvolvimento pessoal, finanças e direito.",
}

const Layout: React.FC = ({ children }) => (
  <>
    <aside>
      <Profile
        title={ricInfo.title}
        subtitle={ricInfo.subtitle}
        description={ricInfo.description}
      />
    </aside>
    <main>{children}</main>
  </>
)

export default Layout
