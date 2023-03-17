import React from 'react'
import { SdagNavBar } from '../commons/sdagNavBar'
import { Outlet } from 'react-router-dom'

export const SdagHeader = () => {
  return (
    <div id='header'>
      <SdagNavBar/>
    </div>
  )
}
