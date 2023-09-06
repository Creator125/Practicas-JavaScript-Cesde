import {Header} from "./components/Header.js";
import {Footer} from "./components/Footer.js";

export const App = () => {
    let divRoot = document.querySelector("#root");

    divRoot.innerHTML = "<h1>Mi primer SPA</h1>";
    divRoot.append(Header());
    divRoot.append(Footer());
}