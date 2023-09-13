function adivinarNumero(num){
    function definirRango(min, max) {
        return Math.random() * (max - min) + min;
    }   

    //Obtener el numero dentro del rango del 1 al 10
    var numeroAleatorio = parseInt(definirRango(1, 10));

    if (num === numeroAleatorio) {
        console.log("Adivinaste es numero es: "+numeroAleatorio)
    }else{
        console.log("Buen intento pero el numero era: "+numeroAleatorio)
    }
}

adivinarNumero(4);