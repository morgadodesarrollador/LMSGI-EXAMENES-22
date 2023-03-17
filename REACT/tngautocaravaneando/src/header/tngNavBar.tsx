import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';



export const NavBar = () => {
  return (

    <nav className='navppal'>
      <Link to='autocaravanas' className='caravanas'>
          Autocaravanas
      </Link>
      <Link to='/integrales' className='integrales'>
          Integrales
      </Link>
      
      <Link to='/amfitrion'>
        <Button variant='outlined' startIcon={<AirportShuttleIcon />}>
          Amphitryon 998
        </Button>
      </Link>
      <Link to='/rapido'>
        <Button variant='outlined' startIcon={<AirportShuttleIcon />}>
          Rápido M96
        </Button>
      </Link>
      <Link to='/perfiladas' className='integrales'>
          Perfiladas
      </Link>
      <Link to='/mileo'>
        <Button variant='outlined' startIcon={<AirportShuttleIcon />}>
          Mileo97
        </Button>
      </Link>
    </nav>
  )
}


export default NavBar;