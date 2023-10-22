import React from "react";

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

export default UsuarioCard;