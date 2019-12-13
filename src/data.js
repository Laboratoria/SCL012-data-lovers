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

export const sucia = (potter) => {
  let sangreSucia = potter.filter ( data =>
    data.ancestry === "muggleborn");
    return sangreSucia;
}

export const pura = (potter) => {
  let sangrePura = potter.filter (data =>
    data.ancestry === "pure-blood");
    return sangrePura;
}

export const squib = (potter) => {
  let squibP = potter.filter (data =>
    data.ancestry === "squib");
    return squibP;
}

export const mestizo = (potter) => {
  let mestizoP = potter.filter (data=>
    data.ancestry === "half-blood");
    return mestizoP;
}

