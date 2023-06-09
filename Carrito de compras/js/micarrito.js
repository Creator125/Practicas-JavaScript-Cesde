//Definir el arreglo de objeto del carrito
let carrito = []

function agregarCarrito(id, descripcion, precio){
    //Buscar el id en el arreglo de objeto carrito
    let findItem = carrito.find(item => item.id === id);
    if(findItem == undefined){
        carrito.push({
            id: id,
            descripcion: descripcion,
            cantidad: 1,
            precio: precio
        });
    }else{
        //Desetructurando el objeto el findItem
        let {id, descripcion, cantidad} = findItem;
        cantidad++;
        //Encontrar el indice del item arreglo
        const index = carrito.findIndex(item => item.id === id);
        //Actualizar el item
        carrito[index].cantidad = cantidad;
    }
    console.log(carrito);
    mirarCarrito();
}
    
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
                                                <td>${new Int1.NumberFormat('de-DE').format(item.precio)}</td>
                                                <td>${new Int1.NumberFormat('de-DE').format(item.precio * item.cantidad)}</td>
                                                <td><button type="button" class="btn btn-danger" onclick= "eliminarCarrito('${item.id}');";>
                                                      <img src="img/icons/trash-fill.svg">
                                                    </button>
                                                </td>
                                              </tr>`
                                              total += item.precio * item.cantidad;
                              }                  
                              carritoTabla += `</tbody>
                                                <tfoot>
                                              <tr>
                                                <td colspan="4" aling="right" style="font-size:28; font-weight:bold">Total: ${new Intl.NumberFormat('de-DE').format(total)}</td>
                                              </tr>
                                              </tfoot>
                                              </table>
                                              <button type="button" class="btn btn-danger" onclik="limpiarCarrito()">Vaciar carrito</button>
                                              <a href ="../pagar.html" class=" btn btn-success" onclick"pagar()">Pagar</a>`;
    mostrarCarrito.innerHTML = carritoTabla;            
  }else{
    verCarrito.textContent = "El carrito está vacio"
  }
}

function mirarCarritoPagar(carrito){
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
                                                <td>${new Int1.NumberFormat('de-DE').format(item.precio)}</td
                                                <td>${new Int1.NumberFormat('de-DE').format(item.precio * item.cantidad)}</td>
                                              </tr>`
                                              total += item.precio * item.cantidad;
                            }                 
                              carritoTabla += `</tbody>
                                                <tfoot>
                                              <tr>
                                                <td colspan="4" aling="right" style="font-size:28; font-weight:bold">Total: ${total}</td>
                                              </tr>
                                              </tfoot>
                                              </table>
                                              <a href="../index.html" class="btn btn-danger" onclik="limpiarCarrito()">Finalizar</a>`
    verCarrito.innerHTML = carritoTabla;            
  }else{
    verCarrito.textContent = "El carrito está vacio";
  }
}

function limpiarCarrito(){
    localStorage.clear();
    carrito = [];
    verCarrito.innerHTML = "";
    contitems.textContent = `(${(0)})`;

}

function eliminarCarrito(id){
  console.log(id);
  let index = carrito.findIndex(c => c.id === id);
  carrito.splice(index, 1);
  console.log(carrito);
  mirarCarrito();
  contitems.textContent = `(${(carrito.length)})`;
}

function pagar(){
  localStorage("carrito", JSON.stringify(carrito));
}