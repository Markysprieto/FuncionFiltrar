// Función para generar la secuencia de Fibonacci entre 0 y 1000
function generarFibonacci() {
    let fibo = [0, 1]; // Inicializamos la secuencia con los dos primeros números
    while (true) {
        let siguiente = fibo[fibo.length - 1] + fibo[fibo.length - 2];
        if (siguiente > 1000) break; // Detenemos la secuencia si supera 1000
        fibo.push(siguiente);
    }
    return fibo;
}

// Función para filtrar números pares
function obtenerPares(numeros) {
    let pares = [];
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            pares.push(numero);
        }
    }
    return pares;
}

// Función para filtrar números impares
function obtenerImpares(numeros) {
    let impares = [];
    for (let numero of numeros) {
        if (numero % 2 !== 0) {
            impares.push(numero);
        }
    }
    return impares;
}

// Generar la secuencia de Fibonacci
let fibonacci = generarFibonacci();
console.log("Secuencia de Fibonacci entre 0 y 1000:", fibonacci);

// Filtrar y mostrar números pares
let pares = obtenerPares(fibonacci);
console.log("Números pares en la secuencia de Fibonacci:", pares);

// Filtrar y mostrar números impares
let impares = obtenerImpares(fibonacci);
console.log("Números impares en la secuencia de Fibonacci:", impares);
