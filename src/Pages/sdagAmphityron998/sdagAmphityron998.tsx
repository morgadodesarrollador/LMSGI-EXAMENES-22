import React from 'react'
import Amphityron from '../../img/Amphityron.jpg'
import Amphityron2 from '../../img/Amphityron2.jpg'
import './sdagAmphityron998.css'

export const SdagAmphityron998Page = () => {
  return (
    <section id='amphityron'>
        <h1>Amphityron 998</h1>
        <p>Esos son los tres ejes de uno de los buques insignia de Benimar: el Amphitryon 998. Una autocaravana integral de 7,4 metros, con dormitorio tipo suite que permite una separación completa de estancias y cama abatible sobre cabina, que añade dos plazas de noche sin comprometer el espacio disponible; por lo que se presenta como un modelo perfecto para familias como parejas que buscan espacio y confort.</p>
        <div id='integral'>
          <img src={Amphityron}/>
        <article>
        <h1>Integral</h1>
          <img src={Amphityron2}/>
          <li>Benimar Amphitryon 998 Alfa</li>
          <li>Con 4 plazas para comer, dormir y circular</li>
          <li>Cama isla</li>
          <li>Motor Fiat de 160CV</li>
          <li>Cocina con horno a gas</li>
        </article>
        </div>
    </section>
  )
}
