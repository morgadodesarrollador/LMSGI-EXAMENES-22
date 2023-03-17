import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FpnHeader } from './Estructura/Header/FpnHeader';
import { FpnMain } from './Estructura/Main/FpnMain';
import { FpnAutocaravanasPage } from './pages/Autocaravanas/FpnAutocaravanas';
import { FpnAmphitryonPage } from './pages/Amphitryon/FpnAmphitryon';
import { FpnRapidoPage } from './pages/Rapido/FpnRapido';
import { FpnPerfiladosPage } from './pages/Perfilados/FpnPerfilados';
import { FpnIntegralesPage } from './pages/Integrales/FpnIntegrales';
import { FpnMileoPage } from './pages/Mileo/FpnMileo';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <FpnHeader />
    <main>
      <Routes>
      <Route path='/' element={<FpnMain />}>
      <Route path='/' element={<FpnAutocaravanasPage />}/>
      <Route path='/integrales' element={<FpnIntegralesPage />}/>
      <Route path='/amphitryon' element={<FpnAmphitryonPage />}/>
      <Route path='/rapido' element={<FpnRapidoPage />}/>
      <Route path='/perfiladas' element={<FpnPerfiladosPage />}/>
      <Route path='/mileo' element={<FpnMileoPage />}/>
      </Route>
      </Routes>
    </main>
    </>
  );
}

export default App;
