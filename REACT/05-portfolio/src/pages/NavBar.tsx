import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'


export const NavBar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='search'>Search</Link>
        <Link to='servicios'>Servicios</Link>
        <Link to='mistrabajos'>Trabajos</Link>
    </nav>
  )
}
