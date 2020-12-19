import React from 'react'
import { withTheme } from 'styled-components'
import { Input } from './Search'

const Search = () => {
  return (
    <div>
      <Input type='text' placeholder='Search music' />
    </div>
  )
}

export default withTheme(Search)
