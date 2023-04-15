let productos = []; //Creando el arreglo (de objeto)
//Variable para el indice del producto encontrado
let indexProdBuscar;
// Referencia a Buscar
let referenciaBuscar;
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
let btnlimpiar = document.querySelector('#btnlimpiar');

//Deshabilitar los botones de Actualizar y Eliminar
function altenarBotones(toggle){
    if(toggle){ //Llega verdadero
        btnactualizar.disabled = false;
        btneliminar.disabled = false;
    }else{ //Llega falso
        btnactualizar.disabled = true;
        btneliminar.disabled = true;
    }
}

altenarBotones(false);

//Eventos de botones
//Boton de agregar
btnagregar.addEventListener("click",() => {
    //Verificar que todos los datos estan diligentes
    mensaje.classList.remove("alert-danger");
    mensaje.classList.add("d-none");
    //Agregar o quitar clases
    mensaje.classList.remove("d-none");
    if(referencia.value != "" && decripcion.value != "" && precioUni.value != "" && existencia.value != ""){
        //Verificar que la referecia no esxtita
        let buscarProducto = productos.find(prod => prod.Referencia == referencia.value);

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
            console.log(productos);
            //Retardo de 3 segundos y que desaparesca el mensaje
            setTimeout(() => {
                mensaje.classList.remove("alert-success");
                mensaje.classList.add("d-none");
            }, 2000);
        }else{ //Encontro la referenacia
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "La referencia ya existe";
        }
   }else{
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-danger");
        mensaje.textContent = "Debes dilingeciar todos los datos";
   }
});

//Evento del boton buscar
btnbuscar.addEventListener('click', () =>{
    if(referencia.value != ""){
        let buscarProducto = productos.find(prod => prod.Referencia == referencia.value);
        if (buscarProducto != undefined){ //Lo encuentra
            //Recuperar los datos y mostralos en el fomulario, en cada input que tiene sus refenrecias respectivas
            decripcion.value = buscarProducto.Decripcion;
            precioUni.value = buscarProducto.PrecioUnitario;
            existencia.value = buscarProducto.Existencia;
            //Habiliatr los botones Actualiza y eliminar
            altenarBotones(true);
            indexProdBuscar = productos.findIndex(prod => prod.Referencia == referencia.value);
            referenciaBuscar = referencia.value
        }else{
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "Referencia NO existe. Inténtelo con otra ...";
        }
    }else{
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-danger");
        mensaje.textContent = "Debe ingresar la referencia a buscar ...";
    }
});

//Evento del boton actualizar
btnactualizar.addEventListener('click', ()=>{
    //Preguntar si la referencia a busca es igual a la referencia o modificar
    if(referenciaBuscar = referencia.value){
        //Actualizar el producto con todos sus datos
        productos.splice(indexProdBuscar, 1, {
            Referencia: referencia.value,
            Decripcion: decripcion.value,
            PrecioUnitario: parseInt(precioUni.value),
            Existencia: parseInt(existencia.value)
        });

        mensaje.classList.remove("alert-danger");
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-success");
        mensaje.textContent = "Producto actualizado correctamente";
        setTimeout(()=> {
            mensaje.classList.add("d-none");
        }, 2000)
    }else{
        //Busca la referencia nueva o a automatizar
        let refProd = productos.find(prod => prod.Referencia = referencia.value);
        if(refProd != undefined){
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "Referencia asignada a otro proucto. Intentelo con otra ...";
        }else{
            //Actualizar el producto con todos sus datos
            productos.splice(indexProdBuscar, 1, {
                Referencia: referencia.value,
                Decripcion: decripcion.value,
                PrecioUnitario: parseInt(precioUni.value),
                Existencia: parseInt(existencia.value)
            });

            mensaje.classList.remove("alert-danger");
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-success");
            mensaje.textContent = "Producto actualizado correctamente..."

            setTimeout(()=>{
                message.classList.add("d-none");
            },2000)
        }
    }
});