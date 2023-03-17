import React from 'react'
import './Djsmintegral.css'

const videos = [
    {
        title: 'Fabricacion',
        url: 'https://www.youtube.com/embed/P_ToHAZZsBM',
    },
    {
        title: 'Amphitryon 940',
        url: 'https://www.youtube.com/embed/P_ToHAZZsBM',
    },
    {
        title: 'Amphitryon 957',
        url: 'https://www.youtube.com/embed/K28SgGe8cEI',
    },
    {
        title: 'Amphitryon 967',
        url: 'https://www.youtube.com/embed/e4aufoq39PA',
    },
    {
        title: 'Amphitryon 997',
        url: 'https://www.youtube.com/embed/zE2nqNVAVxg',
    },
    {
        title: 'Mileo 242',
        url: 'https://www.youtube.com/embed/RhHC9iJ_Dqc',
    },


]

export const Djsmintegrales = () => {
return(
<section id='integral'>
        <h1>Autocaravanas Integrales</h1>
        <p>Las autocaravanas integrales tienen asientos giratorios del conductor y diferentes zonas, como la sala de estar y el dormitorio, a las que se puede acceder directamente desde la cabina del conductor.</p>
        <h2>Galeria</h2>
        <div id='video'>
            {videos.map((video) => (
              <iframe width="300" height="235" 
                src={video.url} 
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
              </iframe>
            ))}
      </div>
</section>
)
}
       