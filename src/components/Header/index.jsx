import React from 'react'
import Search from '../Search/index'
import { observer } from 'mobx-react-lite'
import { HeaderMain } from './Header'
import { withTheme } from 'styled-components'

const Header = observer(() => {
  return (
    <HeaderMain>
      <Search />
    </HeaderMain>
  )
})

export default withTheme(Header)
