console.clear();
/* 
OBJECT - objektas

Kuriami viduje {}

{key: value}

Jei fraze is vieno zodzio, nereikia kabuciu.
Jei fraze is keliu zodziu, reikia kabuciu. Geriau vengti keliu zodziu raktu.
*/

// const: number, string, boolean NONONO
// const: array, object YESYESYES

const emptyObject = {};
console.log(emptyObject);

const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    'mano pazymiai': [10, 9, 8],
};
console.log(user);

// Sveiki, as esu [vardas] ir man yra [kazkiek] metu.

const sayHi = `Sveiki, as esu ${user['name']} ir man yra ${user['age']} metu.`;
console.log(sayHi);

const sayHi2 = `Sveiki, as esu ${user.name} ir man yra ${user.age} metu.`;
console.log(sayHi);

console.log(user.isMarried);
console.log(user['mano pazymiai']);

console.log('-------------------------');

const blynas = {};
console.log('Blynas:', blynas);
console.log('Dydis:', blynas.dydis);
console.log('Spalva:', blynas.spalva);

blynas.dydis = 10;
console.log('Blynas:', blynas);
console.log('Dydis:', blynas.dydis);
console.log('Spalva:', blynas.spalva);

blynas.spalva = 'red';
console.log('Blynas:', blynas);
console.log('Dydis:', blynas.dydis);
console.log('Spalva:', blynas.spalva);

console.log('-------------------------');

const marks = [10, 2, 8, 4, 6];
console.log('Pazymiai:', marks);
console.log('Antras:', marks[1]);

marks[1] = 5;
console.log('Pazymiai:', marks);
console.log('Antras:', marks[1]);

console.log('-------------------------');

const a = ['a'];
a[0] = 'aaa';
console.log(a);

// a = [':('];
// console.log(a);

const gg = {
    goodGame: true,
}
console.log(gg);

gg.goodGame = true;
console.log(gg);

// gg = {};
// console.log(gg);

const person = {
    non: 'grata',
    age: Infinity,
    name: 'nesakysiu',
    luckyNumbers: [2, 6, 13, 666, 74],
}
console.log(person);
console.log('Laimingu skaiciu kiekis:', person.luckyNumbers.length);
console.log('Pirmas laimingas skaicius:', person.luckyNumbers[0]);

console.log('Vardo ilgis:', person.name.length);

// Masyvo ir stringo turinio apimtis
console.log([10, 2, 8].length);
console.log('labas'.length);
console.log(['l', 'a', 'b', 'a', 's'].length);

// Objectas sukuria turini. Kaip apskaiciuoti apimti (kieki)
const abc = {
    a: 'Aa',
    b: 'Bb',
    c: 'Cc',
}

console.log(abc);

const abcKeys = Object.keys(abc);
console.log(abcKeys);
console.log(abcKeys.length);
console.log(Object.keys(abc).length);