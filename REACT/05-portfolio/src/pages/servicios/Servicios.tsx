import React from 'react'
import { Outlet } from 'react-router-dom'
import './servicios.css'


export const ServiciosPage = () => {
  return (
    <>
      <h2>ServiciosPage</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sunt animi impedit officiis debitis culpa, libero ipsa hic. Architecto mollitia reiciendis itaque ipsam eius eligendi iusto tempore ex error culpa!</p>
      <Outlet/>
    </>
  )
}
