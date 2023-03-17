import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { RtgPerfiladas } from './Pages/PerfiladasPage/RtgPerfiladas';
import { RtgRapidoM96 } from './Pages/IntegralesPage/RapidoM96Page/RtgRapidoM96';
import { RtgMileo297 } from './Pages/PerfiladasPage/Mileo297Page/RtgMileo297';
import { RtgAmphitryon998 } from './Pages/IntegralesPage/AmphitryonPage/RtgAmphitryon998';
import { RtgIntegrales } from './Pages/IntegralesPage/RtgIntegrales';
import { RtgMain } from './Pages/Main/RtgMain';
import { RtgNavBar } from './Components/NavBar/RtgNavBar';
import { RtgHomePage } from './Pages/HomePage/RtgHomePage';

function App() {
  return (
    <>
      <RtgNavBar/>
      <Routes>
        <Route path='/' element={<RtgMain/>}>
          <Route  path='/' element={<RtgHomePage/>}/>
          <Route path='Integrales' element={<RtgIntegrales/>}/>
          <Route path='Integrales/Amphitryon998' element={<RtgAmphitryon998/>}/>
          <Route path='Integrales/RapidoM96' element={<RtgRapidoM96/>}/>
          <Route path='Perfiladas' element={<RtgPerfiladas/>}/>
          <Route path='Perfiladas/Mileo297' element={<RtgMileo297/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
