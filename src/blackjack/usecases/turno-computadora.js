// turno de la computadora
/**
 * @param {HTMLElement} puntosHTML elemento para mostrar los puntos
 * @param {number} puntosMinimos que la computadora necesita para ganar
 * @param {Array<string>} deck
 * @param {HTMLElement} divCartasComputadora elementos html para mostrar las cartas
 */
import {pedirCarta} from './pedir-carta'
import { valorCarta } from './valor-carta';
import { crearCarta } from './crear-carta';

 export const turnoComputadora = ( puntosMinimos , puntosHTML, deck = [], divCartasComputadora ) => {

    if(!puntosMinimos) throw new Error ('Puntos minimos son necesarios');
    if(!deck) throw new Error ('Deck es necesario')
    if(!puntosHTML) throw new Error ('puntosHTML es necesario')
    if(!divCartasComputadora) throw new Error ('divCartasComputadora es necesario')

    let puntosComputadora = 0

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

       
        
        // <img class="carta" src="assets/cartas/2C.png">
       let imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
