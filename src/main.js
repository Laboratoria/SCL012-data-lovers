 import {
   getPokemons,
   ordePokemons,
   ordeNumPokemons
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
   listenerPokemon();
 }

 // function for create card pokemons filter
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
 let detailPoke = [];
 const listenerPokemon = () => {
   const pokeAlone = document.getElementsByClassName('card-pokemon');
   for (let i = 0; i < pokeAlone.length; i += 1) {
     const alone = pokeAlone[i];
     alone.addEventListener('click', () => {
       renderPok(pokemonsFilters[i]);
     })
   }
   const renderPok = (pokemon) => {
     document.getElementById("lateral").innerHTML = '';
       const cardPoke = cardSide(pokemon);
       document.getElementById("lateral").appendChild(cardPoke);
     
   }
 }

 const cardSide = (pokemon) => {
   const cardRes = document.createElement("div");
   cardRes.className = "card-result";
   const imagePok = document.createElement("img");
   const namePok = document.createElement("name");
   const numPok = document.createElement("num");
   const typePok = document.createElement("type");
   const heightPok = document.createElement("heigth");
   const weightPok = document.createElement("weigth");
  const weakPok= document.createElement("weaknesses");
   imagePok.src = pokemon.img;
   namePok.innerHTML = pokemon.name;
   numPok.innerHTML = pokemon.num;
   typePok.innerHTML = pokemon.type;
   heightPok.innerHTML = pokemon.height;
   weightPok.innerHTML = pokemon.weight;
   weakPok.innerHTML = pokemon.weaknesses;
   cardRes.appendChild(imagePok);
   cardRes.appendChild(namePok);
   cardRes.appendChild(numPok);
   cardRes.appendChild(typePok);
   cardRes.appendChild(heightPok);
   cardRes.appendChild(weightPok);
   cardRes.appendChild(weakPok);
   return cardRes;
 }


 // function to hide infographics and show type buttons
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

 // function to order alphabetically
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

 // function to order numberical
 const btnOrderNum = document.getElementById("orderNum");
 btnOrderNum.addEventListener('click', () => {
   const listNumPokemons = ordeNumPokemons();
   document.getElementById("root").innerHTML = '';
   for (let i = 0; i < listNumPokemons.length; i += 1) {
     const pokemonNum = listNumPokemons[i];
     const card2 = createCard(pokemonNum);
     document.getElementById("root").appendChild(card2);
   }
 })

 // function for modal01
 const btnModal01 = document.getElementById("modal01");
 btnModal01.addEventListener('click', () => {
   btnModal01.style.display = "none";
 })

 const publish1 = document.getElementById("publish1");
 publish1.addEventListener("click", () => {
   btnModal01.style.display = "block";
 });

 // function for modal02
 const btnModal02 = document.getElementById("modal02");
 btnModal02.addEventListener('click', () => {
   btnModal02.style.display = "none";
 })

 const publish2 = document.getElementById("publish2");
 publish2.addEventListener("click", () => {
   btnModal02.style.display = "block";
 });

 // function for delete content
 const btnInicio = document.getElementById("inicio");
 btnInicio.addEventListener("click", () => {
   document.getElementById("root").innerHTML = '';
 })
