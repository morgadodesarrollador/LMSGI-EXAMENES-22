import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { DjsmHeader } from './DjsmHeader/DjsmHeader';
import { DjsmMain } from './DjsmMain/Djsmmain';
import { DjsmHome } from './Djsmpages/Djsmhome/Djsmhome';
import { DjsmAmphy } from './Djsmpages/Djsmamphy/Djsmamphy';
import { Djsmintegrales } from './Djsmpages/Djsmintegralespages/Djsmintegral';
import { Djsmmaleo } from './Djsmpages/Djsmmileo/Djsmmaleo';
import { Djsmperfiladas } from './Djsmpages/Djsmperfiladaspages/Djsmperfiladas';
import { Djsmrapido } from './Djsmpages/Djsmrapido/Djsmrapido';
import { DjsmNavBar } from './DjsmNavBar/DjsmNavBar';




export const App = () => {
    return (
        <>
            <header><DjsmNavBar/></header>

          
      

             <Routes>
                <Route path='/' element={<DjsmMain />}>
                    <Route path='/Home' element={<DjsmHome />} /> 
                    <Route path='/Amphityron998' element={<DjsmAmphy />} /> 
                    <Route path='/Integrales' element={<Djsmintegrales />} />
                    <Route path='/Mileo297' element={<Djsmmaleo />} />
                    <Route path='/Perfiladas' element={<Djsmperfiladas />} />
                    <Route path='/RapidoM96' element={<Djsmrapido />} />
                </Route>
            </Routes> 
        </>
    )
}

