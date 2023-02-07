import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav>
      <Link to='/'> Home </Link>
      <Link to='servicios'> Servicios </Link>
      <Link to='trabajos'>Trabajos</Link>
    </nav> 
  )
}
