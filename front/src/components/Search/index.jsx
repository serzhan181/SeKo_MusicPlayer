import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import Search from './Search.jsx'

export const SearchContainer = observer(({ audio }) => {
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    console.log(search)
    audio.setSongsOnSearch(search).then((r) => console.log(r))
  }

  return (
    <Search handleSearch={handleSearch} setSearch={setSearch} search={search} />
  )
})
