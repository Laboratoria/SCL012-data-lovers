 import {
   getPokemons,
   ordePokemons
 } from './data.js';

 let pokemonsFilters = [];

 const buttons = document.getElementsByClassName("btn-poke");

 for (let i = 0; i < buttons.length; i += 1) {
   const btn = buttons[i];
   btn.addEventListener('click', () => {
     pokemonsFilters = getPokemons(btn.id);
     renderPokemons();
   })
 }

 const renderPokemons = () => {
   document.getElementById("root").innerHTML = '';
   for (let i = 0; i < pokemonsFilters.length; i += 1) {
     const pokemon = pokemonsFilters[i];
     const cardPokemon = createCard(pokemon);
     document.getElementById("root").appendChild(cardPokemon);
   }
 }

 const createCard = (pokemon) => {
   const cardPokemon = document.createElement('div');
   cardPokemon.className = 'card-pokemon';
   const imagePokemon = document.createElement('img');
   const namePokemon = document.createElement('p');
   const numPokemon = document.createElement('num');
   namePokemon.innerHTML = pokemon.name;
   numPokemon.innerHTML = pokemon.num;
   imagePokemon.src = pokemon.img;
   cardPokemon.appendChild(imagePokemon);
   cardPokemon.appendChild(namePokemon);
   cardPokemon.appendChild(numPokemon);
   return cardPokemon;
 }
 //function for none images
 const btnTypePokemons = document.getElementById("tipos");
 btnTypePokemons.addEventListener('click', () => {
   const images = document.getElementsByClassName("publish-images");
   for (let i = 0; i < images.length; i += 1) {
     const resImages = images[i];
     resImages.style.display = "none";
     const btnPokes = document.getElementsByClassName("btn-pokes");
     for (let j = 0; j < btnPokes.length; j += 1) {
      btnPokes[j].style.display = "block";
     }
   }
 })

 const btnOrderAlf = document.getElementById("orderAlf");
 btnOrderAlf.addEventListener('click', () => {
   const listPokemons = ordePokemons();
   document.getElementById("root").innerHTML = '';
   for (let i = 0; i < listPokemons.length; i += 1) {
     const pokemon = listPokemons[i];
     const card = createCard(pokemon);
     document.getElementById("root").appendChild(card);
   }
 })



 // function for modal
 const btnModal01 = document.getElementById("modal01");
 btnModal01.addEventListener('click', () => {
   btnModal01.style.display = "none";
 })

 const publish1 = document.getElementById("publish1");
 publish1.addEventListener("click", () => {
   btnModal01.style.display = "block";
 });
