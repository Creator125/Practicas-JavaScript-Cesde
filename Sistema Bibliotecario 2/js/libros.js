let libros = [];
//Variable para el indice del libro encontrado
let indexLibrosBuscar;
// Id del libro a Buscar
let idBuscar;
//interuptor para el boton de listar
let trunListado = true;

//Referenciando los elementos
let mensaje = document.querySelector("#mensaje");
let idLibro = document.querySelector("#idLibro");
let nombreLibro = document.querySelector("#nombreLibro");
let genero = document.querySelector("#genero");
//let estado = document.querySelector('input[name="Estado"]:checked');
let estado = document.getElementsByName("Estado");
let listado = document.querySelector("#listado");
//Botones
let btnagregar = document.querySelector('#btnagregar');
let btnbuscar = document.querySelector('#btnbuscar');
let btnactualizar = document.querySelector("#btnactualizar");
let btneliminar = document.getElementById("btneliminar");
let btnlistar = document.querySelector("#btnlistar");
let btnlimpiar = document.querySelector('#btnlimpiar');

function altenarBotones(toggle) {
    if (toggle) {
      //Llega verdadero
      btnactualizar.disabled = false;
      btneliminar.disabled = false;
    } else {
      //Llega falso
      btnactualizar.disabled = true;
      btneliminar.disabled = true;
    }
}

function limpiarDatos() {
    idLibro.value = "";
    nombreLibro.value = "";
    genero.value = "";
    estado.value = "";
  
    //Posicionar el punto de insercion en od
    idLibro.focus();
  }

altenarBotones(false);

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
        let buscarlibro = libros.find(libro => libro.Id == idLibro.value);

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
            console.log(libros);
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
    if (idLibro.value != "") {
        let buscarlibro = libros.find(libro => libro.Id == idLibro.value);

        if (buscarlibro != undefined){ //Lo encuetra
            //Recupera los datos
            idLibro.value = buscarlibro.Id;
            nombreLibro.value = buscarlibro.Nombre;
            genero.value = buscarlibro.Genero;
            estado.value = buscarlibro.Estado;

            //Habiliatr los botones Actualiza y eliminar
            altenarBotones(true);

            indexLibrosBuscar = libros.find(libro => libro.Id == idLibro.value);

            idBuscar = idLibro.value;
        }else{
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "El libro no existe";
        }
  
    }else{
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-danger");
        mensaje.textContent = "Debes ingresar el libro a buscar";
    }
});

//Boton de actualizar
btnactualizar.addEventListener("click", () => {
    if((idBuscar = idLibro.value)){
        //Actualiza el libro con todo sus datos
        libros.splice(indexLibrosBuscar, 1, {
            Id: parseInt(idLibro.value),
            Nombre: nombreLibro.value,
            Genero: genero.value,
            Estado: estado.value
        });

        mensaje.classList.remove("alert-danger");
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-success");
        mensaje.textContent = "Libro actualizado correctamente";
        setTimeout(() => {
            mensaje.classList.add("d-none");
          }, 2000);
    }else{
        let busIdLibro = libros.find(libro => libro.Id == idLibro.value);

        if(busIdLibro != undefined){
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "Id asignada a otro libro. Intentelo con otra ...";
        }else{
            //Actualiza el libro con todo sus datos
            libros.splice(indexLibrosBuscar, 1, {
                Id: parseInt(idLibro.value),
                Nombre: nombreLibro.value,
                Genero: genero.value,
                Estado: estado.value
            });

            mensaje.classList.remove("alert-danger");
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-success");
            mensaje.textContent = "Libro actualizado correctamente";
            setTimeout(() => {
                mensaje.classList.add("d-none");
            }, 2000);
        }
    }
});

//Boton de eliminar
btneliminar.addEventListener("click", () => {
    //Busca el id
    let findLibro = libros.find(libro => libro.Id == idLibro.value);

    if(findLibro != undefined){
        //Comfinmar el borrado del libro en la pantalla
        if(confirm(`Está seguro de eliminar el libro: ${nombreLibro.value}`)){
            libros = libros.filter(libro => libro.Id != idLibro.value);

            limpiarDatos();
        }
    }
});

//Boton de limpiar
btnlimpiar.addEventListener("click", () =>{
    limpiarDatos();
});


//Boton de listar
btnlistar.addEventListener("click", () => {
    if(trunListado){
        //Varibale que contendrá el contenido de la tabla
        let tablaLibros = `<table class= "table table-hover">
                                <thead>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Genero</th>
                                    <th>Estado</th>
                                </thead>
                                <tbody>`;

        //Recorrer el arreglo de objetos para que cada objeto sea una fila
        libros.map(libro => { tablaLibros += `<tr>
                                                <td>${libro.Id}</td>
                                                <td>${libro.Nombre}</td>
                                                <td>${libro.Genero}</td>
                                                <td>${libro.Estado}</td>
                                            </tr>`;
        });

        tablaLibros += `</tbody></table>`;
        listado.innerHTML = tablaLibros;
        trunListado = false;
    }else{
        listado.innerHTML = "";
        trunListado = true;
    }
});