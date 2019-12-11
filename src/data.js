import { type } from "os";
import potter from "./data/potter/potter";

/* Manejo de data */

// esta es una función de ejemplo

export const houseSlytherin = potter.filter(elemento => elemento.house === "Slytherin");
console.log (houseSlytherin);

/* export const houseSlytherin= POTTER.filter(type = houseSlytherin => 
  {if (!type) {
  return potter.house === "Slytherin";
}});
/*
/*
POTTER.filter(potter => {
  return potter.house === "Gryffindor";
  */