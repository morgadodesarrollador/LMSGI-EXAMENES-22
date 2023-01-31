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





// import './App.css';
// import { heroes, lenguajes } from './data/heroes';
// import { HeroesList } from './components/heroeslist';
import Header from './components/estructura/header/Header';
import Main from './components/estructura/main/Main';
import Footer from './components/estructura/footer/Footer';
import { Sociales } from './components/estructura/footer/sociales/Sociales';
import { Mapa } from './components/estructura/footer/mapa/Mapa';
const App = () => {
  let titulo = "Los superheroes";
  return(
    <>

      <Header></Header>
      <Main></Main>
      <Footer>
        <Sociales></Sociales>
        <Mapa></Mapa>
      </Footer>




      {/* <h1 className='titulo'> {titulo} </h1>
      <HeroesList heroes= {heroes} /> */}
    </>
  )
}

export default App;