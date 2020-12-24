import React from 'react'
import { SearchContainer } from '../Search/index'
import { observer } from 'mobx-react-lite'
import { HeaderMain } from './Header.style'
import { withTheme } from 'styled-components'

const Header = observer(() => {
  return (
    <HeaderMain>
      <SearchContainer />
    </HeaderMain>
  )
})

export default withTheme(Header)
