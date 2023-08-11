const carro ={
    marca : "Ferrari",
    /*llamar(){
        let salto = this;
        setTimeout(function() {
           console.log(salto.marca);
        }, 5000);
    },*/
    llamarFlecha: function() {
        setTimeout(() => {
            console.log(this.marca);
        }, 5000);
    }
}

//carro.llamar();
carro.llamarFlecha();