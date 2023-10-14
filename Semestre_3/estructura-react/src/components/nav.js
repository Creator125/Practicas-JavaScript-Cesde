import React from "react";

export const Navigation = (props) => {
    return (
        <nav id="menu">
            <div className="container">
                <ul>
                    <li><a href="#features">Feature</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Gallery</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#team" className="page-scroll">Team</a></li>
                    <li><a href="#contact" className="page-scroll">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};