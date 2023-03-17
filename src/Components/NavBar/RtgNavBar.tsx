import './RtgNavBar.css';
import { Link } from "react-router-dom";
import { faCaravan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RtgNavBar = () => {
    return(
        <nav id="HeaderNavbar">
            <Link id='TituloNavBar' to='/'>Autocaravanas</Link>
            <Link className='AgrupacionNavBar' to='Integrales'>Integrales</Link>
            <Link to='Integrales/Amphitryon998'><FontAwesomeIcon icon={faCaravan}/>Amphitryon 998</Link>
            <Link to='Integrales/RapidoM96'><FontAwesomeIcon icon={faCaravan}/>Rápido M96</Link>
            <Link className='AgrupacionNavBar' to='Perfiladas'>Perfiladas</Link>
            <Link to='Perfiladas/Mileo297'><FontAwesomeIcon icon={faCaravan}/>Mileo297</Link>
        </nav>
    )
}