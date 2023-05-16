//Definir el arreglo de objeto del carrito
let carrito = []

function agregarCarrito(id, descripcion, precio){
    //Buscar el id en el arreglo de objeto carrito
    let findItem = carrito.find(item => item.id == id);
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
        const index = carrito.find(item => item.id == id);
        //Actualizar el item
        carrito[index].cantidad = cantidad;
    }
      console.log(carrito);  

}