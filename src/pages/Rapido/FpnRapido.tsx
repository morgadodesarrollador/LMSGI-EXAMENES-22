import React from 'react'
import './rapido.css'
import Grid from '@mui/material/Grid';
import m96 from '../../img/m96.png'
export const FpnRapidoPage = () => {
    return (
        <section id='rapido'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Modelo rapido M96</h1>
                    <p>Uno de los grandes retos del mundo del
                        autocaravaning ha sido conseguir un vehículo
                        con el que poder disfrutar de viajes por carretera
                        como si estuvieras en tu propia casa. Si bien es
                        cierto que toda la gama Benimar está diseñada con
                        todo lujo de detalles para viajar cómodamente,
                        nuestra gama Amphitryon es la máxima expresión de
                        amplitud y confort en una vivienda sobre ruedas.
                        Dicha gama cuenta con las mejores autocaravanas
                        globales del mercado, para que no tengas que prescindir
                        de nada durante tus aventuras.</p>
                </Grid>
                <Grid item xs={12}>
                    <figure>
                        <img src={m96} />
                    </figure>
                </Grid>
            </Grid>

        </section>
    )
}
