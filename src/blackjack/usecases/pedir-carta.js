/**Esta funcion obtiene la ultima carta del deck
 * @param {Array<string>} deck es un arreglo de string
 * @returns{string} Retorna la ultima carta obtenida del deck
 */

// Esta función me permite tomar una carta
 export const pedirCarta = ( deck ) => {
  

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


