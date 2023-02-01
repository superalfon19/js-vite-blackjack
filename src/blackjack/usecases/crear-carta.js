import { pedirCarta, valorCarta, turnoComputadora  } from "./";
/**
 * La funcion crea una carta
 * @param {number} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */

  export  const crearCarta = (carta )=>{

    if(!carta) throw new Error ('La carta es necesaria')
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
   
    return imgCarta;


}