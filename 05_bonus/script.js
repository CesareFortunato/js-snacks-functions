/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const dayTime = 15;

// Dichiara la funzione qui.


function myGreeting(myName) {
    let Greetings;
    if (dayTime < 13) {
        Greetings = "buongiorno"
    }
    else if (dayTime > 17) {
        Greetings = "buonasera"
    }
    else{
         Greetings = "buon pomeriggio"
    }

    return Greetings + " " + myName
}



// Invoca la funzione qui e stampa il risultato in console

const result = myGreeting(name);

console.log(result);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.