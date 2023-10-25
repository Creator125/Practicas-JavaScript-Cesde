import React from "react";
import Logo from "../assets/img/logo.png"; //Importando el logo

 //Barra de navegacion
export const Nav = (props) => {
    return (
        <nav id="menu">
            <ul>
                <li><img src={Logo}/></li>
                <li><a href="#areas">Areas</a></li>
                <li><a href="#profesores">Profesores</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#contactos">Contactos</a></li>
            </ul>
        </nav>
    );
};