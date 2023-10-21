import React from "react";
import { ProfeCard } from "./profesorCard";
import Profe1 from "../assets/img/profesores/humanNotExist1.jpg"

export const Profes = (props) => {
    return (
        <div className="profesoresSesion">
            <ProfeCard foto={Profe1} nombre="Andrea"/>
        </div>
    );
};