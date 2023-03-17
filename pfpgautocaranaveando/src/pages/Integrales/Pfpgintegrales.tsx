import React from 'react'
import { videos } from '../../data/Pfpgdata'

export const Pfpgintegrales = () => {
  return (
    <>
        <section className='integrales'>
            <h2>Autocaravanas Integrales</h2>
            <p>Las autocaravanas integrales tienen asientos giratorios del conductor y diferentes zonas, como la sala de estar y el dormitorio, a las que se puede acceder directamente desde la cabina del conductor. </p>
            <p>La longitud, explican, podría llegar a ser de 12 metros de largo y, en algunos casos (si supera los 3.500 kilogramos de MMA), es posible que para conducirla se necesite el carnet C. Sobre todo, lo que las diferencia del resto de autocaravanas, detallan en Caravaning K2, es que todo el conjunto de vivienda y cabina está integrado y se monta sobre un chasis, contando con la ventaja de que el espacio es único, es decir, la vivienda no está separada de la zona de conducción. </p>
            <h1>Galería</h1>
          <div className='videos'>
            {videos.map((video) => (
              <article>
                <h5>{video.title}</h5>
                <iframe width="450" height="385" 
                src={video.url} 
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >
              </iframe>
              </article>
              
              
            ))}

          </div>
        </section>
        
    </>
        
  )
}
