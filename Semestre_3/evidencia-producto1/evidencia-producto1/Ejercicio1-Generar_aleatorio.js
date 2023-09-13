let generarNumeroAleatorioEntre = (min, max)=> {
    // Función interna que genera un número aleatorio en el rango (min, max)
    let generarAleatorio = () => {
        return Math.random() * (max - min) + min;
    }

    const numeroAleatorio = generarAleatorio();
    const redondeado = Math.round(numeroAleatorio);

    return redondeado;
}

const minimo = 1;
const maximo = 10;
const numeroAleatorio = generarNumeroAleatorioEntre(minimo, maximo);

console.log(`Número aleatorio entre ${minimo} y ${maximo}: ${numeroAleatorio}`);
