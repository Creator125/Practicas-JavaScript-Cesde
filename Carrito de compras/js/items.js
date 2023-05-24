//Refereciando los elementos
let contitems = document.getElementById("contitems");
contitems.textContent = `(${(0)})`;
let carnePollo = document.getElementById("carne-pollo");
let pollodes = document.getElementById("pollodes");      
let carneCerdo = document.getElementById("carne-cerdo");
let cerdodes = document.getElementById("cerdodes");      
let carneRes = document.getElementById("carne-res");
let resdes = document.getElementById("resdes");      
let uvas = document.getElementById("uvas");
let uvasdes = document.getElementById("uvasdes");      
let manzanas = document.getElementById("manzanas");
let repollo = document.getElementById("repollo");
let manzanasdes = document.getElementById("manzanasdes");
let repollodes = document.getElementById("repollodes");
let verCarrito = document.getElementById("verCarrito");
let mostrarCarrito = document.getElementById("mostrarCarrito");

//Se creará una variable para local storage
localStorage.setItem("nombre", "Tolas Gonzales");
localStorage.setItem("carrito", carrito);


//Boton de "verCarrito"
verCarrito.addEventListener("click", mirarCarrito)

//Boton de los items del mercado
carnePollo.addEventListener('click', () => {
    //Invocar la funcion para agreagar el intem al arreglo carrito, si existe que aumenta la cantidad
    agregarCarrito("carne-pollo", pollodes.textContent, 4000);
    //Actualizar el elemento contitems que contendrá la logitud del arreglo carrito
    contitems.textContent = `(${(carrito.length)})`;
});
carneCerdo.addEventListener('click', () => {
    //Invocar la funcion para agreagar el intem al arreglo carrito, si existe que aumenta la cantidad
    agregarCarrito("carne de cerdo", cerdodes.textContent,5000 );
    //Actualizar el elemento contitems que contendrá la logitud del arreglo carrito
    contitems.textContent = `(${(carrito.length)})`;
});
carneRes.addEventListener('click', () => {
    //Invocar la funcion para agreagar el intem al arreglo carrito, si existe que aumenta la cantidad
    agregarCarrito("carne de res", resdes.textContent, 5000);
    //Actualizar el elemento contitems que contendrá la logitud del arreglo carrito
    contitems.textContent = `(${(carrito.length)})`;
});
uvas.addEventListener('click', () => {
    //Invocar la funcion para agreagar el intem al arreglo carrito, si existe que aumenta la cantidad
    agregarCarrito("uvas", uvasdes.textContent, 3000);
    //Actualizar el elemento contitems que contendrá la logitud del arreglo carrito
    contitems.textContent = `(${(carrito.length)})`;
});
manzanas.addEventListener('click', () => {
    //Invocar la funcion para agreagar el intem al arreglo carrito, si existe que aumenta la cantidad
    agregarCarrito("manzanas", manzanasdes.textContent, 4000);
    //Actualizar el elemento contitems que contendrá la logitud del arreglo carrito
    contitems.textContent = `(${(carrito.length)})`;
});
repollo.addEventListener('click', () => {
    //Invocar la funcion para agreagar el intem al arreglo carrito, si existe que aumenta la cantidad
    agregarCarrito("repollo", repollodes.textContent, 5000);
    //Actualizar el elemento contitems que contendrá la logitud del arreglo carrito
    contitems.textContent = `(${(carrito.length)})`;
});