import POKEMON from './data/pokemon/pokemon.js';

export function filtrarPorTipoPokemon(TipoSeleccionado) {
  const TipoPokemonFiltrado = POKEMON.filter((pokemon) => (pokemon.type.includes(TipoSeleccionado)));
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

export function buscarPokemonPorNombre(nombreAbuscar) {
let nombreBuscado = []; // se crea un arreglo vacio 
    for (let i= 0; i < POKEMON.length; i++) {
        // recorrer para que vaya comparando el name y si es igual al introducido retorne true
        if (POKEMON[i].name === nombreAbuscar) {
          nombreBuscado.push(POKEMON[i]); // al arreglo vacio se le agrega el arreglo del pokemon
        }  
    }
    return buscarEvoluciones(nombreBuscado);
  }

function buscarEvoluciones(nombreBuscado) { // funcion que buscara solo las evoluciones
  let arregloEvoluciones = []; // arreglo vacio que almacenara las evoluciones
  for (let i= 0; i < nombreBuscado.length; i++) { // primer for, que recorre los datos del pokemon
      if (nombreBuscado[i].next_evolution)  {
        for(let j = 0; j < nombreBuscado[i].next_evolution.length; j++ ){ // segundo for que recorrera el arreglo de evoluciones
      arregloEvoluciones.push(nombreBuscado[i].next_evolution[j]); // se guarda en el arreglo vacio la next evolucion
    }
  }
      if (nombreBuscado[i].prev_evolution)  {
        for(let j = 0; j < nombreBuscado[i].prev_evolution.length; j++ ){ // segundo for que recorrera el arreglo de evoluciones
          arregloEvoluciones.push(nombreBuscado[i].prev_evolution[j]); // se guarda en el arreglo vacio la prev evolucion
        }
      } 
  }
  return arregloEvoluciones; // se retorna el arreglo de evoluciones para que lo pueda trabajar en el dom
}

