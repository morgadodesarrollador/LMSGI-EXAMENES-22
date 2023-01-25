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
import { HeroesList } from './components/heroeslist';
const App = () => {
  let titulo = "Los superheroes";
  return(
    <>
      <h1 className='titulo'> {titulo} </h1>
      <HeroesList heroes= {heroes} />
    </>
  )
}

export default App;