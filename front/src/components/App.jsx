import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { theme } from '../store/ThemeStore'
import styled, { ThemeProvider, withTheme } from 'styled-components'
import { audio } from '../store/MainStore'
import Header from './Header'
import { PlayerContainer } from './Player'
import MainContainer from './Main'

const App = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeMode') || 'light'
  )

  const setTheme = () => {
    setThemeMode((themeMode) => {
      return themeMode === 'light' ? 'dark' : 'light'
    })
  }

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode)
  }, [themeMode])

  return (
    <ThemeProvider theme={theme.themes[themeMode]}>
      <MainWrapper>
        <Router>
          <Header setTheme={setTheme} themeMode={themeMode} audio={audio} />
          <div className='container'>
            <Switch>
              <Route path='/search'>
                <MainContainer audio={audio} />
              </Route>
            </Switch>
          </div>
          <PlayerContainer audio={audio} />
        </Router>
      </MainWrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.primary};
`

const MainWrapper = withTheme(Wrapper)

export default App
