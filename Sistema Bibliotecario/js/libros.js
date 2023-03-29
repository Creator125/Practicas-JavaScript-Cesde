let libros = [];

//Referenciando los elementos
let mensaje = document.querySelector("#mensaje");
let idLibro = document.querySelector("#idLibro");
let nombreLibro = document.querySelector("#nombreLibro");
let genero = document.querySelector("#genero");
let estado = document.getElementsByName("Estado")
//Botones
let btnagregar = document.querySelector('#btnagregar');
let btnbuscar = document.querySelector('#btnbuscar');
let btnlimpiar = document.querySelector('#btnlimpiar');

//Evento de los botones
//Boton de agregar
btnagregar.addEventListener("click",() => {
    //Verificar que todos los datos estan diligentes
    mensaje.classList.remove("alert-danger");
    mensaje.classList.add("d-none");
    //Agregar o quitar clases
    mensaje.classList.remove("d-none");
    if(idLibro.value != "" && nombreLibro.value != "" && genero.value != "" && estado.value != ""){
        //Verificar que el id no esxtita
        let buscarlibro = libros.find(libro => libro.idLibro = idLibro.value);

        if(buscarlibro == undefined){ //No Encuentra el id
            //Algregar la clase alert-info
            mensaje.classList.add("alert-success");
            //Agregar el producto como objeto, al arreglo prroducto
            libros.push({
                Id: parseInt(idLibro.value),
                Nombre: nombreLibro.value,
                Genero: genero.value,
                Estado: estado.value
            });
            mensaje.textContent = "El Libro se ha agregado correctamente ...";
            //console.log(mensaje);
            //Retardo de 3 segundos y que desaparesca el mensaje
            setTimeout(() => {
                mensaje.classList.remove("alert-success");
                mensaje.classList.add("d-none");
            }, 5000);
        }else{ //Encontro el id
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "El libro ya existe";
        }
   }else{
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-danger");
        mensaje.textContent = "Debes dilingeciar todos los datos";
   }
});


//Boton de buscar
btnbuscar.addEventListener("click", () =>{
    let buscarlibro = libros.find(libro => libro.idLibro = idLibro.value);

    if (buscarlibro != undefined){
        console.log(libros);
    }else{
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-danger");
        mensaje.textContent = "El libro no existe";
    }
});

//Boton de limpiar
btnlimpiar.addEventListener("click", () =>{
    idLibro.value = "";
    nombreLibro.value = "";
    mensaje.classList.add("d-none");
})