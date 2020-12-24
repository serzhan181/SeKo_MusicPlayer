import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from '../store/ThemeStore'
import styled, { ThemeProvider, withTheme } from 'styled-components'
import { audio } from '../store/MainStore'
import Header from './Header'
import { PlayerContainer } from './Player'
import Main from './Main'

const App = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeMode') || 'light'
  )

  const onThemeChange = () => {
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
          <Header />
          <button onClick={onThemeChange}>Change theme</button>
          <div className='container'>
            <Main audio={audio} />
          </div>
          <PlayerContainer audio={audio} />
        </Router>
      </MainWrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.primary};
`

const MainWrapper = withTheme(Wrapper)

export default App
