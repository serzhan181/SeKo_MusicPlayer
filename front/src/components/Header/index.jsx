import React from 'react'
import { SearchContainer } from '../Search/index'
import { observer } from 'mobx-react-lite'
import { HeaderMain, ModeIcon } from './Header.style'
import { withTheme } from 'styled-components'

const Header = observer(({ setTheme, themeMode, audio }) => {
  return (
    <HeaderMain>
      <ModeIcon
        onClick={setTheme}
        src={`assets/${themeMode === 'light' ? 'moon' : 'sun'}.svg`}
        alt='change theme'
      />
      <SearchContainer audio={audio} />
    </HeaderMain>
  )
})

export default withTheme(Header)
