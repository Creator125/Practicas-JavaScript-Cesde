import React,{Component} from "react";

class Componente extends Component{
    render(){
        //return <h1>Esto es otro componente</h1>
        return <h1>{this.props.mensaje}</h1>
    }
}

export default Componente;