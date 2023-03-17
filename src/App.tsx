import React from 'react';
import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import { NavBar } from './fcbcomponentes/fcbcommons/FcbNavBar';
import { Main } from './fcbcomponentes/fcbpages/fcbmain/FcbMain';
import { Integrales } from './fcbcomponentes/fcbpages/fcbintegrales/FcbIntegrales';
import { Amphitryon } from './fcbcomponentes/fcbpages/fcbamphitryon998/FcbAmphitryon';
import { Rapido } from './fcbcomponentes/fcbpages/fcbrapido/FcbRapido';
import { Perfiladas } from './fcbcomponentes/fcbpages/fcbperfiladas/FcbPerfiladas';
import { Mileo } from './fcbcomponentes/fcbpages/fcbmileo/FcbMileo';
import { HomePage } from './fcbcomponentes/fcbpages/fcbhomepage/FcbMain';


function App() {
  return (

      <>
      
          <header>


            <NavBar />
          </header>

          <Routes>

              <Route path='/' element= {<Main/>} >

              <Route path='home' element={<HomePage/>} />
                <Route path='integrales' element={<Integrales/>} />
                <Route path='a998' element={<Amphitryon/>} />
                <Route path='m96' element={<Rapido/>} />
                <Route path='perfiladas' element={<Perfiladas/>} />
                <Route path='m297' element={<Mileo/>} />

              </Route>

          </Routes>
      
      </>


  );
}

export default App;
