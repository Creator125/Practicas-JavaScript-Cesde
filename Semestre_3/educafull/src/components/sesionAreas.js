import React from "react";
import { IconMathFunctionY, IconBook, IconLanguage, IconBarbell, IconDeviceLaptop, IconCode } from '@tabler/icons-react';


export const Areas = (props) => {
    return (
        <div className="materiasSesion">
            <div className="materiasSesion">
                <IconMathFunctionY />
                <p>Matematicas</p>
            </div>
            <div className="materiasSesion">
                <IconBook />
                <p>Literatura</p>
            </div>
            <div className="materiasSesion">
                <IconLanguage />
                <p>Lenguajes</p>
            </div>
            <div className="materiasSesion">
                <IconBarbell/>
                <p>Educacion Fisica</p>
            </div>
            <div className="materiasSesion">
                <IconDeviceLaptop />
                <p>Sistemas</p>
            </div>
            <div className="materiasSesion">
                <IconCode/>
                <p>Programación</p>
            </div>
        </div>
    );
};