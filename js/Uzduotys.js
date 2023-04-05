console.clear();

// JavaScript mini užduotys

// Kintamųjų inicijavimas

/*  
1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const skaicius1 = 15;
const skaicius2 = 2;
const skaicius3 = 109;
console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);

/*  
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const word1 = 'Jonukas';
const word2 = 'yra';
const word3 = 'berniukas';
console.log(word1);
console.log(word2);
console.log(word3);

/*
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const numbers1 = [1, 5, 9, 11, 15];
const numbers2 = [2, 4, 8, 56, 89];
const numbers3 = [-56, 85, -2, 0.53, 58];
console.log(numbers1);
console.log(numbers2);
console.log(numbers3);

/*  
4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const animalsSounds = ['miau', 'mu', 'au', 'chip', 'be'];
const furnitures = ['stalas', 'kede', 'sofa', 'spinta', 'lova'];
const flowers = ['tulip', 'lily', 'dandelion', 'rose', 'narcissus'];
console.log(animalsSounds);
console.log(furnitures);
console.log(flowers);


console.log('-----------------------------');


// Veiksmai su kintamaisiais

/*  
1. Susumuoti visus skaičiaus tipo kintamuosius
a. Rezultatą išvesti į console
*/

console.log(skaicius1 + skaicius2 + skaicius3);

/*  
2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
a. Rezultatą išvesti į console
*/

console.log(word1 + ' ' + word2 +  ' '  + word3);

/*  
3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
a. Rezultatą išvesti į console
*/

// ???????????????????????????? [skaicius, skaicius, skaicius, skaicius, skaicius]
// const numbers1 = [1, 5, 9, 11, 15];

console.log(numbers1);
console.log(1, '->', numbers1[0]);
console.log(-2, '->', numbers1[1]);
console.log(3, '->', numbers1[2]);
console.log(-4, '->', numbers1[3]);
console.log(5, '->', numbers1[4]);


/*  
4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

//const animalsSounds = ['miau', 'mu', 'au', 'chip', 'be'];
//const furnitures = ['stalas', 'kede', 'sofa', 'spinta', 'lova'];
//const flowers = ['tulip', 'lily', 'dandelion', 'rose', 'narcissus'];

console.log(animalsSounds.reverse(animalsSounds));
console.log(furnitures.reverse(furnitures));
console.log(flowers.reverse(flowers));


console.log('-----------------------------');


// Funkcijos

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

/*  
1.Funkcija pavadinimu “tusciaFunkcija”:
    a. nepriima jokių kintamųjų
    b. neatlieka jokios vidinės logikos
    c. gražina boolean tipo reikšmę “false”
    d. TESTAS:
        i. console.log( tusciaFunkcija() );
        ii. rezultatas: false
*/

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());


/*  
2. Funkcija pavadinimu “daugyba”:
    a. priima du skaičiaus tipo kintamuosius
    b. atskirame kintamajame įsimena sandaugos reikšmę
    c. gražina saudaugos rezultatą
    d. TESTAI:
        i. console.log( daugyba( skaicius1, skaicius2 ) );
        ii. console.log( daugyba( skaicius3, skaicius2 ) );
        iii. console.log( daugyba( skaicius1, skaicius3 ) );
        iv. rezultatas: teisingos reikšmės;
*/

// const skaicius1 = 15;
// const skaicius2 = 2;
// const skaicius3 = 109;

function daugyba(skaicius1, skaicius2) {
    return skaicius1 * skaicius2
}
console.log(daugyba(skaicius1, skaicius2));

function daugyba(skaicius3, skaicius2) {
    return skaicius3 * skaicius2
}
console.log(daugyba(skaicius3, skaicius2));

function daugyba(skaicius1, skaicius3) {
    return skaicius1 * skaicius3
}
console.log(daugyba(skaicius1, skaicius3));