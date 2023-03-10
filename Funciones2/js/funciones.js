//Funcion para convertir pesos (COP) a dolares (USD)
function convertirMoneda( monedaOrigen, modenaDestino, cifra){
    //console.log(cifra / 4700);
    //return cifra / 4700;

    let dolar = 4700;
    let euro = 5000;
    let cambio = 0;

    if((monedaOrigen == "COP" || monedaOrigen == "cop") && (modenaDestino == "USD" || modenaDestino == "usd")){
        cambio = cifra / dolar;
    }else if((monedaOrigen == "USD" || monedaOrigen == "usd") && (modenaDestino == "COP" || modenaDestino == "cop")){
        cambio = cifra * dolar;
    }else if((monedaOrigen == "COP" || monedaOrigen == "cop") && (modenaDestino == "EUR" || modenaDestino == "eur")){
        cambio = cifra / euro;
    }else if((monedaOrigen == "EUR" || monedaOrigen == "eur") && (modenaDestino == "COP" || modenaDestino == "cop")){
        cambio = cifra * euro;
    }

    return cambio;
}


//Funcion flecha o anonima
/*
function sumar(var1,var2){ //Funcion tradicional
    return var1 + var2
}
*/
let sumar = (var1, var2) => var1 + var2; //Funcion flecha
let sumar2 = function(var1, var2){return var1 + var2} //Funcion anonima
let mensaje = (text) => console.log(text); //Funcion flecha
let mensaje2 = function(text){console.log(text)} //Funcion anonima

//Genenerar una funcion que determine el sexo con true o false
let sexo = (genero) => genero ? "Masculino" : "Femenino";
let sexo2 = function(genero){ return genero ? "Masculino" : "Femenino"}

//Generar una funcion que retorne si un numero es primo o no
//let Numprimo = (num) => console.log(num % num == 0 ? "El numero es primo" : "El numero no es primo");
let Numprimo = function(num){
    let residuo = 0;

    for (let i = 1; i <= num; i++){
        if(num % i == 0){
            residuo ++;
        }
    }

    if(residuo == 2){
        return "Es primo";
    }else{
        return "No es primo";
    }
}