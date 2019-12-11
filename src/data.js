export const houseG = (potter) => {
  let houseGryffindor = potter.filter ( data =>
    data.house === "Gryffindor");
    return houseGryffindor;
  }

export const houseR = (potter) => {
    let houseRavenclaw = potter.filter ( data =>
      data.house === "Ravenclaw");
      return houseRavenclaw;
    }

export const houseS = (potter) => {
    let houseSlytherin = potter.filter ( data =>
      data.house === "Slytherin");
      return houseSlytherin;
    }
    
export const houseH = (potter) => {
    let houseHufflepuff = potter.filter ( data =>
       data.house === "Hufflepuff");
       return houseHufflepuff;
     }
// let houseRavenclaw = POTTER.filter(elemento => {
//   return elemento.house === "Ravenclaw";
// })
// console.log(houseRavenclaw);


//   let houseSlytherin = POTTER.filter( elemento => {
//    return elemento.house === "Slytherin";    
// })
// console.log(houseSlytherin);

// let houseHufflepuff = POTTER.filter (elemento => {
//  return elemento.house === "Hufflepuff";
// })
// console.log(houseHufflepuff);
