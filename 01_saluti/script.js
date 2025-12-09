/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome
 fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

//funzione tradizionale

/* function myGreeting(myName){
    return "Ciao " + myName;
}  */

    //funzione arrow

const myGreeting = (myName) => "Ciao " + myName;


// Invoca la funzione qui e stampa il risultato in console

console.log(myGreeting(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
