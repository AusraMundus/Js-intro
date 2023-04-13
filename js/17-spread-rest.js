console.clear();
/*
... -> pradzioje reikia daugtaskio

SPREAD - spreadinam, isskleidziam, iskopijuojam, galima prisideti kita informacija, pakeisti turima info (overraidinti).

Išplitimo (...) sintaksė leidžia kartoti, pavyzdžiui, array arba string, išplėsti tose vietose, kur tikimasi nulio ar daugiau argumentų (funkcijų iškvietimui) arba elementų (masyvo literalams). Objekto literale išplitimo sintaksė išvardija objekto savybes ir prideda rakto-reikšmių poras prie kuriamo objekto.
Svarbu eiliskumas.

REST - visa kita.

Likusio parametro sintaksė leidžia funkcijai priimti neribotą skaičių argumentų kaip masyvą, 

Patogus dalykai, bet ryja resursus

Dirba su masyvais ir objektais, su viduje esanciais elementais
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

//spread - su object 
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

console.log('-------------------');
console.clear();

// spread - papildoma info pridedama

const mouse = [1, 2, 3];
const mouseCopy = [...mouse];
const mouse3xCopy = [...mouse, ...mouse, ...mouse];
const mouse45 = [...mouse, 4, 5];
const mouse456 = [6, ...mouse, 4, 5];

console.log(mouse);
console.log(mouseCopy);
console.log(mouse3xCopy);
console.log(mouse45);
console.log(mouse456);

console.log('-------------------');

const varle = {
    pirstu: 4,
    kelnes: 'green',
    arKabo: true,
};

const varle2 = {...varle};
const varle3 = {...varle, ugis: 18};
const varle4 = {...varle, kelnes: 'red'};
const varle5 = {kelnes: 'red', ...varle};

console.log(varle);
console.log(varle2);
console.log(varle3);
console.log(varle4);
console.log(varle5);

console.log('-------------------');

// ko nedaryti - nespredinti po papildoma reiksme
let marks = [];
marks = [...marks, 10];
marks = [...marks, 2];
marks = [...marks, 6];
marks = [...marks, 4];
marks = [...marks, 6];
//reikia naudoti - PUSH
marks.push(7);

console.log(marks);