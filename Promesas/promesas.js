/*

console.log("Empezando el código");
console.log("Instrucion 1 del codigo");

setTimeout(() => {
    console.log("Respuesta del proceso asincrono");
}, 5000);

console.log("Instrucion 2 del codigo");
console.log("Instrucion 3 del codigo");
*/

let loading = document.querySelector("#loading");
let productos =[
    {ref: "a1", Descripcion: "Canela", Precio: 4000},
    {ref: "a2", Descripcion: "Coco", Precio: 5000},
    {ref: "a3", Descripcion: "Manzana", Precio: 4000}
];

console.log("Espere, por favor. Cargando los productos");

/*
setTimeout(() => {
    console.table(productos);
    console.log("Productos cargados correctmamente");
    loading.style.display="none"
}, 3000);

console.log("Siga esperando...");
*/
/*
let estado = false;
const promesa1 = new Promise((resolve, reject) => {
    if (estado) {
        resolve("El estado es disponible");
    }else{
        reject("El estado no disponible");
    }
});
*/

//Ejecucion de la promesa
/*
promesa1
    .then(mens => console.log(mens))
    .catch(error => console.log(error));
*/


/*
function promesa2(dispobible){
    return new Promise((resolve, reject) =>{
        if(dispobible){
            resolve(true);
        }else{
            reject(false);
        }
    })
}

//Ejecucion
promesa2(false)
    .then(mstatus =>{
        if(mstatus){
            console.log("Espere por favor...");
            setTimeout(() =>{
                console.log("El producto está disponible");
            }, 3000);
            
        }
    })
    .catch(merror => {
        if(!merror){
            console.log("El producto está disponible");
        }

    })
*/

async function buscarProductos(ref){
    let findProd = await productos.find(prod => prod.ref === ref);
    return findProd;
}

function promesa3(ref){
    return new Promise((resolve, reject) =>{
        let findProd = buscarProductos(ref);

        if(!findProd != undefined){
            resolve(findProd);
        }else{
            reject({mensaje: "error"});
        }
    })
}

//Ejecucion de la promesa 3
promesa3("a1")
    .then((dato) => {
        console.table(dato)
    })
    .catch(err => console.log(err))

//Usando fetch
fetch('jsonplaceholder/todos.json')
  .then(response => response.json())
  .then(data => console.log(data));