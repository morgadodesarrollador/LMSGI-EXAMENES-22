import React from 'react'
import { NavLink } from 'react-router-dom'

export const JjfHeader = () => {
  return (
    <header className='header'>
      <nav>
        <NavLink id='title' to={'/'}>Autocaravanas</NavLink>
        <NavLink className="secs" to={'int'}>Integrales</NavLink>
        <NavLink to={'anfi'}>Amphitryon</NavLink>
        <NavLink to={'fast'}>Rapido M96</NavLink>        
        <NavLink className="secs" to={'perf'}>Perfiladas</NavLink>
        <NavLink to={'perf'}>Mileo297</NavLink>
        <NavLink to={'mil'}>Mileo297</NavLink>

      </nav>
    </header>
  )
}
