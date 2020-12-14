import React from 'react'
import s from './centerer.module.css'

export const Centerer = ({ children }) => {
  return <div className={s.centerer}>{children}</div>
}
