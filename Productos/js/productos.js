let productos = []; //Creando el arreglo (de objeto)

//Referenciar cada uno de los elementos que tene cada uno de los elementos que tiene id en el archivo html
let mensaje = document.getElementById('mensaje');
let referencia = document.querySelector('#referencia');
let decripcion = document.querySelector('#descripcion');
let precioUni = document.querySelector('#preciounitario');
let existencia = document.querySelector('#existencia')
//Botones
let btnagregar = document.querySelector('#btnagregar');
let btnbuscar = document.querySelector('#btnbuscar');
let btnactualizar = document.querySelector('#btnactualizar');
let btneliminar = document.querySelector('#btneliminar');
let btnlistar = document.querySelector('#btnlistar');
let btnlimpiar = document.querySelector('#btnlimpiar')

//Eventos de botones
//Botosn de agregar
btnagregar.addEventListener("click",() => {
    //Verificar que todos los datos estan diligentes
    mensaje.classList.remove("alert-danger");
    mensaje.classList.add("d-none");
    //Agregar o quitar clases
    mensaje.classList.remove("d-none");
    if(referencia.value != "" && decripcion.value != "" && precioUni.value != "" && existencia.value != ""){
        //Verificar que la referecia no esxtita
        let buscarProducto = productos.find(prod => prod.referencia == referencia.value);

        if( buscarProducto == undefined){ //No Encuentra la referencia
            //Algregar la clase alert-info
            mensaje.classList.add("alert-success");
            //Agregar el producto como objeto, al arreglo prroducto
            productos.push({
                Referencia: referencia.value,
                Decripcion: decripcion.value,
                PrecioUnitario: parseInt(precioUni.value),
                Existencia: parseInt(existencia.value)
            })
            mensaje.textContent = "El producto se ha agregado correctamente ...";
            console.log(mensaje);
            //Retardo de 3 segundos y que desaparesca el mensaje
            setTimeout(() => {
                mensaje.classList.remove("alert-success");
                mensaje.classList.add("d-none");
            }, 5000);
        }else{ //Encontro la referenacia
            mensaje.classList.remove("d-nnone");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "La referencia ya existe";
        }
   }else{
        mensaje.classList.remove("d-nnone");
        mensaje.classList.add("alert-danger");
        mensaje.textContent = "Debes dilingeciar todos los datos";
   }
});

//Evento del boton buscar
btnbuscar.addEventListener('click', () =>{
    if(referencia.value != ""){
        let buscarProducto = productos.find(prod => prod.referencia == referencia.value);
        if (buscarProducto != undefined){ //Lo encuentra
            //Recuperar los datos y mostralos en el fomulario, en cada input que tiene sus refenrecias respectivas
            decripcion.value.buscarProducto.decripcion;
            precioUni.value.buscarProducto.PrecioUnitario
            Existencia.value = buscarProducto.existencia
        }else{
            mensaje.classList.remove("d-none");
        }
    }
})