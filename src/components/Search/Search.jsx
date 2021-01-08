import React from 'react'
import { withTheme } from 'styled-components'
import { Input } from './Search.style'

const Search = ({ searchQuery, setSearch }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          window.location.replace(`/search?q=${searchQuery}`)
        }}
      >
        <Input
          value={searchQuery}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='Search music'
        />
      </form>
    </div>
  )
}

export default withTheme(Search)
