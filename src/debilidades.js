import { filtrarPorDebilidades } from './data.js';
const seleccionPoder = document.getElementById('ordenar');//llamar a id y guardar en variable: SELECT
seleccionPoder.addEventListener('change', () => {//capturar evento change (cambiar) y ejecutar funcion
  const indexSeleccionado = seleccionPoder.selectedIndex;//sacar el indice o posicion seleccionado en el select
  const valorIndexSeleccionado = seleccionPoder.children[indexSeleccionado].innerHTML.trim();//capturar valor del indice
  const resultado = filtrarPorDebilidades(valorIndexSeleccionado);//
  limpiar();
  tabla(resultado);
});
function tabla(resultado){
    let tabla = 
    `     <div id="poder">
            <table style="width:300px;">
                <thead>
                    <tr>
                        <td style="background-color:blue;">Nombre</td>
                        <td style="background-color:blue;">Imagen</td>
                        <td style="background-color:blue;">Debilidades</td>
                    </tr>
                </thead>
                <tbody>
                    ${resultado.map(resultado => `
                        <tr> 
                            <td>
                                ${resultado.name}
                            </td> 
                            <td>
                                <img src="${resultado.img}" height="42" width="42">
                            </td>
                            <td>
                                ${resultado.weaknesses}
                            </td>
                        </tr>`)}
                </tbody>
            </table>
        </div>
    `
let divTabla = document.createElement('div');// crea el elemento div tabla
    divTabla.innerHTML = tabla; //pinta tabla html en el div
    document.body.appendChild(divTabla);//lleva el div al html
}
function limpiar(){
    let poderdiv = document.getElementById('poder');//se captura el div
    if (poderdiv != null){// si el div no es nulo, es decir, esta definido
      poderdiv.remove(poderdiv);//borra al div
    }
}
