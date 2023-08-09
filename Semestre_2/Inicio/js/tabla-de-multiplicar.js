function generarTabla(){
    num = document.getElementById("numero").value;
    num =  parseInt(num);
    let multi = '';

    for (var i = 1; i <= 10; i++){
        multi += num + "x" + i + "=" + num * i + "<br>";
    }
    tabla.innerHTML = multi
}