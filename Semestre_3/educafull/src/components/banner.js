import React from "react";
import EduDigital from "../assets/img/educacion-digital.png" //Importando imagen

//La sesion que encarga de mostrar la imagen y texto de presesntacion
export const Banner = (props) => {
    return (
        <div id="banner">
            <div className="imagen">
                <img src={EduDigital}/>
            </div>
            <div className="textos">
                <h2>Descubre un mundo de conocimiento en EducaFull</h2>
                <p>Tu portal educativo de confianza.</p>
            </div>
            
        </div>
    );
};