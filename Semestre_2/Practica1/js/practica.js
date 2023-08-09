let indem = 15;
let nombre = "Lucas";
let salario = 3500000;
let stateemp = false;
let trabajos = ["Scrum Master", "Product Owner", "Scrum Team"]; //Arreglo

console.log(`La indetificación es ${indem} y su nombre es: ${nombre}`);

//Operador termario
console.log(stateemp ? "Empleado Activo": "Empleado Inactivo")

stateemp = !stateemp;
console.log(stateemp);

let obser = salario > 4000000 && salario ? "No tiene subsidio" : "Tiene subsidio";
let subsidio = salario > 4000000 & salario ? 0 : salario * 0.2;
console.log(obser);
console.log(subsidio);

//Switch
let posicion = "Gerente";

switch(posicion){
    case "Gerente":
        salario = 10000000;
        break;
    case "Director":
        salario = 6500000;
        break;
    case "Coordinador":
        salario = 5000000;
        break;
    case "Docente":
        salario = 3500000;
        break;
    default:
        salario = 1200000;
        break;
}

console.log(`El salario es ${salario}`);

//Arreglos
console.log(trabajos);

trabajos.push("Sprint"); //Agregar una posicion final a un arreglo javascript
console.log(trabajos);


trabajos.sort(); //Odenarcion de arreglos
console.log(trabajos);
trabajos.reverse();
console.log(trabajos);

trabajos.splice(2,0, "Product Backlog"); //Insetacion en arreglos
console.log(trabajos);

for(i = 0; i <= trabajos.length; i++){ //Recorriendo un arreglo
    console.log(trabajos[i]);
}

console.log("Recorriendo un arreglo con js avanzado");

let pos = 0;

for(i of trabajos){ //Recorriendo un arreglo con js avanzado
    console.log(`Posision: ${pos}, contenido ${i}`);

    pos++;
}

let numeros = [2, 6, 8, 9, 16];
let suma = 0;

for (numero of numeros){ //Creando acumuladores
    suma += numero;
}

let promedio = suma / numeros.length;

console.log(promedio);

for(num of numeros){
    if (num % 2 == 0) {
        console.log(num);
    }
    //console.log(num % 2 == 0 ? num : );
}