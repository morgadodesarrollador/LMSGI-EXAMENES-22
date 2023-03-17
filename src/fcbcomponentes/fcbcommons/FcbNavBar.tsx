import React from 'react';
import {Link} from 'react-router-dom';
 import './fcbnavbar.css';

export const NavBar = () => {

return(

    <section className='navegador'>

        <div>

            <nav>

                    <Link  className='primero' to='home'> Autocaravanas </Link>
                    <Link to='integrales'> Integrales </Link>
                    <Link to='a998'> Amphitryon 998 </Link>
                    <Link to='m96'> Rápido M96</Link>
                    <Link to='perfiladas'> Perfiladas</Link>
                    <Link to='m297'> Mileo297</Link>

            </nav>

        </div>

    </section>

)

}