console.clear();

/*
FUNCTION - funkcija
*/

const kursas = 1.5;
const konvertavimoMokestis = 1;

const pinigine1 = 2;
const pinigine2 = 4;
const pinigine3 = 100;

const verte1 = pinigine1 * kursas - konvertavimoMokestis;
const verte2 = pinigine2 * kursas - konvertavimoMokestis;
const verte3 = pinigine3 * kursas - konvertavimoMokestis;
console.log(verte1);
console.log(verte2);
console.log(verte3);

console.log('---------------------');

function convertMyMoney(sumaEurais) {
    const convertionRate = 1.5;
    const tax = 1
    return sumaEurais * convertionRate - tax;
}

const dollers1 = convertMyMoney(pinigine1);
const dollers2 = convertMyMoney(pinigine2);
const dollers3 = convertMyMoney(pinigine3);
console.log('Po konvertavimo:', pinigine1, '->', dollers1);
console.log('Po konvertavimo:', pinigine2, '->', dollers2);
console.log('Po konvertavimo:', pinigine3, '->', dollers3);

console.log(convertMyMoney(1));
console.log(convertMyMoney(200));

console.log('----------------');

function sum(a, b) {
    return a + b;
}

console.log(sum(7, 5));
console.log(sum(-7, 5));
console.log(sum(3.14, 3.14));

function hi() {
    return 'Labas';
}

console.log(hi());
console.log(hi(5));
console.log(hi(5, 7));

function hello(name) {
    return `Sveiki, mano vardas yra ${name}!`;
}

console.log(hello);
console.log(hello());
console.log(hello('Petras'));
console.log(hello('Maryte', 'Jonas'));
console.log(hello('Maryte', 'Jonas', 'Ona'));