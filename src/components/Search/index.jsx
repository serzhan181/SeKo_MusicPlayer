import React, { useState } from 'react'
import styled from 'styled-components'

export const Search = () => {
  return (
    <div>
      <Input type='text' placeholder='Search music' />
    </div>
  )
}

const Input = styled.input`
  width: 500px;
  height: 30px;

  font-size: 1.3rem;
  padding: 0.2rem;
  color: #333333;

  border: 2px solid black;
  outline: none;
`
