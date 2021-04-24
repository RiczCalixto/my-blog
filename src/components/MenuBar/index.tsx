import React from "react"
import { Home } from "@styled-icons/ionicons-outline/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as LightOff } from "@styled-icons/fluentui-system-regular/Lightbulb"
import { LightbulbFilament as LightOn } from "@styled-icons/fluentui-system-filled/LightbulbFilament"
import { List } from "@styled-icons/bootstrap/List"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import * as S from "./styled"
import { GridType, ThemeColor } from "./model"
import getThemeColor from "../../utils/getThemeColor"

export const MenuBar = () => {
  const [theme, setTheme] = React.useState(null)
  const [display, setDisplay] = React.useState(null)
  const isDarkMode = theme === ThemeColor.Dark
  const isListMode = display === GridType.List

  React.useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  React.useEffect(() => {
    setDisplay(window.__display)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  const handleThemeChange = () => {
    window.__setPreferredTheme(isDarkMode ? ThemeColor.Light : ThemeColor.Dark)
  }

  const handleDisplayChange = () => {
    window.__setPreferredDisplay(isListMode ? GridType.Grid : GridType.List)
  }

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          isLight={theme === ThemeColor.Light}
        >
          {theme === ThemeColor.Light ? (
            <LightOn onClick={handleThemeChange} />
          ) : (
            <LightOff onClick={handleThemeChange} />
          )}
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização" hideOnMobile>
          {display === GridType.List ? (
            <List onClick={handleDisplayChange} />
          ) : (
            <Grid onClick={handleDisplayChange} />
          )}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

declare global {
  interface Window {
    __setPreferredTheme: (theme: string) => void
    __theme: string
    __onThemeChange: () => void
    __setPreferredDisplay: (grid: string) => void
    __display: string
    __onDisplayChange: () => void
  }
}
