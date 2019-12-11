
 import potter from './data/potter/potter.js'
  //filtrar personajes por casas
  import {houseG} from './data.js';
  const seleccionadoG = houseG(potter)
  console.log(seleccionadoG)
  import {houseR} from './data.js';
  const seleccionadoR = houseR(potter)
  import {houseS} from './data.js';
  const seleccionadoS = houseS(potter)
  import {houseH} from './data.js';
  const seleccionadoH = houseH(potter)

  document.getElementById("gryffindor").addEventListener("click", ()=>{
      let houseGryffindor = seleccionadoG;
      for (let i=0; i <houseGryffindor.length; i++){
          container.innerHTML += `<div class = "info">
          ${houseGryffindor[i].name}
          </div>`
          console.log(houseGryffindor)
      }
  })
  
  document.getElementById("ravenclaw").addEventListener("click", ()=>{
    let houseRavenclaw = seleccionadoR;
    for (let i=0; i <houseRavenclaw.length; i++){
        console.log(houseRavenclaw)
    }
  })

  document.getElementById("slytherin").addEventListener("click", ()=>{
    let houseSlytherin = seleccionadoS;
    for (let i=0; i <houseSlytherin.length; i++){
        console.log(houseSlytherin)
    }
  })

  document.getElementById("hufflepuff").addEventListener("click", ()=>{
    let houseHufflepuff = seleccionadoH;
    for (let i=0; i <houseHufflepuff.length; i++){
        console.log(houseHufflepuff)
    }
  })
