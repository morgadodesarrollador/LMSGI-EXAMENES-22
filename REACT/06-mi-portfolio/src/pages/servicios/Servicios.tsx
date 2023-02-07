import React from 'react'
import { Outlet } from 'react-router-dom'

export const ServiciosPage = () => {
  return (
    <>
        <h2>Sección Servicios</h2>
        <hr/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius ipsa similique quidem necessitatibus amet corporis sint quos iusto, deserunt minima illo cumque consequuntur omnis, assumenda quae doloribus, tempore quas?</p>
        <Outlet/>
    </>
  )
}
