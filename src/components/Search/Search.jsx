import React from 'react'
import { withTheme } from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Input } from './Search.style'

const Search = ({ searchQuery, setSearch }) => {
  const history = useHistory()

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          history.push(`/search?q=${searchQuery}`)
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
