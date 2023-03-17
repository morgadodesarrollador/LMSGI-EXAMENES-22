import { Outlet } from 'react-router-dom';
import { videos } from '../../Components/data_videos';
import { RtgAmphitryon998 } from './AmphitryonPage/RtgAmphitryon998';
import './RtgIntegrales.css';

export const RtgIntegrales = () => {
    return(
        <section>
            <article>
                <h1>Autocaravanas Integrales</h1>
                <p>Las autocaravanas integrales tienen asientos giratorios del conductor y diferentes zonas, como la sala de estar y el dormitorio, a las que se puede acceder directamente desde la cabina del conductor. </p>
                <p>La longitud, explican, podría llegar a ser de 12 metros de largo y, en algunos casos (si supera los 3.500 kilogramos de MMA), es posible que para conducirla se necesite el carnet C. Sobre todo, lo que las diferencia del resto de autocaravanas, detallan en Caravaning K2, es que todo el conjunto de vivienda y cabina está integrado y se monta sobre un chasis, contando con la ventaja de que el espacio es único, es decir, la vivienda no está separada de la zona de conducción. </p>
            </article>
            <div id='galeriaVideos'>
                <h2>Galería</h2>
                {
                    videos.map((video) => (
                    <article className='ArticleVideo'>
                        <h1 className='videoTitulo'>{video.title}</h1>
                        <iframe width="351" height="235" 
                            src={video.url} 
                            title="titulo del video"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
                        </iframe>  
                    </article>
                ))
                }
            </div>
            {/* <Outlet/> */}
        </section>
    )
}