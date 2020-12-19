import { makeAutoObservable } from 'mobx'
import { darkTheme, lightTheme } from '../helpers/themeHelper'

class ThemeStore {
  themes = {
    light: lightTheme,
    dark: darkTheme,
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export const theme = new ThemeStore()
window.theme = theme
