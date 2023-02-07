import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './pages/NavBar';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main/Main';
import { SearchPage } from './pages/search/Search';
import { ServiciosPage } from './pages/servicios/Servicios';
import { TrabajosPage } from './pages/trabajos/Trabajos';
function App() {
  return (
    <>
      <header>
        <h2>Mi Portfolio</h2>
        <NavBar/>
      </header>
      <Routes>
        <Route path='/' element= { <MainPage/> }>
          <Route path='search' element = { <SearchPage/> } />
          <Route path='servicios' element = { <ServiciosPage/> }></Route>
          <Route path='mistrabajos' element = { <TrabajosPage/> }></Route>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
