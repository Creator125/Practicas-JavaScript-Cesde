let usuarios = [];

//Referenciando los id de regisros.html
let reUsername = document.querySelector("#reUsername");
let reName = document.querySelector("#reName");
let reRole = document.querySelector("#reRole");
let rePassword = document.querySelector("#rePassword");
let reKeyword = document.querySelector("#reKeyword");
let mensaje = document.querySelector("#mensaje");
//Botones
let btnRegister = document.querySelector("#btnRegister");
let btnlogin = document.querySelector("#btnLogin");

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