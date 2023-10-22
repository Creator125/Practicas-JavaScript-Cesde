import React from "react";
import { ProfeCard } from "./profesorCard";
import Profe1 from "../assets/img/profesores/humanNotExist1.jpg";
import Profe2 from "../assets/img/profesores/humanNotExist2.jpg";
import Profe3 from "../assets/img/profesores/humanNotExist3.jpg";
import Profe4 from "../assets/img/profesores/humanNotExist4.jpg";

export const Profes = (props) => {
    return (
        <div>
            <h2>profesores</h2>
            <div className="profesoresSesion">
                <ProfeCard foto= {Profe1} nombre="Andrea"/>
            </div>

            <div className="profesoresSesion">
                <ProfeCard foto= {Profe2} nombre="Pablo"/>
            </div>

            <div className="profesoresSesion">
                <ProfeCard foto= {Profe3} nombre="Mario"/>
            </div>

            <div className="profesoresSesion">
                <ProfeCard foto= {Profe4} nombre="Marina"/>
            </div>
        </div>
        
    );
};