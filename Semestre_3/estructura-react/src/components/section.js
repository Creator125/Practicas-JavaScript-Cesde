import React from "react";

export const Section = ({ title, imageSrc, description }) =>{
    return(
        <section>
            <img src={imageSrc} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
}

export default Section;