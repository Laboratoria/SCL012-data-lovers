
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
  // pagina tres
  import {sucia} from './data.js';
  const seleccionadoSucia = sucia(potter)
  import {pura} from './data.js';
  const seleccionadoPura = pura(potter)
  import {squib} from './data.js';
  const seleccionadoSquib = squib(potter)
  import {mestizo} from './data.js';
  const seleccionadoMestizo = mestizo(potter)
  // pagina cuatro
  import {vivo} from './data.js';
  const seleccionadoVivo = vivo(potter)
  import {muerto} from './data.js';
  const seleccionadoMuerto = muerto(potter)



  document.getElementById("gryffindor").addEventListener("click", ()=>{
      let houseGryffindor = seleccionadoG;
      for (let i=0; i <houseGryffindor.length; i++){
          personajes.innerHTML += `<div class = "info">
          ${houseGryffindor[i].name}
          </div>`
          console.log(houseGryffindor)
      }
  })
  
  document.getElementById("ravenclaw").addEventListener("click", ()=>{
    let houseRavenclaw = seleccionadoR;
    for (let i=0; i <houseRavenclaw.length; i++){
      personajes.innerHTML += `<div class = "info">
          ${houseRavenclaw[i].name}
          </div>`
        console.log(houseRavenclaw)
    }
  })

  document.getElementById("slytherin").addEventListener("click", ()=>{
    let houseSlytherin = seleccionadoS;
    for (let i=0; i <houseSlytherin.length; i++){
      personajes.innerHTML += `<div class = "info">
          ${houseSlytherin[i].name}
          </div>`
        console.log(houseSlytherin)
    }
  })

  document.getElementById("hufflepuff").addEventListener("click", ()=>{
    let houseHufflepuff = seleccionadoH;
    for (let i=0; i <houseHufflepuff.length; i++){
      personajes.innerHTML += `<div class = "info">
          ${houseHufflepuff[i].name}
          </div>`
        console.log(houseHufflepuff)
    }
  })

  // por ascendencia

document.getElementById("sangreSucia").addEventListener("click", ()=>{
  let muggleborn = seleccionadoSucia;
  for (let i=0; i<muggleborn.length; i++){
    personajes.innerHTML += `<div class = "info">
          ${muggleborn[i].name}
          </div>`
    console.log(muggleborn)
  }
})

document.getElementById("sangrePura").addEventListener("click", ()=>{
  let pureblood = seleccionadoPura;
  for (let i=0; i<pureblood.length; i++){
    personajes.innerHTML += `<div class = "info">
          ${pureblood[i].name}
          </div>`
    console.log(pureblood)
  }
}
)

document.getElementById("squib").addEventListener("click",()=>{
let squib= seleccionadoSquib;
for (let i=0; i<squib.length; i++){
  personajes.innerHTML += `<div class = "info">
          ${squib[i].name}
          </div>`
  console.log(squib)
}

})

document.getElementById("mestizo").addEventListener("click", ()=>{
  let mestizo = seleccionadoMestizo;
  for (let i=0; i<mestizo.length; i++){
    personajes.innerHTML += `<div class = "info">
          ${mestizo[i].name}
          </div>`
    console.log(mestizo)
  }
})

// por estado

document.getElementById("vivo").addEventListener("click",()=>{
  let vivo = seleccionadoVivo;
  for (let i=0; i<vivo.length; i++){
    personajes.innerHTML += `<div class = "info">
          ${vivo[i].name}
          </div>`
    console.log(vivo)
  }
}
)

document.getElementById("muerto").addEventListener("click",()=>{
  let muerto = seleccionadoMuerto;
  for (let i=0; i<vivo.length; i++){
    personajes.innerHTML += `<div class = "info">
          ${muerto[i].name}
          </div>`
    console.log(muerto)
  }
})