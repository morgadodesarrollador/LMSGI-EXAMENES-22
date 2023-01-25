import react from 'react'
import { heroes } from '../data/heroes';
import './heroes.css';


// props = {name:'Morgado'} --> prop.name

export const HeroesList = (props) => {
    console.log(heroes);
    return(
        <>
            <table className='tabla_heroes'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Nombre</td>
                        <td>Compañia</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        heroes.map((heroe) => {
                            console.log(heroe);
                            return (
                                <tr>
                                    <td> {heroe.id} </td>
                                    <td> {heroe.Nombre} </td>
                                    <td> {heroe.ownner} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}