const miPromesa = new Promise((resolve, reject) => {
    let numero = 9;

    if (numero > 18) {
        resolve(`El numero ${numero} es mayor a 18`);
    } else {
        reject(`El numero ${numero} es menor a 18`);
    }
});


miPromesa
    .then((resultado) => {
        console.log("Éxito: " + resultado);
    })
    .catch((error) => {
        console.error("Error: " + error);
    });