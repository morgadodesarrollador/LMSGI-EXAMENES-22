import React from 'react'
import Amphy1 from '../../recursos/amphy1.jpg'
import Amphy2 from '../../recursos/amphy2.jpg'


export const Pfpgintegral1 = () => {
  return (
    <>
      <section className='amphy'>
      <h1>Amphytryon 998</h1>
      <p>Esos son los tres ejes de uno de los buques insignia de Benimar: el Amphitryon 998. Una autocaravana integral de 7,4 metros, con dormitorio tipo suite que permite una separación completa de estancias y cama abatible sobre cabina, que añade dos plazas de noche sin comprometer el espacio disponible; por lo que se presenta como un modelo perfecto para familias como parejas que buscan espacio y confort.</p>
      <article>
        <figure className='img1'>
          <img src={Amphy2}></img>
        </figure>
        <figure className='img2'>
        <h2>Integral</h2>
          <span>Cama Central</span>
        <img src={Amphy1}></img>
        <li>Benimar Amphitryon 998 Alfa</li>
        <li>Con 4 plazas para comer, dormir y circular</li>
        <li>Cama isla</li>
        <li>Motor Fiat de 160CV</li>
        <li>Cocina con horno a gas</li>
        </figure>
      </article>
      
      </section>
    </>
  )
}
