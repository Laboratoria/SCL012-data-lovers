
/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'*/
 import POTTER from './data/potter/potter.js';
/*console.log(POTTER);
/*
 * console.log(POKEMON);
 * console.log(LoL);
 console.log(POTTER)
*/
console.log(POTTER)
let btnS= document.getElementById("slytherin");
btnS.addEventListener('click', ()=>{
    const Slytherin= document.getElementById('slytherin').value;
    console.log('Slytherin')
})

let btnG= document.getElementById("gryffindor");
btnG.addEventListener('click', ()=>{
    const Gryffindor= document.getElementById('gryffindor').value;
    console.log('Gryffindor')
})

let btnG= document.getElementById("slytherin");
btnG.addEventListener("click, ()")
let houseGryffindor = potter.filter(potter => {
    return potter.house === "Gryffindor";
})
console.log(houseGryffindor);

let houseRavenclaw = potter.filter(potter =>{
    return potter.house === "Ravenclaw";
})
console.log(houseRavenclaw);

let houseSlytherin = potter.filter( potter =>{
    return potter.house === "Slytherin";    
})
console.log(houseSlytherin);

let houseHufflepuff = potter.filter (potter =>{
    return potter.house === "Hufflepuff";
})
console.log(houseHufflepuff)

