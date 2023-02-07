import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './commons/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { ServiciosPage } from './pages/servicios/Servicios';
import { FormacionPage } from './pages/formacion/Formacion';
import { QsomosPage } from './pages/qsomos/Qsomos';
import { ContactoPage } from './pages/contacto/Contacto';
import { WebPage } from './pages/servicios/pages/Web';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      
      <Routes>
        <Route path='/' element= { <Main/> }>
          <Route path='/servicios' element = { <ServiciosPage/> }>
            <Route path='/servicios/web' element = { <WebPage/> }/>
          </Route>


          <Route path='/formacion' element = { <FormacionPage/> } />
          <Route path='/qsomos' element = { <QsomosPage/> } />
          <Route path='/contacto' element = { <ContactoPage/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
