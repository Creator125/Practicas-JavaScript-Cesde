let usuarios = [];
let buscarUsername;

//Referenciando los id de regisros.html
let Username = document.querySelector("#username");
let Name = document.querySelector("#name");
let Role = document.querySelector("#role");
let Password = document.querySelector("#password");
let Keyword = document.querySelector("#keyword");
let mensaje = document.querySelector("#mensaje");
//Botones
let btnRegister = document.querySelector("#btnRegister");
let btnlogin = document.querySelector("#btnLogin");


btnRegister.addEventListener("click",() => {
    //Verificar que todos los datos estan diligentes
    mensaje.classList.remove("alert-danger");
    mensaje.classList.add("d-none");
    //Agregar o quitar clases
    mensaje.classList.remove("d-none");
    if(Username.value != "" && Name.value != "" && Role.value != "" && Password.value != "" && Keyword.value){
        //Verificar que el id no esxtita
        let buscarUsuario = usuarios.find(usuario => usuario.Usuario == username.value);

        if(buscarUsuario == undefined){ //No Encuentra el id
            //Algregar la clase alert-info
            mensaje.classList.add("alert-success");
            //Agregar el producto como objeto, al arreglo prroducto
            usuarios.push({
                Usuario: Username.value,
                Nombre: Name.value,
                Rol: Role.value,
                Cotrasena: Password.value,
                PalabraReservada: Keyword.value
            });
            mensaje.textContent = "Registro satisfactorio";
            console.log(usuarios);
            //Retardo de 3 segundos y que desaparesca el mensaje
            setTimeout(() => {
                mensaje.classList.remove("alert-success");
                mensaje.classList.add("d-none");
            }, 5000);

            // Guardar los datos actualizados en localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }else{ //Encontro el id
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "El usuario ya existe";
        }
   }else{
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-danger");
        mensaje.textContent = "Debes dilingeciar todos los datos";
   }
});

//Boton de iniciar sesion


/*
btnRegister.addEventListener("click", () => {
    mensaje.classList.remove("alert-danger");
    mensaje.classList.add("d-none");
    //Agregar o quitar clases
    mensaje.classList.remove("d-none");

    //Verificar que todos los datos estan diligentes
    if(reUsername.value !="" && reName.value !="" && reRole.value !=""&& rePassword.value !=""  && reKeyword.value !=""){
        //Verificar que el Usuario no exista
        let buscarUsuario = usuarios.find(usuario => usuario.Usuario == reUsername.value);

        if(buscarUsuario == undefined) {
            mensaje.classList.add("alert-success");

            usuarios.push({
                Usuario: reUsername.value,
                Nombre: reName.value,
                Rol: reRole.value,
                Cotrasena: rePassword.value,
                PalabraReservada: reKeyword.value
            });

            mensaje.textContent = "Registro exitoso";
            console.log(usuarios);
            //Retardo de 3 segundos y que desaparesca el mensaje
            setTimeout(() => {
                mensaje.classList.remove("alert-success");
                mensaje.classList.add("d-none");
            }, 5000);

            // Guardar los datos actualizados en localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }else{ //Encontro el usuario
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "El usuario ya está registrado";
        }
    }else{
        mensaje.classList.remove("d-none");
        mensaje.classList.add("alert-danger");
        mensaje.textContent = "Debes dilingeciar todos los datos";
    }
});
*/

/*
btnlogin.addEventListener("click", () => {
    if(username.value != undefined && password.value != undefined){
        let buscarUsuario = usuarios.find(user => user.Usuario == username.value);
        let usuarioGuardado = JSON.parse(localStorage.getItem("usuarios"));

        if(buscarUsuario != undefined){
            if(username.value == usuarioGuardado.Usuario && password.value == usuarioGuardado.Cotrasena){
                mensaje.textContent = `Eres ${usuarioGuardado.Usuario}`;

                setTimeout(() => {
                    mensaje.classList.remove("alert-success");
                    mensaje.classList.add("d-none");
                }, 5000);
            }else{
                mensaje.classList.remove("d-none");
                mensaje.classList.add("alert-danger");
                mensaje.textContent = "Usuario o contraseña incorrectos";
            }
        }else{
            mensaje.classList.remove("d-none");
            mensaje.classList.add("alert-danger");
            mensaje.textContent = "El usuario no existe";
        }
    }
});
*/