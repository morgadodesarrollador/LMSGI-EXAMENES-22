import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { SdagHeader } from './sdagHeader/sdagHeader';
import { SdagMain } from './sdagMain/sdagMain';
import { SdagHomePage } from './Pages/sdagHome/sdagHome';
import { SdagAmphityron998Page } from './Pages/sdagAmphityron998/sdagAmphityron998';
import { SdagIntegralesPage } from './Pages/sdagIntegrales/sdagIntegrales';
import { SdagMileo297Page } from './Pages/sdagMileo297/sdagMileo297';
import { SdagPerfiladasPage } from './Pages/sdagPerfiladas/sdagPerfiladas';
import { SdagRápidoM96Page } from './Pages/sdagRápidoM96/sdagRápidoM96';

function App() {
  return (
    <div id='App'>
      <header>
        <SdagHeader/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<SdagMain/>}>
          <Route path='/Home' element={<SdagHomePage/>}/>
          <Route path='/Amphityron998' element={<SdagAmphityron998Page/>}/>
          <Route path='/Integrales' element={<SdagIntegralesPage/>}/>
          <Route path='/Mileo297' element={<SdagMileo297Page/>}/>
          <Route path='/Perfiladas' element={<SdagPerfiladasPage/>}/>
          <Route path='/RapidoM96' element={<SdagRápidoM96Page/>}/>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
