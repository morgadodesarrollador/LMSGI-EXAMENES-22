import React from 'react';
import a1 from '../../../imagenes/amphitryon/a1.jpg';
import a2 from '../../../imagenes/amphitryon/a2.jpg';
// import './fcbamp.css';

export const Amphitryon = () => {

    return(

        <section className='amp'>

            {/* <div className='contenedor'> */}

                <h2>Amphitryon 998</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur hic provident at, non veniam sunt eum rerum. Assumenda, reprehenderit? Expedita aliquam distinctio dolore recusandae ratione quod soluta debitis alias!
                Esse voluptate dolorum illum explicabo error aliquid earum, qui a deserunt quidem tenetur autem ad corporis quam tempore debitis atque corrupti officiis voluptatum mollitia eaque illo odio! Dolorem, architecto omnis.
                Deleniti mollitia praesentium sit consectetur eligendi dolorem aliquid modi asperiores aliquam in? Sunt tempora doloribus impedit amet maxime recusandae, illum accusantium cupiditate ipsum porro quibusdam, eligendi dolores iste unde obcaecati.</p>

            {/* </div> */}



            <div className='img'>

                <figure>
                    <img src={a1}/>
                </figure>

                <figure>
                    <img src={a2} />
                </figure>

            </div>


        </section>
    )

}