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
import { heroes } from './data/heroes';
const App = () => {
  console.log(heroes);
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
    </>
  )
}

export default App;