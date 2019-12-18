import POKEMON from './data/pokemon/pokemon.js'
console.log(POKEMON);
//llamo al botton buscar
const btnBuscar = document.getElementById("button-search-name");
//llamo al en¡vento de click del botton y le indico que ejcute la funcion
btnBuscar.addEventListener("click", function() {
    const namePokemon = document.getElementById("name-entered").value;
    
    let nameSearched = [];
    for (let i= 0; i < POKEMON.length; i++) {
        //le indico que de la cadena me compare el name y si es igual al introducido me de true
        if (POKEMON[i].name === namePokemon) {
            nameSearched.push(POKEMON[i].next_evolution);
        }  
        //imprimo el pokemon en el div
        //document.getElementById("root").innerHTML = nameSearched; 
    }
    console.log(nameSearched);
    let divPokeIndividual = ` 
         <div class="buscarTipos" id="poke">
            <table id="tamañoTabla">
                <thead>
                ${nameSearched.map(nameSearched => ` 
                <tr> 
                    <td>
                        ${nameSearched.name}
                    </td> 
                    <td>
                        ${nameSearched.type}
                    </td> 
                    <td>
                        ${nameSearched.next_evolution.name}
                    </td>
                </tr>`)}
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    
    `;
    let divPoke = document.createElement('divPokeIn');
    divPoke.innerHTML = divPokeIndividual;
    document.getElementById("hijo-recolector").appendChild(divPoke);
})
//.....................
//OTRA FORMA CON FILTER
//const btnBuscar = document.getElementById("search-name");   
let nameSearched = POKEMON.filter(elemento => (elemento.name === "Pikachu"));
console.log(nameSearched)
    //btnBuscar.addEventListener("click", function() {
        //const namePokemon = document.getElementById("name-entered").value;
//     console.log(namePokemon)
//     return POKEMON[i].name === namePokemon; 
// })
// .map (function (pokemon){
//     return pokemon.img
// })
// btnBuscar.addEventListener("click", nameSearched);
// console.log(nameSearched);
