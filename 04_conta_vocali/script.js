/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

//funzione tradizionale

function checkVowels(myString) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    let stringVowels = [];

    for (let i = 0; i < myString.length; i++) {
        const char = myString[i].toLowerCase();
        if (vowels.includes(char)) {       // se il carattere è una vocale
            count++;                         // aumento il contatore
            stringVowels.push(char);              // salvo la vocale trovata
        }
    }

    return count+ " " + stringVowels;

}


// Invoca la funzione qui e stampa il risultato in console

const result = checkVowels(word);

console.log(result);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)