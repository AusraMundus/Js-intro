console.clear();

/*
STRING METHODS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


NUMBER METHODS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

number.isFinite()
number.isInteger()
number.isNAN()
number.prorotype.toFixed()
*/

// 

const str = 'Pomidoras';

console.log('---.charAt---');
// .charAt - grąžina naują stringą, kurį sudaro vienas UTF-16 kodo vienetas, esantis nurodytoje eilutėje.

console.log(str.charAt(0), str [0]);
console.log(str.charAt(1), str [1]);
console.log(str.charAt(2), str [2]);
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));
console.log(str.charAt(6));
console.log(str.charAt(7));
console.log(str.charAt(8));
console.log(str.charAt(20), str [20]);

console.log('---.charCodeAt---');
// .charCodeAt - grąžina sveikąjį skaičių nuo 0 iki 65535, nurodantį UTF-16 kodo vienetą nurodytame indekse.

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));

console.log('a' > 'b', '->', 'a'.charCodeAt(0), 'b'.charCodeAt(0));


console.log('------------------');

const w1 = 'Labas';
const w2 = 'rytas';

console.log('---.concat---');
// .concat - sujungia stringo argumentus į iškvietimo stringą ir grąžina naują stringą.
const w12 = w1.concat(w2);
console.log(w12, w1 + w2);

const w123 = w1.concat(' ', w2);
console.log(w123, w1 + ' ' + w2);

const w1234 = w1.concat(' ', w2, '!');
console.log(w1234, w1 + ' ' + w2 + '!');
console.log(w1234, `${w1}, ${w2}!`);


console.log('------------------');

const kaTu = 'Ka tu?';

console.log('---.endsWith---');
// .endsWith - nustato, ar stringas baigiasi nurodyto stringo simboliais, atitinkamai grąžinant true arba false.

const arSaukiamasis = kaTu.endsWith('!');
console.log('saukiamasis:', arSaukiamasis);

const arPaprastas = kaTu.endsWith('.');
console.log('paprastas:', arPaprastas);

const arKlausiamasis = kaTu.endsWith('?');
console.log('klausiamasis:', arKlausiamasis);

console.log('------------------');


console.log('---.includes---');
// .includes - atlieka didžiųjų ir mažųjų raidžių paiešką, kad nustatytų, ar vienas stringas gali būti rastas kitame stringe, atitinkamai grąžinant true arba false.

console.log('Pomidoras'.includes('p'));
console.log('Pomidoras'.includes('P'));

console.log('------------------');

// paieska simbolio stringe - true arba false.
const kurIeskau = 'Pomidoras';
const koIeskau = 'p';
console.log(kurIeskau.includes(koIeskau));

console.log('------------------');

// paieska simbolio stringe su funkcija ir FOR - true arba false

function arYraTekste (tekstas, raide) {
    for (let i = 0; i < tekstas.length; i++) {
        if (tekstas[i] === raide) {
            return true;
        }
        //console.log('>>', tekstas[i], tekstas[i] === raide ? true : false);
    }
    return false;
}
console.log('>>', arYraTekste(kurIeskau, 'p'));
console.log('>>', arYraTekste(kurIeskau, 'm'));

console.log('------------------');

function arYraTekste2 (tekstas, raide) {
    let arRadau = false;

    for (let i = 0; i < tekstas.length; i++) {
        if (tekstas[i] === raide) {
            arRadau = true;
            break;
        }
        console.log('>>', tekstas[i], arRadau);
    }
    return arRadau;
}

console.log('>>', arYraTekste2(kurIeskau, 'p'));
console.log('>>', arYraTekste2(kurIeskau, 'm'));

console.log('------------------');

console.log('---.toLowerCase---');
// .toLowerCase - paversti i mazasiasias raides

console.log('PoMiDoRaS'.toLowerCase());

console.log('---.toUpperCase---');
// .toUpperCase - paversti i didziasias raides

console.log('PoMiDoRaS'.toUpperCase());

console.log('------------------');

console.log('---.indexOf---');
// .indexOf - pasako, kurioje pozicijoje yra/prasideda stringo elementas

console.log('PoMiDoRaS'.indexOf('o')); // 1 pozicija
console.log('PoMiDoRaS'.indexOf('MiDo')); // 2 pozicija
console.log('PoMiDoRaS'.indexOf('xxx')); // -1, jei nėra

console.log('------------------');

console.log('---.repeat---');
// .repeat - pasako, kiek kartu kartoti stringa

console.log('PoMiDoRaS'.repeat(5));

const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);

console.log('------------------');

console.log('---.replace---');
// .replace - grąžina naują stringą, kurioje viena, kai kurios arba visos šablono atitiktys yra pakeistos pakeitimu.
// .replaceAll - grazina nauja visiskai pakeista stringa

const pakeisti = 'PoMidoRaS'
    .replace('M', 'm')
    .replace('D', 'd')
    .replace('R', 'r')
    .replace('S', 's');
console.log(pakeisti);

console.log('------------------');
console.log('AAAAA'.replace('A', 'a')); // pakeicia pirmaja pozicija
console.log('AAAAA'.replaceAll('A', 'a')); // pakeicia visas pozicijas

console.log('------------------');

console.log('---.slice---');
// .slice - ištraukia stringo dalį ir grąžina ją kaip naują stringą, nekeisdamas pradinio stringo.
// Skliaustuose - pozicija(indeksas), nuo kurio pradėti, jei yra du - kur pradėti ir kur užbaigti

//           012345678
console.log('Pomidoras'.slice(2, 5)); // isima [nuo iki) (iki pozicijos nepaima)
console.log('Pomidoras'.slice(5)); // isima iki pabaigos nuo pasakytos pozicijos
console.log('Pomidoras'.slice(0, 'Pomidoras'.length - 1)); // nuimk paskutine raide
console.log('Pomidoras'.slice(0, -3)); // nuimk 3 paskutines raides
console.log('Pomidoras'.slice(-3)); // nuimk visas, palik 3 paskutines

// UZDUOTIS - ispausdink rasrasras - 3 budai (nebaigtinis)
const k = 'Pomidoras';

// 1. bullshit :D daug skaiciavimo
const ras3_1 = k.slice(-3) + k.slice(-3) + k.slice(-3);
console.log(ras3_1);

// 2. kodas trumpesnis, bet suka skaiciavimus
const ras3_2 = k.slice(-3).repeat(3);
console.log(ras3_2);

// 3. tiketina, kad efektyviausias budas. suskaiciuoji nekintama rezultata ir perpanaudoji
const raides3 = k.slice(-3);
const ras3_3 = raides3 + raides3 + raides3;
console.log(ras3_3);

console.log('------------------');

console.log('---.trim---');
// .trim - pasalina tarpus priekyje ir gale, in between nieko nedaro

console.log('PoMiDoRaS'.trim());
console.log('   PoMiDoRaS'.trim());
console.log('PoMiDoRaS  '.trim());
console.log('   PoMi    DoRaS  '.trim());

console.log('---.split---');
// .split - pasalina tarpus priekyje ir gale, in between nieko nedaro

const strrr = 'The quick brown fox jumps over the lazy dog.';

const words = strrr.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = strrr.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = strrr.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]