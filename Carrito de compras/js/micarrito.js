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
        let (id, descripcion, cantidad) = findItem;
        cantidad++;
        //Encontrar el indice del item arreglo
        const index = carrito.findIndex(item => item.id === id);
        //Actualizar el item
        carrito[index].cantidad = cantidad;
    }
      console.log(carrito);
    
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
                                                      <td>${item.descricion}</td>
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

function limpiarCarrito(){
    carrito = [];
    verCarrito.innerHTML = "";
    console.log(carrito);
    contitems.textContent = `(${(0)})`;
}