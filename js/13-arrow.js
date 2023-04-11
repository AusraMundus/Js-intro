console.clear();

/*
ARROW function - rodyklines funkcijos

Skirtingi budai uzrasyti funcija.
*/


const pirmas = 7;
const antras = 5;

// function declaration . tipinis variantas, kaip galima uzrasyti funkcija.

function sum (a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${sum(pirmas, antras)}`);

function diff (a, b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${diff(pirmas, antras)}`);

function div (a, b) {
    return a / b;
}
console.log(`${pirmas} / ${antras} = ${div(pirmas, antras)}`);

function multi (a, b) {
    return a * b;
}
console.log(`${pirmas} * ${antras} = ${multi(pirmas, antras)}`);

function square (a) {
    return a * a;
}
console.log(`${pirmas} ** 2 = ${square(pirmas)}`);

console.log('---------------------------');

// anonimous function
const diff2 = function (a, b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${diff2(pirmas, antras)}`);

const sum2 = function (a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${sum2(pirmas, antras)}`);

const div2 = function (a, b) {
    return a / b;
}
console.log(`${pirmas} / ${antras} = ${div2(pirmas, antras)}`);

const multi2 = function (a, b) {
    return a * b;
}
console.log(`${pirmas} * ${antras} = ${multi2(pirmas, antras)}`);

const square2 = function (a) {
    return a * a;
}
console.log(`${pirmas} ** 2 = ${square2(pirmas)}`);

console.log('---------------------------');

// arrow function (rodykline funkcija)
const div3 = (a, b) => {
    return a / b;
}
console.log(`${pirmas} / ${antras} = ${div3(pirmas, antras)}`);

const multi3 = (a, b) => {
    return a * b;
}
console.log(`${pirmas} * ${antras} = ${multi3(pirmas, antras)}`);

console.log('---------------------------');

// jeigu logikos bloke yra TIK 1 salyga (statement)
// galime nerasyti: {return}

const multi4 = (a, b) => a * b;
console.log(`${pirmas} * ${antras} = ${multi4(pirmas, antras)}`);

const square3 = (a) => a * a;
console.log(`${pirmas} ** 2 = ${square3(pirmas)}`);

console.log('---------------------------');

// jeigu parametru bloke yra TIK 1 parametras
// galima nerasyti: ()
const square4 = a => a * a;
console.log(`${pirmas} ** 2 = ${square4(pirmas)}`);

console.log('---------------------------');

// Simple uzdavinukai

/*
function hi() {
    return 'Labas!'
}
*/
// supaprastintas variantas
const hi = () => 'Labas!'
console.log(hi());

/*
function student(name) {
    return `Hi, my name is ${name}!`'
}
*/
// supaprastintas variantas
const student = name => `Hi, my name is ${name}!`;

console.log(student('Petras'));
console.log(student('Maryte'));
console.log(student('Eminem'));

console.log('---------------------------');

// elementaria funkcija gali kviesti bet kada, pries aprasant, po aprasymo
console.log(example());

function example() {
    return 'Example';
}
console.log(example());


// eiliskumas butinas, naudojant arrow 
// pirma apsirasyti, tada kviesti. priezastis -> pasekme
const sample = (letter) => `This is your sample: ${letter}`;
console.log(sample('A'));