console.clear();

/*
STRINGS - simboliu sarasas/junginys, tekstas

Kintamųjų iniciavimas:
- const (default) -> konstanta, naudojama visada
- let (tik jei yra poreikis keisti reiksme)
- var (nenaudoti, nebent TIKRAI zinote, ka darote)

String`o iniciavimas:
- viengubos kabutes
- dvigubos kabutes

Rasymo taisykles:
- EN kalba, ne lietuviskos raides
- jei keli zodziai, tai be tarpu ir kiekvienas kitas prasideda didziaja raide
- simbolis = yra priskyrimo operatorius
- simbolis + yra sujungimo operatorius. Jei aplink + bus skaiciai, atliks matematini veiksma.
- "" -> oficialus budas kurti string`us
- '' -> praktiskas budas kurti string`us
- Matematiniai operatoriai + - * / -> dirba tik su skaiciais. Isskyrus + kuris taip pat atlieka sujungimo operacija.
*/


// KINTAMUJU INICIAVIMAS

const vardas = 'Petras';
console.log(vardas);

const keturi = 4;
console.log(keturi);

const keturiTekstu = '4';
console.log(keturiTekstu);

let pinigine = 5;
console.log(pinigine);

pinigine = 16;
console.log(pinigine);

console.log('------------------');
// STRINGS

const firstname = 'Maryte';
console.log(firstname);

const lastname = "Marytaite";
console.log(lastname);

// Labas rytas, Maryte!
console.log('Labas rytas,', firstname, '!'); // Netinkamas sprendimas. Tik greitai pasiziureti, kas ir kaip

const pasisveikinimas = 'Labas rytas, ' + firstname + '!';
console.log(pasisveikinimas);

// string + string
console.log('4' + '4');
// number + string
console.log(4 + '4');
// number + number
console.log(4 + 4);
// string + number
console.log('4' + 4);

// Sveiki, mano vardas Jonas ir man 88 metai!
const name1 = 'Jonas';
const age1 = 88;

const prisistatymas = 'Sveiki, mano vardas ' + name1 + ' ir man ' + age1 + ' metai!';
console.log(prisistatymas);

// UZDUOTYS

// Uzduotis1
const skaicius1 = 3;
const skaicius2 = 2;
const skaicius3 = 1;
console.log(skaicius1 + skaicius2 + skaicius3);

// Uzduotis2
const word1 = 'Jonukas';
const word2 = 'yra';
const word3 = 'berniukas';
console.log(word1 + ' ' + word2 + ' ' + word3);