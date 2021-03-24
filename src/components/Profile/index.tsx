import * as React from "react"

interface ProfileProps {
  title: string
  subtitle: string
  description: string
}

export const Profile: React.FC<ProfileProps> = ({
  title,
  subtitle,
  description,
}) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{description}</p>
  </div>
)
