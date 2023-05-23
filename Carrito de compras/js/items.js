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


function mirarCarrito(){
  if(carrito.length > 0){
    // Crear una variable tipo string para almacenar todos los items del carrito de compra (table)
    let carritoTabla = `<table class = "table table-hover">
                            <thead>
                              <th>Descripción</th>
                              <th>Cantida</th>
                              <th>Precio</th>
                              <th>Subtotal</th>
                            </thead>
                            <tbody>`
                            let total = 0; 
                            for(item of carrito){
                                carritoTabla += `<tr>
                                                <td>${item.descripcion}</td>
                                                <td>${item.cantidad}</td>
                                                <td>${item.precio}</td
                                                <td>${item.precio * item.cantidad}</td>
                                                <td><button type="button" class="btn btn-danger"><img src="img/icons/trash-fill.svg"></button></td>
                                              </tr>`
                            }                  total += item.precio * item.cantidad;
                              carritoTabla += `</tbody>
                                                <tfoot>
                                              <tr>
                                                <td colspan="4" aling="right" style="font-size:28; font-weight:bold">Total: ${total}</td>
                                              </tr>
                                              </tfoot>
                                              </table>
                                              <button type="button" class="btn btn-danger" onclik="limpiarCarrito()">Vaciar carrito`;
    mostrarCarrito.innerHTML = carritoTabla;            
  }else{
    verCarrito.textContent = "El carrito está vacio"
  }
}

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
    agregarCarrito("carne de res", repollodes.textContent, 5000);
    //Actualizar el elemento contitems que contendrá la logitud del arreglo carrito
    contitems.textContent = `(${(carrito.length)})`;
});