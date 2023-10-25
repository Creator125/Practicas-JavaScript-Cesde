import React from "react";
//Card de usarios que se mostrará en la sesion de testimonios
export const UsuarioCard = ({foto, nombre, descripcion}) => {
    return (
        <div className="cardUsuarios">
            <div className="foto">
                <img src={foto} alt={foto}/>
            </div>
            <div className="info">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </div>
            
        </div>
    );
};

export default UsuarioCard; //Util para exportar los parametos foto, nombrey descripcion
//Este somponentes será usado varias veces dentro de secionTestimonio