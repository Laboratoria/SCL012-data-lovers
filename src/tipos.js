import { filtrarPorTipoPokemon } from './data.js';
const seleccionTipo = document.getElementById('seleccion'); //llamar a id y guardar en variable: SELECT
seleccionTipo.addEventListener('change', () => { //capturar evento change (cambiar) y ejecutar funcion
  const indexSeleccionado = seleccionTipo.selectedIndex; //sacar el indice o posicion seleccionado en el select
  const valorIndexSeleccionado = seleccionTipo.children[indexSeleccionado].innerHTML.trim();//capturar valor del indice
  const resultado = filtrarPorTipoPokemon(valorIndexSeleccionado);
  limpiar();
  tabla(resultado);
});
function tabla(resultado){
    let tabla = 
    `   <div class="buscarTipos" id="poke">
            <table id="tamañoTabla">
                <thead>
                    
                </thead>
                <tbody>
                    ${resultado.map(resultado => ` 
                        <tr> 
                            <td>
                                ${resultado.name}
                            </td> 
                            <td>
                                <img src="${resultado.img}" height="150" width="150">
                            </td>
                        </tr>`)}
                </tbody>
            </table>
        </div>
    `
    let divTabla = document.createElement('div');//crea el elemento div
    divTabla.innerHTML = tabla;//pinta tabla html en el div  
    document.getElementById("hijoDos").appendChild(divTabla);//lleva el div al html
}
function limpiar(){
    let pokediv = document.getElementById("poke");//se captura el div
    if (pokediv != null){// si el div no es nulo, es decir, esta definido
      pokediv.remove(pokediv);//borra al div
    }
}