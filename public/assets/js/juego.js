// C = treboles
// H = heart
// D = Diamantes
// S = Espadas
// 
// 
// 
// escope sin nombre, funcion autoinvocada
// no tiene nombre asi que no se podra llamar directamente
// esta en algun lugar de memoria sin identificador por nombre

const miModulo = (()=>{         
    'use strict'

    let deck         = [];
    const tipos      = ['C', 'D' ,'H' ,'S'],
          especiales = ['A', 'J', 'Q', 'K'];
    // let puntosJugador = 0,
        // puntosComputadora = 0;

    let puntosJugadores = [];

    // Referencias del HTML

    const btnPedir = document.getElementById('btnPedir'),
          btnDetener = document.getElementById('btnDetener'),
          btnNuevo = document.getElementById('btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');
    
          

    // Esta funcion inicializa el juego
    const inicializarJuego =(numJugadores = 2)=>{
        deck = crearDeck();
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerHTML = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '' );
        btnDetener.disabled = false;
        btnPedir.disabled = false;
       

    }
    // esta funcion crea un nuevo deck
    const crearDeck =()=>{
        deck = [];

        for(let i =2; i<=10; i++){
            for(let tipo of tipos){
                deck.push(i + tipo);

            }
        }

        for(let tipo of tipos){          // va a barrer los tipos de carta y las cartas especiales y se van concatenar formando una carta 
            for(let esp of especiales){
                deck.push(esp + tipo);
            }

        }

        return _.shuffle(deck);
      
    }
    
    // Esta funcion me permite tomar una carta
    
    const pedirCarta = () =>{
        if(deck.length === 0){
            throw 'No hay cartas en el deck'
        }
        return deck.pop()
        
    }
    
    crearDeck();
   
    // console.log(pedirCarta());
    //const valorCarta = (carta) =>{  //En java script los strings pueden ser trabajados como arreglos
        // const valor = carta.substring(0, carta.length - 1);
        // let puntos;
        // if( isNaN(valor) ){
        //    puntos = (valor === 'A') ? 11 : 10;
        // }
        // puntos = (!isNaN(valor)) ? valor * 1 : '' 
        // console.log({puntos});
        // 
        // }


        // const valorCarta = (carta) =>{
            // const valor = carta.substring(0, carta.length - 1);
            // let puntos = '';
            // switch (valor) {
                // case 'A': puntos = 11 ;
                // break;
                        //  
                // case 'J': puntos = 10;
                // break;

                // case 'Q': puntos = 10;
                // break;

                // case 'K': puntos = 10
                // break;

                // default: puntos = valor * 1  ;          

            // }
            // console.log({puntos});
            // 
        // }
    // Esta funcion sirve para obtener el valor de la carta
    const valorCarta = (carta) =>{
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN( valor ))? // que retorne asi mismo                       // si es un numero pregunto por el valor y sino
            ( valor === 'A')? 11 : 10
            : valor * 1;

    }
    // turno 0: primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta , turno) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
            
    }
    // Esta funcion crea la imagen de la carta
    const crearCarta = (carta , turno) =>{
        const imgCarta = document.createElement('img');
        imgCarta.src = `cartas/${carta}.png`;
        imgCarta.classList.add('carta');
      divCartasJugadores[turno].append(imgCarta);
    }
    //Determina el ganador
    const determinarGanador = () =>{
        const [puntosMinimos , puntosComputadora] = puntosJugadores;
        setTimeout(()=>{
            if(puntosComputadora === puntosMinimos){
                alert('Nadie gana');
            }else if(puntosMinimos > 21){
                alert('Computadora gana');
            }else if(puntosComputadora > 21){
                alert('Jugador gana');
            }else{
                alert('Computadora gana')
            }
         
      }, 20)}
     // Turno de la computadora

     const turnoComputadora = (puntosMinimos) =>{
        let puntosComputadora = 0;

        do { 
            const carta = pedirCarta();
           puntosComputadora = acumularPuntos(carta , puntosJugadores.length - 1 );
            crearCarta(carta , puntosJugadores.length - 1);

        } while(puntosComputadora <= puntosMinimos && (puntosMinimos <= 21));
        determinarGanador()
    }

    // Eventos                                         
    btnPedir.addEventListener('click', ()=>{
        const carta = pedirCarta(),
            puntosJugador = acumularPuntos(carta , 0)
        
       crearCarta(carta , 0)
        
        if(puntosJugador > 21){
            console.warn('Lo siento perdiste');
            turnoComputadora(puntosJugador);
            btnPedir.disabled = true;
            
        } else if (puntosJugador === 21){
            turnoComputadora(puntosJugador);
            console.warn('Genial 21');
        }
        
    })

    btnDetener.addEventListener('click', ()=>{
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    })

    btnNuevo.addEventListener('click', ()=>{
        inicializarJuego();
        
        

    })

    return {
        nuevoJuego: inicializarJuego

    };

})();

// La sintaxis del evento tiene 2 argumentos el evento que quiero escuchar y luego la funcion// especial, la funcion dentro de una funcion es conocida como callback                                                            // o sea cuando el boton haga click va a disparar esa accion  // En el caso de los small es querySelectorAll y posicion 0 es el primer small y el 1 es el segundo                                             

(()=>{

})()








    
    
    
    
    

    

   
   
   
  

   
 



    





