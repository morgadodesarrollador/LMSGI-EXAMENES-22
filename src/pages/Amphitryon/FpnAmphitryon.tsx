import * as React from 'react';
import './Amphitryon.css'
import Grid from '@mui/material/Grid';
import int from '../../img/A998_T21.jpg'
import planos from '../../img/distribucion.jpg'

export const FpnAmphitryonPage = () => {
    return (
        <section id='amphi'>
            <h1>Amphitryon 988</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <p>Esos son los tres ejes de uno de los buques insignia de Benimar: el
                        Amphitryon 998. Una autocaravana integral de 7,4 metros, con dormit
                        orio tipo suite que permite una separación completa de estancias y cama
                        abatible sobre cabina, que añade dos plazas de noche sin comprometer el es
                        pacio disponible; por lo que se presenta como un modelo perfecto para famil
                        ias como parejas que buscan espacio y confort.</p>
                </Grid>
                <Grid item xs={6}>
                    <figure>
                        <img src={int} alt="" />
                    </figure>
                </Grid>
                <Grid item xs={6}>
                    <div className='planos'>
                        <h1>Integral</h1>
                        <h5>Cama central</h5>
                        <figure id='planosfoto'>
                            <img src={planos} />
                        </figure>
                        <li>Benimar Amphitryon 998 Alfa</li>
                        <li>Con 4 plazas para comer, dormir y circular</li>
                        <li>Cama isla</li>
                        <li>Motor Fiat de 160CV</li>
                        <li>Cocina con horno a gas</li>
                    </div>
                </Grid>

            </Grid>
        </section>
    )
}



