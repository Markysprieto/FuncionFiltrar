// Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.

let pokemon = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];
 
 //Funcion para filtrar los pokemones del tipo Fuego
 let tipoFuego = pokemon.filter(pokemones => pokemones.tipo === 'Fuego');
// Mostrar los resultados en consola
console.log("Pokémon de tipo Fuego:", tipoFuego);

