import POKEMON from './data/pokemon/pokemon.js';
export function filtrarPorTipoPokemon(TipoSeleccionado) {
  const TipoPokemonFiltrado = POKEMON.filter((pokemon) => (pokemon.type == TipoSeleccionado));
  return TipoPokemonFiltrado;
}
export function filtrarPorDebilidades(eleccionDecaracteristica) {
  const resultado = [];//array vacio para que me integre el resultado
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