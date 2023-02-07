import React from 'react'
import { NavBar } from '../../../pages/NavBar';
import './Header.css';
import logo from '../../../logo.svg';
export const Header = () => {
  return (
    <header>
        {/* <figure>
            <img src= {logo} alt="logotipo" />
        </figure> */}
        <h2>Mi portfolio</h2>
        <NavBar/>
    </header>
  )
}
