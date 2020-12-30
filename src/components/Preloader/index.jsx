import React from 'react'

export const Preloader = () => {
  return (
    <div className='lds-ring-centerer'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
