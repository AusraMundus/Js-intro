console.clear();
/*
TERNARY - supaprastintas IF'as
klausimas ? jei gerai : jei blogai;

Naudojamas tada, kai kintamajam priskirineju nauja reiksme

*/

// Su IF'u reikia let kintamojo

let zodis = '';
const diena = 1;

if (diena === 1) {
    zodis = 'Pirmadienis';
} else {
    zodis = 'Tokios dienos nera.';
}
console.log(zodis);

// TERNARY - su juo naudojama const

const word = diena === 1 ? 'Pirmadienis' : 'Tokios dienos nera.';
console.log(word);

const amzius = 16;
const limitas = 18;

// su IF
let zinute = '';

if (amzius >= limitas) {
    zinute = 'Viskas OK, uzeik ;)';
} else {
    zinute = 'Palauk uz duru...';
}
console.log(zinute);

// Su TERNARY
const message = amzius >= limitas ? 'Viskas OK, uzeik ;)' : 'Palauk uz duru...';
console.log(message);

console.log('-----------------');

const a = 1 > 2 ? 3 : 4; // salyga neteisinga
console.log(a);
// priskiria ta, kuris uz dvitaskio, nes neatitinka salygos

const b = 1 < 2 ? 3 : 4; // salyga teisinga
console.log(b);
// spausdina uz klaustuko pirma (arba pries dvitaski pirma), nes atitinka salyga

const c = 1 === 2 ? 3 : 4; // salyga neteisinga
console.log(c);
// // priskiria ta, kuris uz dvitaskio, nes neatitinka salygos

const d = 1 < 2 ? 3 : 4 < 5 ? 6 : 7; // salyga teisinga
console.log(d);

const e = 1 > 2 ? 3 : 4 < 5 ? 6 : 7; // salyga neteisinga
console.log(e);

const f = 1 > 2 ? 3 : 4 > 5 ? 6 : 7; // salyga neteisinga
console.log(f);

const gg = 1 < 2 ? 3 < 4 ? 5 : 6 : 7 < 8 ? 9 : 10; // salyga teisinga
console.log(gg);
