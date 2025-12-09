/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array 
contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const character = "A";
// Dichiara la funzione qui.

//funzione tradizionale

/* function buildArray(myArray, myChar){
    const finalArray = [];
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i][0] === myChar){
            finalArray.push(myArray[i]);
        }
    }
    return finalArray;

} */

//funzione arrow

const buildArray = (myArray, myChar) => {
    const finalArray = [];
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i][0] === myChar){
            finalArray.push(myArray[i]);
        }
    }
    return finalArray;

}


// Invoca la funzione qui e stampa il risultato in console

const result = buildArray(names, character);

console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]