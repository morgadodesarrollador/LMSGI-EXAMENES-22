import React from 'react'
import foto1 from './../../img/amphitryon/foto1.jpg'
import foto13 from '../../img/amphitryon/foto2.jpg'
import './Djsmanphy.css'
export const DjsmAmphy = () => {
    return (
        <main>
            <h1>Amphitryon 998</h1>
            <p>Esos son los tres ejes de uno de los buques insignia de Benimar: el Amphitryon 998. Una autocaravana integral de 7,4 metros, con dormitorio tipo suite que permite una separación completa de estancias y cama abatible sobre cabina, que añade dos plazas de noche sin comprometer el espacio disponible; por lo que se presenta como un modelo perfecto para familias como parejas que buscan espacio y confort.</p>
        <div className='foto'>
            <figure>
                <img src={foto1}  />
            </figure>

            <figure id='segunda'>
                <h4>Integral</h4>
                <span>Cama central</span>
                <img src={foto13}  />
                <li>Benimar Amphitryon 998 Alfa</li>
                <li>Con 4 plazas para comer, dormir y circular</li>
                <li>Cama isla</li>
                <li>Motor Fiat de 160CV</li>
                <li>Cocina con horno a gas</li>

            </figure>
            
           
        </div>
        </main>
    )
}