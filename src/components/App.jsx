import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { audio } from '../store/Main'
import { Header } from './Header'
import { Player } from './Player'
import { Main } from './Main'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='container'>
          <Main audio={audio} />
        </div>
        <Player audio={audio} />
      </Router>
    </div>
  )
}

export default App
