import React from 'react'
import './amfitrion.css'
import fotos from '../../img/amphitryon/A998_T21.jpg'
import fotos2 from '../../img/amphitryon/distribucion.jpg'


export const AmfitrionPage = () => {
  return (
    <>
      <h1>Amphytrion 998</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic expedita illo porro cum optio excepturi reiciendis commodi tenetur officiis nam harum iste molestias numquam temporibus id, dolore, eius dolores quis.</p>
      <section className='fotos'>
        <img src={fotos} alt="" />
        <article className='integral_foto'>
          <h3>Integral</h3>
          <span>Cama central</span>
          <figure><img src={fotos2} alt="" /></figure>
          <li>Benimar Amphitryon 998 Alfa</li>
          <li>Con 4 plazas para comer, dormir y circular</li>
          <li>Cama isla</li>
          <li>Motor Fiat de 160CV</li>
          <li>Cocina con horno a gas</li>
        </article>
      </section>
    </>
  )
}
