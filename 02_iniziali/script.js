/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni 
parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.

//funzione tradizionale

/* function firstArray(myArray){
    const resultArray = [];

    for (let i = 0; i < myArray.length; i++) {
  resultArray.push(myArray[i][0]);
}

return resultArray;

} */


//funzione arrow

const firstArray = (myArray) => {
    const resultArray = [];

    for (let i = 0; i < myArray.length; i++) {
  resultArray.push(myArray[i][0]);
}

return resultArray;

}


// Invoca la funzione qui e stampa il risultato in console
const result = firstArray(names);

console.log(result);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]