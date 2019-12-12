import Pokemons from './data/pokemon/pokemon.js';

const filterType = (pokemon, type) => {
  const typeProcess = pokemon.type.map(t => t.toLowerCase());
  return typeProcess.indexOf(type) >= 0;
}

export const getPokemons = (type = undefined) => {
  if (!type) {
    return Pokemons;
  }
  // Convert type to lower to process
  const typeLower = type.toLowerCase();
  const res = [];
  for (let i = 0; i < Pokemons.length; i += 1) {
    const pokemon = Pokemons[i];
    const types = [];
    for (let j = 0;j < pokemon.type.length; j += 1) {
      types.push(pokemon.type[j].toLowerCase());
    }
    if (types.indexOf(typeLower) >= 0) {
      res.push(pokemon);
    }
  }
  return res;
};

//export const fetchPokemons = () => {
  //return fetch('./data/pokemon/pokemon.json');
//};

export const ordePokemons = (type = undefined) => {
    return getPokemons(type).sort((prev, next) => {
      if (prev.name > next.name) {
        return 1;
      } else if (prev.name < next.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }   