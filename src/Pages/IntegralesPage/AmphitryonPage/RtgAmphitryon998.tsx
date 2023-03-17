import './RtgAmphitryon998.css';
import A998_1 from '../../../Img/A998_T21.jpg'
import A998_2 from '../../../Img/distribucion.jpg'

export const RtgAmphitryon998 = () => {
    return(
        <section>
            <article>
                <h1>Amphitryon 998</h1>
                <p>Esos son los tres ejes de uno de los buques insignia de Benimar: el Amphitryon 998. Una autocaravana integral de 7,4 metros, con dormitorio tipo suite que permite una separación completa de estancias y cama abatible sobre cabina, que añade dos plazas de noche sin comprometer el espacio disponible; por lo que se presenta como un modelo perfecto para familias como parejas que buscan espacio y confort.</p>     
            </article>
            <div className='Amphitryon998galeria'>
                <img className='Amphitryon998img' id='A998_img1' src={A998_1} alt="" />
                <div id='Amphitryon998_agrup_img2'>
                    <h1>Integral</h1>
                    <p>Cama Central</p>
                    <img  className='Amphitryon998img' id='A998_img2' src={A998_2} alt="" />
                    <li>Benimar Amphitryon 998 Alfa</li>
                    <li>Con 4 plazas para comer, dormir y circular</li>
                    <li>Cama isla</li>
                    <li>Motor Fiat de 160CV</li>
                    <li>Cocina con horno a gas</li>
                </div>
            </div>
        </section>
    )
}