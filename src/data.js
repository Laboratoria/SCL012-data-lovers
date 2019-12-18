import POKEMON from './data/pokemon/pokemon.js';

export function filtrarPorTipoPokemon(TipoSeleccionado) {
  const TipoPokemonFiltrado = POKEMON.filter((pokemon) => (pokemon.type.includes(TipoSeleccionado)));
  return TipoPokemonFiltrado;
}
export function filtrarPorDebilidades(eleccionDecaracteristica) {
  const resultado = [];
  if (eleccionDecaracteristica=="Más débiles"){
    for(let i = 0; i <POKEMON.length; i++){
      if (POKEMON[i].weaknesses.length >= 5){
        resultado.push(POKEMON[i]);
      }
    
    }
  }else{
    for(let j = 0; j <POKEMON.length; j++){
      if(POKEMON[j].weaknesses.length <=2){
        resultado.push(POKEMON[j]);
      }
    }
  }
  return resultado;
}

export function buscarPokemonPorNombre(eleccionDecaracteristica) {
let nameSearched = []; // se crea un arreglo vacio 
    for (let i= 0; i < POKEMON.length; i++) {
        // recorrer para que vaya comparando el name y si es igual al introducido retorne true
        if (POKEMON[i].name === namePokemon) {
            nameSearched.push(POKEMON[i]); // al arreglo vacio se le agrega el arreglo del pokemon
        }  
    }

    nameSearched





export function buscarEvoluciones(TipoSeleccionado) {
  const TipoPokemonFiltrado = POKEMON.filter((pokemon) => (pokemon.type.includes(TipoSeleccionado)));
  return TipoPokemonFiltrado;
}


