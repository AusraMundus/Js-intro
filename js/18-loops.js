console.clear();
/*

LOOPS - ciklai. Veiksmą kartoja keletą kartų.

*/

// FOR - ciklu tevas, pamatas

console.log('>>> FOR:');
for (let i = 0; i < 5; i++) { // primityvi forma
    console.log(i);
}

console.log('------------');

for (let i = 0, j = 20; i < 10 && j > 0; i++, j -= 3) {
    console.log(i, j);
}

// Galima iskelti atskiras FOR dalis

console.log('------------');

for (let i = 0; i < 5;) {
    console.log(i);
    i += 2;
}

console.log('------------');

let i = 0;
for (; i < 5;) {
    console.log(i);
    i++;
}

console.log('------------');

function arTesti (iteratorCount) {
    return iteratorCount < 5;

/* standartinis variantas:
    if (iteratorCount < 5) {
        return true;
    } else {
        return false;
    }
*/
/* trumpesnis variantas:
if (iteratorCount < 5) {
        return true;
    } return false; 
*/
/* ternary variantas;
return iteratorCount < 5 ? true ; false;
*/
/* palyginimo rezultatas (true, false) iskart pagamina tai, ka noresi grazinti. 
return iteratorCount < 5;
*/

}
for (let i = 0; arTesti(i); i++) {
    console.log(i);
}

console.log('------------'); 
// geriau taip nerasyti
for (let i = 0; (n => n < 5)[i]; i++) {
    console.log(i);
}

console.log('-----------a'); 

let a = 0 // globalus kintamasis, nes veikia ir cikle, ir uz jo

for (; a < 5; a++) {
    console.log('>>', a);
}
console.log(a);

for (; a < 10; a++) {
    console.log('>>', a);
}
console.log(a);

console.log('-----------'); 

console.clear();

const marks = [10, 2, 8, 4, 6];

// FOR
let forSum = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    forSum += marks[i];
}
console.log('for:', forSum);

// FOR-OF - Ciklas for...of veikia reikšmes, gaunamas iš kartojamo po vieną eilės tvarka. 
let forOfSum = 0;
for (const mark of marks) {
    forOfSum += mark;
}
console.log('for-of:', forOfSum);

// WHILE - tol, kol.  Mandagus gezas - paklausia ir tada duoda i nosi
let whileSum = 0;
let = iWhile = 0;
while (iWhile < marks.length) {
    const mark = marks[iWhile];
    whileSum += mark;
    iWhile++;
}
console.log('while:', whileSum);

// DO-WHILE - daryk tol, kol. Teiginys visada vykdomas prieš patikrinant sąlygą. tikras gezas - duoda i nosi ir paklausia, ar dar testi

let doWhileSum = 0;
let iDoWhile = 0;
do {
    const mark = marks[iDoWhile];
    doWhileSum += mark;
    iDoWhile++;
} while (iDoWhile < marks.length);
console.log('do-while:', doWhileSum);

// FOREACH - array method. Metodas forEach() vieną kartą vykdo pateiktą funkciją kiekvienam masyvo elementui.

let forEachSum = 0;
marks.forEach((mark) => {
    forEachSum += mark;
});
console.log('foreach:', forEachSum);

console.log('-----------'); 

// MAP - array method. Grazina analogiska masyva. Map() metodas sukuria naują masyvą, užpildytą pateiktos funkcijos iškvietimo rezultatais kiekviename iškvietimo masyvo elemente.

const marks2x = [];
for (const mark of marks) {
    marks2x.push(mark * 2);
}
console.log(marks);
console.log(marks2x);

const marks2xMap = marks.map(m => m * 2);
console.log(marks2xMap);

console.log('-----------'); 

// FILTER - array method. Palieka tik tai ko nori masyve (gali ismesti nereikalingas reiksmes).
// Filtro() metodas sukuria negilią tam tikro masyvo dalies kopiją, išfiltruotą iki tų elementų iš nurodyto masyvo, kurie išlaiko pateiktos funkcijos atliktą testą.

const studentMarks = [10, 2, -7, 8, -5, 4, 6];
const filteredMarks = studentMarks
    .filter(mark => mark >= 1 && mark <= 10);
console.log(studentMarks);
console.log(filteredMarks);

console.log('-----------'); 

// REDUCE - array method. Subendrinti rezultata pagal pateikta logika, supaprastanti, is daug padaryti viena.
// Sumažinimo () metodas kad suranda visų masyvo skaičių sumą.

const reducedSum = marks.reduce((sum, mark) => sum + mark);
console.log('reduce:', reducedSum);

const reducedSum2 = marks
    .reduce((sum, mark) => sum + mark, 0);
console.log('reduce:', reducedSum2);

const reduce1 = [1, 2, 3, 4].reduce((t, n) => t + n);
// 1+2+3+4=10
console.log('1 atvejis:', reduce1);

const reduce2 = [1, 2, 3, 4].reduce((t, n) => t + n, 0);
// 0+1+2+3+4=10
console.log('2 atvejis:', reduce2);

const reduce3 = [1, 2, 3, 4].reduce((t, n) => t + n, 100);
// 100+1+2+3+4=10
console.log('3 atvejis:', reduce3);

const reduce4 = [1, 2, 3, 4].reduce((t, n) => t + n, -100);
// -100+1+2+3+4=10
console.log('4 atvejis:', reduce4);

const reduce5 = [1, 2, 3, 4].reduce((t, n) => t - n);
// 1-2-3-4=-8
console.log('5 atvejis:', reduce5);

const reduce6 = [1, 2, 3, 4].reduce((t, n) => t - n, 0);
// 0-1-2-3-4=-10
console.log('6 atvejis:', reduce6);

const reduce7 = [1, 2, 3, 4].reduce((t, n) => t - n, 100);
// 100-1-2-3-4=90
console.log('7 atvejis:', reduce7);

const reduce8 = [1, 2, 3, 4].reduce((t, n) => t - n, -100);
// -100-1-2-3-4=-110
console.log('8 atvejis:', reduce8);

const reduce9 = [1, 2, 3, 4].reduce((t, n) => t * n, 10);
// 10*1*2*3*4=240
console.log('9 atvejis:', reduce9);

const reduce10 = [1, 2, 3, 4].reduce((t, n) => t / n, 10);
// 10/1/2/3/4=0.4166666666666667   
console.log('10 atvejis:', reduce10);

const reduce11 = [1, 2, 3, 4].reduce((t, n) => t % n, 10);
// ats 0
console.log('11 atvejis:', reduce11);

console.log('---------------------');

// SORT - array method.
// Metodas sort() surūšiuoja masyvo elementus į vietą ir grąžina nuorodą į tą patį masyvą, dabar surūšiuotą. Numatytoji rūšiavimo tvarka yra didėjimo tvarka, sukurta konvertuojant elementus į stringus.

marks.sort();
console.log(marks);

marks.sort((a, b) => a - b);
console.log(marks);

marks.sort((a, b) => b - a);
console.log(marks);

console.log('---------------------');

console.clear();

// VIDURKIS - uzdavinys
const pazymiai = [10, 2, 'Petras', true, 8, -7, [], {}, undefined, NaN, Infinity, -Infinity, 4, 6, Math.E, Math.PI, 3.14, null, 0];

const tikriPazymiai = pazymiai
    .filter(p => typeof p === 'number')
    .filter(p => p > 0)
    .filter(p => p <= 10)
    .filter(p => p % 1 === 0)
    // galima apjungti i viena filteri, su &&
    
const vidurkis = tikriPazymiai
    .reduce((s, p) => s + p, 0) / tikriPazymiai.length;

console.log(tikriPazymiai);
console.log(vidurkis);