import React from 'react'
import './sdagNavBar.css';
import { Link } from 'react-router-dom';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export const SdagNavBar = () => {
  return (
    <>
        <nav>
            <div id='Home'>
              <Link to='/Home'>Autocaravanas</Link>
            </div>
            <Link to='/Integrales'>Integrales</Link>
            <Link to='/Amphityron998'> <AirportShuttleIcon/>Amphityron 998</Link>
            <Link to='/RapidoM96'> <AirportShuttleIcon/>Rapido M96</Link>
            <Link to='/Perfiladas'>Perfiladas</Link>
            <Link to='/Mileo297'> <AirportShuttleIcon/>Mileo297</Link>
        </nav>
    </>
  )
}
