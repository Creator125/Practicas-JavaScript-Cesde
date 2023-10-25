import React from "react";

//Componete profecard
export const ProfeCard = ({foto, nombre}) => {
    return (
        <div className="card">
            <img src={foto} alt={foto}/>
            <p>{nombre}</p>
        </div>
    );
};

export default ProfeCard; //Para exportar los parámetros de foto y nombre
//Este somponentes será usado varias veces dentro de secionProfesores