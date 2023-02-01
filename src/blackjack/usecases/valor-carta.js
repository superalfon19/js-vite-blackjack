/**
 * Esta funcion extrae el valor de la carta
 * @param {string} carta 
 * @returns {number} retorna el valor de la carta 1 - 11
 */
export const valorCarta = ( carta ) => {
    if(!carta){throw 'tienes que asignarle la carta'}
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}