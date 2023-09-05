// kommentaar
/* 
kommentaar  
*/

let x = 1;
console.log("x: " + x)
x = 3;
console.log("x: " + x)

/* const y = 3;
console.log("y: " + y)
y = 5;
console.log("y: " + y) */

const Muutuja = 3;
const muutuja = 4;

console.log(muutuja, Muutuja);

let camelCase;

let p = 3.14; // number
let s = "John"; // string
let b = true; // boolaen, tõeväärtus
let n = null; // nullväärtus või tühi väärtus
let u = undefined; // muutuja, millel pole määratud väärtust
let symb = Symbol('id'); // üldiselt, meil seda pole vaja
let bi = 9007199254740991n; // väga suured täisarvud

let o = {
    name: 'John',
    age: 38
};
let ar = [1, 2, 3];
console.log(ar[1]);

let func = function() {
    console.log("Hello World!");
}

func();

let date = new Date();
console.log(typeof ar);
console.log(typeof date);
console.log(typeof b);

let ste = 'eee \'x';
let stx = "www \"x";
console.log(ste);
console.log(stx);

const sone1 = "Tere, ";
const sone2 = "maailm!";
let kokkuliidetud = sone1 + sone2;
console.log(kokkuliidetud);
console.log(sone1 + sone2);
console.log("Tere, " + "maailm!");

const nimi = "John";
const vanus = 23;
let dynamicString = `Tere, ${nimi}! Sa oled ${vanus} aastat vana.`;

console.log(dynamicString);
const num = 10;
let dynamicStringWithStatement = `Arv ${num} on ${num % 2 === 0 ? 'paaris' : 'paaritu'}`;
console.log(dynamicStringWithStatement);

var sone = "Tere, maailm";
var esimeneMark = sone[0];
console.log(esimeneMark);

console.log(sone.length); // sõne pikkus
console.log(sone.toUpperCase()); // kõik tähed on suured
console.log(sone.toLowerCase()); // kõik tähed on väiksed
console.log(sone.charAt(0)); // tagastab märgi, mis vastab määratud indeksile
console.log(sone.indexOf("maailm")); // tagastab esimese indeksi, kus otsitav väärtus esineb sõnas
console.log(sone.indexOf("kass")); // kui pole leitud, siis tagastab -1