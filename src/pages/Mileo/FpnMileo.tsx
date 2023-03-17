import React from 'react'
import './mileo.css'
import mileofoto from '../../img/mileo.jpeg'
import Grid from '@mui/material/Grid';

export const FpnMileoPage = () => {
    return (
        <section id='mileo'>
            <h1>Modelo Mileo 297</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <p>Uno de los grandes retos del mundo del autocaravaning ha sido conseguir un vehículo con el que poder disfrutar de viajes por carretera como si estuvieras en tu propia casa. Si bien es cierto que toda la gama Benimar está diseñada con todo lujo de detalles para viajar cómodamente, nuestra gama Amphitryon es la máxima expresión de amplitud y confort en una vivienda sobre ruedas. Dicha gama cuenta con las mejores autocaravanas globales del mercado, para que no tengas que prescindir de nada durante tus aventuras.</p>
                </Grid>
                <Grid item xs={9}>
                    <figure>
                        <img src={mileofoto} />
                    </figure>
                </Grid>
            </Grid>
        </section>
    )
}
