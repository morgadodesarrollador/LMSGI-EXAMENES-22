import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './header/tngNavBar';
import { AutocaravanasPage } from './pages/autocaravanas/tngAutocaravanas';
import { IntegralesPage } from './pages/integrales/tngIntegrales';
import { AmfitrionPage } from './pages/amfitrion/tngAmfitrion';
import { RapidoPage } from './pages/rapido/tngRapido';
import { PerfiladasPage } from './pages/perfiladas/tngPerfiladas';
import { Route, Routes } from 'react-router-dom';
import { MileoPage } from './pages/mileo/tngMileo';
import { Main } from './main/tngMain';


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>


      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/autocaravanas' element={<AutocaravanasPage />} />
          <Route path='/integrales' element={<IntegralesPage />} />
          <Route path='/amfitrion' element={<AmfitrionPage />} />
          <Route path='/rapido' element={<RapidoPage />} />
          <Route path='/perfiladas' element={<PerfiladasPage />} />
          <Route path='/mileo' element={<MileoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
