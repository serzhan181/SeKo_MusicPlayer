import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withTheme } from 'styled-components'
import { Input } from './Search.style'

const Search = ({ searchQuery, setSearch }) => {
  return (
    <div>
      <Input
        value={searchQuery}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search music'
      />
      <button
        style={{ backgroundColor: 'beige' }}
        onClick={() => console.log(searchQuery)}
      >
        <Link to={`/search?q=${searchQuery}`}>Search</Link>
      </button>
    </div>
  )
}

export default withTheme(Search)
