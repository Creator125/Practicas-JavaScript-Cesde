import React from "react";
import EduDigital from "../assets/img/educacion-digital.png"

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