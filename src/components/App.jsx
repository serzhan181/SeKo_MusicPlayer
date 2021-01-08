import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { theme } from '../store/ThemeStore'
import styled, { ThemeProvider, withTheme } from 'styled-components'
import { audio } from '../store/MainStore'
import Header from './Header'
import { PlayerContainer } from './Player'
import { Errorpage } from './ErrorPage'
import MainContainer from './Main'

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
          <Header setTheme={setTheme} themeMode={themeMode} audio={audio} />
          <div className='container'>
            <Switch>
              <Route path='/search'>
                <MainContainer audio={audio} player={player} />
              </Route>

              <Route path='/error' component={Errorpage} />
            </Switch>
          </div>
          <PlayerContainer audio={audio} player={player} />
        </Router>
      </MainWrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  overflow: hidden;
  background-color: ${(props) => props.theme.primary};
`

const MainWrapper = withTheme(Wrapper)

export default App
