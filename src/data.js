import Pokemons from './data/pokemon/pokemon.js';

export const getPokemons = (type = undefined) => {
  if (!type) {
    return Pokemons;
  }
  return Pokemons.filter(p => p.type.map(t => t.toLowerCase()).indexOf(type.toLowerCase()) >= 0);
};

export const fetchPokemons = () => {
  return fetch('./data/pokemon/pokemon.json');
};