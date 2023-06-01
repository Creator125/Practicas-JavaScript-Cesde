let verCarrito = document.getElementById("verCarrito");
let miCarrito = JSON.parse(localStorage.getItem("carrito"));
//console.log(miCarrito);
mirarCarritoPagar(miCarrito);