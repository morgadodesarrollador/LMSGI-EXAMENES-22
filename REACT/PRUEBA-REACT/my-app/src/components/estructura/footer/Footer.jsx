import React from "react";
import './Footer.css';
import { Sociales } from "./sociales/Sociales";
import { Mapa } from "./mapa/Mapa";
export const Footer = () => {
    return(
        <footer>
            <Sociales></Sociales>
            <Mapa></Mapa>
        </footer>
    )
}

export default Footer;