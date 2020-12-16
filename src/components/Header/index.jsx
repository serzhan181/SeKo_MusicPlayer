import React from 'react'
import { Search } from '../Search/index'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderMain>
      <Search />
    </HeaderMain>
  )
}

const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: rgb(19, 19, 19);
  border-bottom: 2px solid black;
`
