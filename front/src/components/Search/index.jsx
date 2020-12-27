import React, { useState } from 'react'
import Search from './Search.jsx'

export const SearchContainer = () => {
  const [search, setSearch] = useState('')

  return <Search setSearch={setSearch} searchQuery={search} />
}
