import React from 'react'
import { NavBar } from '../../commons/NavBar';
import './Header.css';
import logo from '../../../logo.svg';
export const Header = () => {
  return (
    <header>
        <figure>
            <img src= {logo} alt="logotipo" />
        </figure>
        <NavBar/>
    </header>
  )
}
