import {buscarPokemonPorNombre} from './data.js';

const btnBuscar = document.getElementById("seleccion");// llamar al id del select
btnBuscar.addEventListener("change", function() { // escuchar el evento para indicarle que ejecute la funcion
    const namePokemon = document.getElementById("seleccion").value; // rescata el nombre del pokemon a buscar
    const evolucionesPokemon = buscarPokemonPorNombre(namePokemon);

    limpiar ();

    let divPokeIndividual = ` 
         <div class="buscarTipos" id="poke">
            <table id="tamañoTabla">
                <thead>
                ${evolucionesPokemon.map(evolucionesPokemon => ` 
                <tr> 
                    <td>
                        ${evolucionesPokemon.name}
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

function limpiar() { 
    let pokediv = document.getElementById("poke");
    if (pokediv != null){
      pokediv.remove(pokediv);
    }
}