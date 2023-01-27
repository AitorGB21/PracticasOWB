var numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var pares = new Array();

for (let index = 0; index < numeros.length; index++) {
    if ( numeros[index] % 2 == 0) {
        pares.push(numeros[index])
    }
}

console.log(pares)

var suma = 0;

for (let index = 0; index < numeros.length; index++){
    suma += numeros[index];
}

console.log(suma);