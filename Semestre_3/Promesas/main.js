/** 
//Crear una promesa
const promesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("¡Lo logre siiiiiiiiiiii!");
    }, 5000);
});

console.log(promesa);
*/

/*
//Forzando una promesa a ser aceptada
const promesa = Promise.resolve("Hay mi vida");

console.log(promesa);
*/

//Forzando una promesa a ser aceptada
const promesa = new Promise((resolve, reject)=>{
    let variable = false;

    setTimeout(() => {
        return (variable) ? resolve("Correcto"):
        reject("Rechazada")
    }, 5000);
});

console.log(promesa);