import React from 'react'
import { Link } from 'react-router-dom'
import './servicios.css'
export const NavBar = () => {
  return (
    <nav>
        <Link to='web'>Servicios Web</Link>
        <Link to='seguridad'>Seguridad Informática</Link>
        <Link to='Mantenimiento'>Mantenimiento Informático</Link>
        <Link to='cloud'>Automatización en Cloud</Link>
    </nav>
  )
}
