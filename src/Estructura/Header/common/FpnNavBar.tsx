import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export const FpnNavBar = () => {
  return (
    <nav aria-label="main mailbox folders" id='ln1'>

      {/* <ListItem disablePadding> <ListItemButton component={Link} to='/' >  <ListItemText primary="Autocaravanas" />  </ListItemButton> </ListItem> */}
      <Link to='/' className='linkppal'>Autocaravanas</Link>
      <ListItem disablePadding> <ListItemButton component={Link} to='/integrales'> <ListItemText primary="Integrales" /> </ListItemButton> </ListItem>
      <ListItem disablePadding> <ListItemButton component={Link} to='/amphitryon'> <ListItemIcon> <AirportShuttleIcon /> </ListItemIcon> <ListItemText primary="Amphitryon 998" /> </ListItemButton> </ListItem>
      <ListItem disablePadding> <ListItemButton component={Link} to='/rapido'> <ListItemIcon> <AirportShuttleIcon /> </ListItemIcon><ListItemText primary="Rapido M96" /> </ListItemButton> </ListItem>
      <ListItem disablePadding> <ListItemButton component={Link} to='/perfiladas'> <ListItemText primary="Perfiladas" /> </ListItemButton> </ListItem>
      <ListItem disablePadding> <ListItemButton component={Link} to='/mileo'> <ListItemIcon> <AirportShuttleIcon /> </ListItemIcon> <ListItemText primary="Mileo297" /> </ListItemButton> </ListItem>

    </nav>
  )
}
