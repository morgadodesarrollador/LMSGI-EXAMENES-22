// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

// <> </> --> FRAGMENTO -- Mecanismo para agregar varias etiquetas HTML.





import './App.css';
import { heroes, lenguajes } from './data/heroes';
const App = () => {
  console.log(heroes, lenguajes);
  console.log('Hola Mundo desde React');
  let titulo = "PcComponentes"
  return (
    
    <>
      <h1 className='titulo'>
      {titulo}
      </h1>
      <ul>
        {
          heroes.map( (heroe) => {
            return(
              <li> { heroe.Nombre } </li>
            )
          })
        }
      </ul>
      <table className='tabla1'>
        <tr className='tr1'>
          <td>COD</td>
          <td>NOMBRE</td>
          <td>LADO</td>
        </tr>
        {
          lenguajes.map( (lenguaje) => {
            return(
              <>
              <tr className='tr2'>
                <td> {lenguaje.cod} </td>
                <td> {lenguaje.Nombre} </td>
                <td> {lenguaje.lado} </td>
              </tr>
              </>
            )
          })
        }
      </table>
    </>
  )
}

export default App;