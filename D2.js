/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 8;
let num2 = 10;

if (num1 > num2) {
  console.log(num1 + " è > di " + num2);
} else {
  console.log(num1 + " è < di " + num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num = 16;

if (num !== 5) {
  console.log(num + " " + "is not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (num2 % 5 === 0) {
  console.log(num2 + " " + "è divisibile");
} else {
  console.log(num2 + " " + "non è divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (num1 === 8 || num2 === 8) {
  console.log(num1 + " " + "è uguale a 8" || num2 + " " + "è uguale a 8");
} else if (num1 + num2 === 8 || num1 - num2 === 8) {
  console.log("i numeri sono diversi da 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let spedition = 10;
let ammontToPay = totalShoppingCart + spedition;

if (totalShoppingCart > 50) {
  console.log(totalShoppingCart + " " + "la spedizione è gratuita");
} else {
  console.log("Totale da pagare è" + " " + ammontToPay);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let discountBlackFriday = (totalShoppingCart * 20) / 100;
let newAmmontToPay = totalShoppingCart - discountBlackFriday;
console.log(newAmmontToPay);

if (newAmmontToPay > 50) {
  console.log("il totale è" + " " + newAmmontToPay + " " + "la spedizione è gratuita");
} else {
  console.log("il totale è" + " " + newAmmontToPay + " " + "la spedizione non è gratuita");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 25;
let b = 3;
let c = 18;
let maggiore = "";
let minore = "";
let intermedio = "";

if (a > b && a > c) {
  maggiore = a;
  if (b > c) {
    minore = c;
    intermedio = b;
  } else {
    minore = b;
    intermedio = c;
  }
}
if (b > a && b > c) {
  maggiore = b;
  if (a > c) {
    intermedio = a;
    minore = c;
  } else {
    minore = a;
    intermedio = c;
  }
}
if (c > a && c > b) {
  maggiore = c;
  if (b > a) {
    intermedio = b;
    minore = a;
  } else {
    minore = b;
    intermedio = a;
  }
}
console.log("L ordine dei numeri secondo il valore è:" + maggiore + ", " + intermedio + ", " + minore);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let elemento = 20;

if (typeof elemento === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (elemento % 2 === 0) {
  console.log("è pari");
} else {
  console.log("è dispari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*\
  /* SCRIVI QUI LA TUA RISPOSTA */

let value = 4;

if (value > 5 && value < 10) {
  console.log("Minore di 10");
} else if (value < 5) {
  console.log("Minore di 5");
} else if (value === 10) {
  console.log("Uguale a 10");
} else {
  console.log("è maggiore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".*/

me.skills.pop();
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numbers = [];

numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers.splice(-1, 9, 100);
console.log(numbers);
