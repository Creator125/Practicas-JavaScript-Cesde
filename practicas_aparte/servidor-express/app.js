const express = require("express");
const path = require("path");

const app = express();

app.get("/", (reg, res) =>{ //Obteniendo el archivo en el servidor
    //res.send("Hola mundo");
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.listen(4000, ()=> {
    console.log("Servidor corriendo en el puerto ", 4000);
});