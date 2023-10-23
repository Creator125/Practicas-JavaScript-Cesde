import React from "react";
import { IconMathFunctionY, IconBook, IconLanguage, IconBarbell, IconDeviceLaptop, IconCode, IconPencil } from '@tabler/icons-react';


export const Areas = (props) => {
    return (
        <div className="materiasSesion">
            <h2>Areas</h2>
            <div className="areas">
                <div className="area">
                    <IconMathFunctionY />
                    <p>Matematicas</p>
                </div>
                <div className="area">
                    <IconBook />
                    <p>Literatura</p>
                </div>
                <div className="area">
                    <IconLanguage />
                    <p>Lenguajes</p>
                </div>
                <div className="area">
                    <IconBarbell/>
                    <p>Educacion Fisica</p>
                </div>
                <div className="area">
                    <IconDeviceLaptop />
                    <p>Sistemas</p>
                </div>
                <div className="area">
                    <IconCode/>
                    <p>Programación</p>
                </div>

                <div className="area">
                    <IconPencil/>
                    <p>Artistica</p>
                </div>
            </div>
        </div>
    );
};