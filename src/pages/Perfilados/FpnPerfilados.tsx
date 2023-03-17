import React from 'react'
import './perfilado.css'
import Grid from '@mui/material/Grid';

export const FpnPerfiladosPage = () => {
    return (
        <section id='perfilados'>
            <h1>Autocaravanas Perfiladas</h1>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <p>Las autocaravanas perfiladas se caracterizan principalmente por su versatilidad, ya que estos vehículos  tienen  diferentes dimensiones de altura y longitud, desde los 6 metros de longitud hasta los casi 8 metros que se adaptan al número de personas que viajen, desde una pareja hasta un máximo de cinco o hasta seis personas.</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Las autocaravanas perfiladas o también llamadas semi-integrales a su vez se caracterizan por un diseño más aerodinámico que el resto de autocaravanas como las autocaravanas capuchinas, con más estabilidad, un consumo de combustible menor y una más fácil conducción.</p>
                </Grid>
            </Grid>
        </section>
    )
}
