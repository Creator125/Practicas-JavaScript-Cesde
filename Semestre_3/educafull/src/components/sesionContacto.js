import React from "react";
//Impotando iconos del componete Taber Icons-react
import { IconBrandFacebookFilled, IconBrandXFilled, IconBrandWhatsapp, IconPhone, IconAt } from '@tabler/icons-react';

//Sesion de contactos
export const Contactos = (props) =>{
    return (
        <div className="contactoSesion">
            <h2>Contactenos</h2>
            
            <div className="contact" id="contactos">
                <a href="#">
                    <IconBrandFacebookFilled/>
                    <p>Facebook</p>
                </a>
                <a href="#">
                    <IconBrandXFilled/>
                    <p>X</p>
                </a>

                <a href="#">
                    <IconBrandWhatsapp/>
                    <p>Whatsapp</p>
                </a>

                <a href="#">
                    <IconPhone/>
                    <p>Telefono</p>
                </a>

                <a href="#">
                    <IconAt/>
                    <p>Correo</p>
                </a>
            </div>
        </div>
    );
};