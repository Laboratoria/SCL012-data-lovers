/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'*/
 import POTTER from './data/potter/potter.js';
import potter from './data/potter/potter.js';
/*console.log(POTTER);
/*
 * console.log(POKEMON);
 * console.log(LoL);
 console.log(POTTER)
*/
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

/*console.log(Object.values(casas));*/
