import React from "react";
import Logo from "../assets/img/logo.png";

export const Nav = (props) => {
    return (
        <nav id="menu">
            <ul>
                <li><img src={Logo}/></li>
                <li><a href="#">Areas</a></li>
                <li><a href="#">Profesores</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Testimonios</a></li>
                <li><a href="#">Contactos</a></li>
            </ul>
        </nav>
    );
};