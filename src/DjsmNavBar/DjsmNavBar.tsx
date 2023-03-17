import React from 'react'
import './DjsmNavBar.css';
import { Link } from 'react-router-dom';
// import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export const DjsmNavBar = () => {
  return (
    <>
      <nav>

        <Link to='/Home'>Autocaravanas</Link>
        <Link to='Integrales'>Integrales</Link>
        <Link to='Amphityron998'> Amphityron 998</Link>
        <Link to='RapidoM96'> Rapido M96</Link>
        <Link to='Perfiladas'>Perfiladas</Link>
        <Link to='Mileo297'> Mileo297</Link>
      </nav>
    </>
  )
}
