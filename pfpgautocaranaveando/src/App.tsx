import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Pfpgmain } from './pages/Main/Pfpgmain';
import { Pfpgintegrales } from './pages/Integrales/Pfpgintegrales';
import { Pfpghome } from './pages/home/Pfpghome';
import { Pfpgintegral1 } from './pages/Integrales/Pfpgintegral1';
import { Pfpgintegral2 } from './pages/Integrales/Pfpgintegral2';
import { Pfpgperfiladas } from './pages/Perfiladas/Pfpgperfiladas';
import { Pfpgperfilada1 } from './pages/Perfiladas/Pfpgperfilada1';
import { PfpgnavBar } from './pages/PfpgnavBar';

function App() {
  return (
    <div className='ppal'>
        
        <PfpgnavBar/>

      <main>
        <Routes>
        <Route path='/' element={ <Pfpgmain/>} >
          <Route path='/' element={ <Pfpghome/>}/>
          <Route path='integrales' element={ <Pfpgintegrales/>}/>
          <Route path='integral1' element={ <Pfpgintegral1/>}/>
          <Route path='integral2' element={ <Pfpgintegral2/>}/>
          <Route path='perfiladas' element={ <Pfpgperfiladas/>}/>
          <Route path='perfiladas1' element={ <Pfpgperfilada1/>}/>
        </Route>
      
        </Routes>
      </main>
    </div>
  );
}

export default App;
