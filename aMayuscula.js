let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];

// Función para convertir a mayúsculas
function convertirAMayusculas(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i].toUpperCase());
    }
    return resultado;
}

// Usar la función
let pokemonMayusculas = convertirAMayusculas(pokemon);
console.log(pokemonMayusculas);
