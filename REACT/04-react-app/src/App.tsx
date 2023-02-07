import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/estructura/header/Header';
import { Main } from './components/estructura/main/Main';
import { NavBar } from './pages/NavBar';
import { Route, Routes } from 'react-router-dom';
import { ServiciosPage } from './pages/servicios/Servicios';
import { HomePage } from './pages/home/Home';
import { TrabajosPage } from './pages/trabajo/Trabajos';
function App() {
  return (
    <>
      
      <Header/>
      <Main/>
        <h2>Mi Portfolio</h2>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element = { <Main/> }>
          <Route path='servicios' element = { <ServiciosPage/> }/>
          <Route path='mistrabajos' element = { <TrabajosPage/> }/>
          <Route path='home' element = { <HomePage/> }/>
        </Route>
      </Routes>
    </>
    
  );
}

export default App;
