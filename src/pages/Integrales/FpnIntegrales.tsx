import React from 'react'
import './integral.css'
import Grid from '@mui/material/Grid';
import { videos } from '../../data/data_videos'


export const FpnIntegralesPage = () => {
  return (
    <section id='integrales'>
      <h1>Autocaravanas Integrales</h1>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Las autocaravanas integrales tienen asientos giratorios del conductor y diferentes zonas, como la sala de estar y el dormitorio, a las que se puede acceder directamente desde la cabina del conductor. </p>
          </Grid>
          <Grid item xs={12}>
            <p>La longitud, explican, podría llegar a ser de 12 metros de largo y, en algunos casos (si supera los 3.500 kilogramos de MMA), es posible que para conducirla se necesite el carnet C. Sobre todo, lo que las diferencia del resto de autocaravanas, detallan en Caravaning K2, es que todo el conjunto de vivienda y cabina está integrado y se monta sobre un chasis, contando con la ventaja de que el espacio es único, es decir, la vivienda no está separada de la zona de conducción. </p>
          </Grid>
          <Grid item xs={12}><h1 id='galeria'>Galeria</h1></Grid>
          {videos.map((item) => (
            <Grid item xs={4}>
              <h4>{item.title}</h4>
              <iframe width="351" height="235"
                src={item.url}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              >
              </iframe>
            </Grid>
          ))}

        </Grid>


      </section>
        )
}
