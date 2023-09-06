export const Header = () => {
    let nav = document.createElement("nav");

    nav.innerHTML = `
        <a href="#/">Inicio</a>
        <a href="#/">Contactenos</a>
    `;

    return nav;
}