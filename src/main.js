
 import potter from './data/potter/potter.js'
  //pagina dos
  import {houseG} from './data.js';
  const seleccionadoG = houseG(potter)
  console.log(seleccionadoG)
  import {houseR} from './data.js';
  const seleccionadoR = houseR(potter)
  import {houseS} from './data.js';
  const seleccionadoS = houseS(potter)
  import {houseH} from './data.js';
  const seleccionadoH = houseH(potter)
  // pagina tres
  import {sucia} from './data.js';
  const seleccionadoSucia = sucia(potter)
  import {pura} from './data.js';
  const seleccionadoPura = pura(potter)
  import {squib} from './data.js';
  const seleccionadoSquib = squib(potter)
  import {mestizo} from './data.js';
  const seleccionadoMestizo = mestizo(potter)



  document.getElementById("gryffindor").addEventListener("click", ()=>{
      let houseGryffindor = seleccionadoG;
      for (let i=0; i <houseGryffindor.length; i++){
          personajes.innerHTML += 
          `<div class = "info">
           <img class="imagen" src= ${houseGryffindor[i].image}>
           <li class= "nombre" >Nombre: ${houseGryffindor[i].name}
           <li class= "descripcion" >Especie: ${houseGryffindor[i].species}
           <li class= "descripcion"> Casa: ${houseGryffindor[i].house}
           <li class= "descripcion"> Linaje: ${houseGryffindor[i].ancestry}
           <li class= "descripcion"> Varita: ${houseGryffindor[i].wand.wood} ${houseGryffindor[i].wand.core} ${houseGryffindor[i].wand.length}
           <li class= "descripcion"> Cumpleaños: ${houseGryffindor[i].dateOfBirth}
           </div>`
          console.log(houseGryffindor)
      }
  })
  
  document.getElementById("ravenclaw").addEventListener("click", ()=>{
    let houseRavenclaw = seleccionadoR;
    for (let i=0; i <houseRavenclaw.length; i++){
      personajes.innerHTML += `<div class = "info">
       <img class="imagen" src= ${houseRavenclaw[i].image}>
       <li class= "nombre" >Nombre: ${houseRavenclaw[i].name}
       <li class= "descripcion" >Especie: ${houseRavenclaw[i].species}
       <li class= "descripcion"> Casa: ${houseRavenclaw[i].house}
       <li class= "descripcion"> Linaje: ${houseRavenclaw[i].ancestry}
       <li class= "descripcion"> Varita: ${houseRavenclaw[i].wand.wood} ${houseRavenclaw[i].wand.core} ${houseRavenclaw[i].wand.length}
       <li class= "descripcion"> Cumpleaños: ${houseRavenclaw[i].dateOfBirth}
          </div>`
        console.log(houseRavenclaw)
    }
  })

  document.getElementById("slytherin").addEventListener("click", ()=>{
    let houseSlytherin = seleccionadoS;
    for (let i=0; i <houseSlytherin.length; i++){
      personajes.innerHTML += `<div class = "info">
      <img class="imagen" src= ${houseSlytherin[i].image}>
      <li class= "nombre" >Nombre: ${houseSlytherin[i].name}
      <li class= "descripcion" >Especie: ${houseSlytherin[i].species}
      <li class= "descripcion"> Casa: ${houseSlytherin[i].house}
      <li class= "descripcion"> Linaje: ${houseSlytherin[i].ancestry}
      <li class= "descripcion"> Varita: ${houseSlytherin[i].wand.wood} ${houseSlytherin[i].wand.core} ${houseSlytherin[i].wand.length}
      <li class= "descripcion"> Cumpleaños: ${houseSlytherin[i].dateOfBirth}
          </div>`
        console.log(houseSlytherin)
    }
  })

  document.getElementById("hufflepuff").addEventListener("click", ()=>{
    let houseHufflepuff = seleccionadoH;
    for (let i=0; i <houseHufflepuff.length; i++){
      personajes.innerHTML += `<div class = "info">
      <img class="imagen" src= ${houseHufflepuff[i].image}>
      <li class= "nombre" >Nombre: ${houseHufflepuff[i].name}
      <li class= "descripcion" >Especie: ${houseHufflepuff[i].species}
      <li class= "descripcion"> Casa: ${houseHufflepuff[i].house}
      <li class= "descripcion"> Linaje: ${houseHufflepuff[i].ancestry}
      <li class= "descripcion"> Varita: ${houseHufflepuff[i].wand.wood} ${houseHufflepuff[i].wand.core} ${houseHufflepuff[i].wand.length}
      <li class= "descripcion"> Cumpleaños: ${houseHufflepuff[i].dateOfBirth}
          </div>`
        console.log(houseHufflepuff)
    }
  })

  // por ascendencia

document.getElementById("sangreSucia").addEventListener("click", ()=>{
  let muggleborn = seleccionadoSucia;
  for (let i=0; i<muggleborn.length; i++){
    personajes.innerHTML += `<div class = "info">
    <img class="imagen" src= ${muggleborn[i].image}>
    <li class= "nombre" >Nombre: ${muggleborn[i].name}
    <li class= "descripcion" >Especie: ${muggleborn[i].species}
    <li class= "descripcion"> Casa: ${muggleborn[i].house}
    <li class= "descripcion"> Linaje: ${muggleborn[i].ancestry}
    <li class= "descripcion"> Varita: ${muggleborn[i].wand.wood} ${muggleborn[i].wand.core} ${muggleborn[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${muggleborn[i].dateOfBirth}
          </div>`
    console.log(muggleborn)
  }
})

document.getElementById("sangrePura").addEventListener("click", ()=>{
  let pureblood = seleccionadoPura;
  for (let i=0; i<pureblood.length; i++){
    personajes.innerHTML += `<div class = "info">
    <img class="imagen" src= ${pureblood[i].image}>
    <li class= "nombre" >Nombre: ${pureblood[i].name}
    <li class= "descripcion" >Especie: ${pureblood[i].species}
    <li class= "descripcion"> Casa: ${pureblood[i].house}
    <li class= "descripcion"> Linaje: ${pureblood[i].ancestry}
    <li class= "descripcion"> Varita: ${pureblood[i].wand.wood} ${pureblood[i].wand.core} ${pureblood[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${pureblood[i].dateOfBirth}
          </div>`
    console.log(pureblood)
  }
}
)

document.getElementById("squib").addEventListener("click",()=>{
let squib= seleccionadoSquib;
for (let i=0; i<squib.length; i++){
  personajes.innerHTML += `<div class = "info">
  
  <img class="imagen" src= ${squib[i].image}>
  <li class= "nombre" >Nombre: ${squib[i].name}
  <li class= "descripcion" >Especie: ${squib[i].species}
  <li class= "descripcion"> Casa: ${squib[i].house}
  <li class= "descripcion"> Linaje: ${squib[i].ancestry}
  <li class= "descripcion"> Varita: ${squib[i].wand.wood} ${squib[i].wand.core} ${squib[i].wand.length}
  <li class= "descripcion"> Cumpleaños: ${squib[i].dateOfBirth}

          </div>`
  console.log(squib)
}

})

document.getElementById("mestizo").addEventListener("click", ()=>{
  let mestizo = seleccionadoMestizo;
  for (let i=0; i<mestizo.length; i++){
    personajes.innerHTML += `<div class = "info">
    <img class="imagen" src= ${mestizo[i].image}>
    <li class= "nombre" >Nombre: ${mestizo[i].name}
    <li class= "descripcion" >Especie: ${mestizo[i].species}
    <li class= "descripcion"> Casa: ${mestizo[i].house}
    <li class= "descripcion"> Linaje: ${mestizo[i].ancestry}
    <li class= "descripcion"> Varita: ${mestizo[i].wand.wood} ${mestizo[i].wand.core} ${mestizo[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${mestizo[i].dateOfBirth}
          </div>`
    console.log(mestizo)
  }
})

