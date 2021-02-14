import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { theme } from '../store/ThemeStore'
import styled, { ThemeProvider, withTheme } from 'styled-components'
import Header from './Header'
import { PlayerContainer } from './Player'
import { Errorpage } from './ErrorPage'
import Main from './Main'

const App = () => {
  const player = useRef(null)

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
          <Header setTheme={setTheme} themeMode={themeMode} />
          <div className='container'>
            <Switch>
              <Route path='/search'>
                <Main player={player} />
              </Route>

              <Route path='/error' component={Errorpage} />
            </Switch>
          </div>
          <PlayerContainer player={player} />
        </Router>
      </MainWrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  body {
    width: 100%;
    overflow: hidden;
    background-color: ${(props) => props.theme.primary};
  }
`

const MainWrapper = withTheme(Wrapper)

export default App
