var numeroMaximo = (prompt("dame: "));

function generarNumero(){
    return Math.round(Math.random() * numeroMaximo);
}

console.log(generarNumero());