//Generar un funcion que muestre el mensaje de "hola mundo"
function mensaje(text){
    console.log(text);
}

mensaje("Vino el Perrote"); //Ejecutando la funcion "mensaje"
mensaje("Se ha guardado el registro exitosamennte");
mensaje("¿Donde esta el Perrote?");
mensaje(40);
mensaje(true);
mensaje(4*9);

let fibo = [0,1,1,2,3,5,8]; //Imprimiendo Array
mensaje(fibo);

let salario = 2500; //Imprimiendo operador termario
mensaje(salario > 2000 ? "Tiene subsidio" : "No tiene subsidio");


//Generar una función para mostrar la suma de 2 numeros
function suma(num1, num2){
    //resul = num1 + num2;
    console.log(num1 + num2);
}

suma(10, 7); //Ejecutando la funcion "suma"
suma(2, 8);
suma("2", 2);
suma(3, "3");
suma(true, 7);
suma(9, false);


//Generar una funcion que retorne el resultado de cualquier opreacion de 2 numeros
function operacion(valor1 = 0, valor2 = 0, operador = "+"){
    let resul = 0;

    switch (operador) {
        case "+":
            resul = valor1 + valor2;
            break;
        case "-":
            resul = valor1 - valor2;
            break;
        case "*":
            resul = valor1 * valor2;
            break;
        case "/":
            resul = valor1 / valor2;
            break;
    }

    return resul;
}

console.log(operacion(4, 7, "+")); //Ejecutando la funcion "operacion"
console.log(operacion(20, 5, "-"));
console.log(operacion(5, 5, "*"));
console.log(operacion(8, 2, "/"));
console.log(operacion(8, 2));
console.log(operacion(20));

let var1 = 60;
let var2 = 20;
let resultado =  operacion(var1, var2, "-"); //Asignado el valor de retorno, de la funcion "opreacion", a una variable
console.log(resultado);
console.log(`El resultado de la operación es ${operacion(25, var2,"*")}`);

console.log(operacion(var1, var2,"+") > 200 ? "El mayor que 200" : "Es menor que 200"); //Usando operador termario
