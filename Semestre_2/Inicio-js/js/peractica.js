var salario = 30000; //Variable numerica tipo var
estado = true; //Booleano
let nombre = "Obed"; //Variable que no se puede modificar
//let nombre = "Juana";

if (salario > 29000) {
  let nombre = "Mario";

  console.log("El nombre es ", nombre);
} else {
  console.log("No tiene derecho a salario");
}

console.log("El salario es ", salario);
console.log("El nombre es ", nombre);

//Condicionales
if (estado) {
  console.log("Esta disponible");
} else {
  console.log("No esta disponible");
}

console.log(estado ? "Esta disponible" : "No esta disponible");

//Usando Arrays
let nums = [2, 4, 6, 7, 9, 10]; //Array

console.log(nums);

//Constantes
const Pi = 3.14;
//Pi = 4;
