import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ListItemIcon from '@mui/material/ListItemIcon';

export const PfpgnavBar = () => {
  return (
    <>
      {/* <nav className='menu'>
        <Link to='/ '>Autocaravanas</Link>
        <Link to='integrales'>Integrales</Link>
        <Link to='integral1'>Amphitryon 998</Link>
        <Link to='integral2'>Rápido m96</Link>
        <Link to='perfiladas'>Perfiladas</Link>
        <Link to='perfiladas1'>Mileo 297</Link>
      </nav> */}
      <nav aria-label='menu principal' className='menu'>
        <Link className='menu1' to='/ '>Autocaravanas</Link>
       <List className='menu2'>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/integrales'>
              <ListItemText primary="Integrales"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/integral1'>
            <ListItemIcon><AirportShuttleIcon/></ListItemIcon>
              <ListItemText primary="Amphtryon"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/integral2'>
            <ListItemIcon><AirportShuttleIcon/></ListItemIcon>
              <ListItemText primary="Rápido M96"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/perfiladas'>
              <ListItemText primary="Perfiladas"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/perfiladas1'>
            <ListItemIcon><AirportShuttleIcon/></ListItemIcon>
              <ListItemText primary="Mileo297"/>
            </ListItemButton>
          </ListItem>
       </List>
       

      </nav>
    </>
  )
}



{/* <code>
            <nav aria-label="main mailbox folders">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to='/integrales'>
                        <ListItemText primary="Integrales" />
                    </ListItemButton>
                </ListItem>
        </code>

        <nav aria-label='menu principal' className='menu2'>
      <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to='/integrales'>
                        <ListItemText primary="Integrales" />
                    </ListItemButton>
                </ListItem>
      </nav> */}