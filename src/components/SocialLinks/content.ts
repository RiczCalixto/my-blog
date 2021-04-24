import { Icons } from "./Icons"
import { StyledIcon } from "@styled-icons/styled-icon"

interface SocialLink {
  id: number
  label: string
  url: string
  icon: StyledIcon
}

export const externalLinks: SocialLink[] = [
  {
    id: 1,
    label: "Github",
    url: "https://github.com/RiczCalixto",
    icon: Icons["Github"],
  },
  {
    id: 2,
    label: "Linkedin",
    url: "https://www.linkedin.com/in/ricardo-calixto-a1374615b/",
    icon: Icons["Linkedin"],
  },
  {
    id: 3,
    label: "Medium",
    url: "https://medium.com/@rcalixtos",
    icon: Icons["Medium"],
  },
]
