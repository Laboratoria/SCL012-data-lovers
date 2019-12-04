 import {
   getPokemons
 } from './data.js';

 let pokemonsFilters = [];

 const buttons = document.getElementsByClassName('btn-poke');

 for (let i = 0; i < buttons.length; i += 1) {
   const btn = buttons[i];
   btn.addEventListener('click', () => {
     pokemonsFilters = getPokemons(btn.id);
     renderPokemons();
   })
 }


 const renderPokemons = () => {
   document.getElementById('root').innerHTML = '';
   for (let i = 0; i < pokemonsFilters.length; i += 1) {
     const pokemon = pokemonsFilters[i];
     
     const cardPokemon = createCard(pokemon);
     document.getElementById('root').appendChild(cardPokemon);
   }
 }

 const createCard = (pokemon) => {
    const cardPokemon = document.createElement('div');
    cardPokemon.className = 'card-pokemon';
    const imagePokemon = document.createElement('img');
    const namePokemon = document.createElement('p');
    namePokemon.innerHTML = pokemon.name;
    imagePokemon.src = pokemon.img; 
    cardPokemon.appendChild(imagePokemon);
    cardPokemon.appendChild(namePokemon);
    return cardPokemon;
 }
 
 const btnTypePokem = document.getElementById("tipos");
 btnTypePokem.addEventListener('click', () => {

 })

