import React from "react";

export const ProfeCard = (foto, nombre) => {
    return (
        <div className="card">
            <img src={foto} alt={foto}/>
            <p>{nombre}</p>
        </div>
    );
};