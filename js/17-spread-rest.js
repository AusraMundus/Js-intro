console.clear();
/*

SPREAD

REST

Patogus dalykai, bet ryja resursus
*/

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];

// structuring - strukturavimas. Iprastas budas rasyti ir istraukti reikiama reiksme
const s1 = students[0];
const s2 = students[1];
const s3 = students[2];
const s4 = students[3];
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

// destructuring - destrukturizavimas. Supaprastintas variantas
// Kuriame kintamuju pavadinimus, atitinkamai nurodant kurioje pozicijoje yra kintamuju sarase
const [st1, st2, st3, st4] = students;
console.log(st1, st2, st3, st4);

// rest - ...visi kiti nepaliesti, ideda i masyva []
const [stud1, stud2, ...visiKiti] = students;
console.log(stud1, stud2, visiKiti);

const abc = ['a', 'b', 'c', 'd', 'e'];
const abc2 = abc;

console.log(abc);
console.log(abc2);

abc[0] = 'AAA';
console.log(abc);
console.log(abc2);

abc2[1] = 'BBB';
console.log(abc);
console.log(abc2);

console.log('-------------------');

let a = 7;
let b = a;
console.log(a, b);

a = 5;
console.log(a, b);
b = 88;
console.log(a, b);

console.log('-------------------');

// Primityvai, primityvios reiksmes - string, number, boolean
// Kompleksines reiksmes - array, object

// primityvas - su array
const original = [10, 2, 8, 4, 6];
const copy = [];
// spread - su array. kaip greitai nukopinuojti masyva, nesukuriant atskiros lasteles
const copy2 = [...original]; 

for (let i=0; i<original.length; i++) {
    copy.push(original[i]);
}

console.log('O:', original);
console.log('C:', copy);
console.log('C2:', copy2);

original[0] = 10000;
console.log('O:', original);
console.log('C:', copy);
console.log('C2:', copy2);

copy[1] = 22222;
console.log('O:', original);
console.log('C:', copy);
console.log('C2:', copy2);

console.log('-------------------');

// primityvas - su object
const car = {
    brand: 'Tesla',
    model: 'X',
    color: 'red',
};

const carCopy = { ...car };
console.log(car);
console.log(carCopy);

car.color = 'blue';
console.log(car);
console.log(carCopy);

const masiniukas = {};
const carKeys = Object.keys(car);
console.log(carKeys);

for (let i=0; i < carKeys.length; i++) {
    const key = carKeys[i];
    console.log(i, key, '->', car[key]);
    masiniukas[key] = car[key];
}

console.log('-------------------');
console.log(car);
console.log(masiniukas);

masiniukas.model = 'S';
console.log(car);
console.log(masiniukas);

console.log('-------------------');

// rest funkcijose - surinkti i masyva

function suma(a, ...numbers) {
    console.log(a, numbers);
}

console.log(suma(1, 2, 3, 4));
console.log(suma(1, 2));
console.log(suma(1));