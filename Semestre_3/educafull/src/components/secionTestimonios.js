import React from "react";
import UsuarioCard from "./usuarioCard";
import Usuario1 from "../assets/img/usuarios/user1.jpeg"
import Usuario2 from "../assets/img/usuarios/user2.jpeg"

export const Testimonios = (props) =>{
    return (
        <div className="testimonioSesion">
            <h2>Testimonios</h2>
            <div className="testimonios-usuarios">
                <UsuarioCard  foto={Usuario1}
                nombre="Fabian Gustamante"
                descripcion="Clita eos vero stet blandit sed voluptua duo aliquip sea ipsum magna dolor justo lorem"
                />

                <UsuarioCard  foto={Usuario2}
                nombre="Ricardo Valles"
                descripcion="Sanctus ex lorem clita commodo clita et amet aliquyam eos velit ut est diam amet invidunt ipsum diam"
                />
            </div>
        </div>
    );
};