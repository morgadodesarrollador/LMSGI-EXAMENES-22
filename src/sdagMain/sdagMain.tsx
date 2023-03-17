import React from 'react'
import { Outlet } from 'react-router-dom'

export const SdagMain = () => {
  return (
    <>
      <section>
        <Outlet/>
      </section>
    </>
  )
}