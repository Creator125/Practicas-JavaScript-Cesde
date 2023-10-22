import React from "react";
import { IconBrandFacebookFilled, IconBrandXFilled, IconBrandWhatsapp, IconPhone, IconAt } from '@tabler/icons-react';

export const Contactos = (props) =>{
    return (
        <div className="contactoSesion">
            <h2>Nuestros contactos</h2>
            
            <div className="contact">
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