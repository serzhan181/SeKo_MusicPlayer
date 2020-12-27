import React from 'react'
import { withTheme } from 'styled-components'
import { Input } from './Search.style'

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search music'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default withTheme(Search)
