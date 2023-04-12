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

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));

console.log('a' > 'b', '->', 'a'.charCodeAt(0), 'b'.charCodeAt(0));

console.log('------------------');

const w1 = 'Labas';
const w2 = 'rytas';

const w12 = w1.concat(w2);
console.log(w12, w1 + w2);

const w123 = w1.concat(' ', w2);
console.log(w123, w1 + ' ' + w2);

const w1234 = w1.concat(' ', w2, '!');
console.log(w1234, w1 + ' ' + w2 + '!');
console.log(w1234, `${w1}, ${w2}!`);

console.log('------------------');

const kaTu = 'Ka tu?';

const arSaukiamasis = kaTu.endsWith('!');
console.log('saukiamasis:', arSaukiamasis);

const arPaprastas = kaTu.endsWith('.');
console.log('paprastas:', arPaprastas);

const arKlausiamasis = kaTu.endsWith('?');
console.log('klausiamasis:', arKlausiamasis);

console.log('------------------');

console.log('Pomidoras'.includes('p'));
console.log('Pomidoras'.includes('P'));

const kurIeskau = 'Pomidoras';
const koIeskau = 'p';

console.log(kurIeskau.includes(koIeskau));

// rasti simboli - su FOR

function arYraTekste (tekstas, raide) {
    for (let i=0; i<tekstas.length; i++) {
        if (tekstas[i] === raide) {
            return true;
        }
        //console.log('>>', tekstas[i], tekstas[i] === raide ? true : false);
    }
    return false;
}

console.log('>>', arYraTekste(kurIeskau, 'p'));
console.log('>>', arYraTekste(kurIeskau, 'm'));

function arYraTekste2 (tekstas, raide) {
    let arRadau = false;

    for (let i=0; i<tekstas.length; i++) {
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

// i didziasias, i mazasiasias
console.log('PoMiDoRaS'.toLowerCase());
console.log('PoMiDoRaS'.toUpperCase());

console.log('------------------');

// pasako, kur prasideda, jei prasideda
console.log('PoMiDoRaS'.indexOf('o')); // 1 pozicija
console.log('PoMiDoRaS'.indexOf('MiDo')); // 2 pozicija
console.log('PoMiDoRaS'.indexOf('xxx')); // error, nes nera

console.log('------------------');

// pasako, kiek kartoti kartu
console.log('PoMiDoRaS'.repeat(5));

console.log('------------------');

// pakeisti kazka i kazka
const pakeisti = 'PoMidoRaS'.replace('M', 'm')
    .replace('D', 'd')
    .replace('R', 'r')
    .replace('S', 's');
console.log(pakeisti);

console.log('AAAAA'.replace('A', 'a')); // pakeicia pirmaja pozicija
console.log('AAAAA'.replaceAll('A', 'a')); // pakeicia visus

console.log('------------------');

// slice - isimk gabaliuka
//           012345678
console.log('Pomidoras'.slice(2, 5)); // isima nuo iki (iki pozicijos nepaima)
console.log('Pomidoras'.slice(5)); // isima iki pabaigos nuo pasakytos pozicijos
console.log('Pomidoras'.slice(0, 'Pomidoras'.length - 1)); // nuimk paskutine raide
console.log('Pomidoras'.slice(0, -3)); // nuimk 3 paskutines raides
console.log('Pomidoras'.slice(-3)); // nuimk visas, palik 3 paskutines

// ispausdink rasrasras - 3 budai (nebaigtinis)
const k = 'Pomidoras';

// bullshit :D daug skaiciavimo
const ras3_1 = k.slice(-3) + k.slice(-3) + k.slice(-3);
console.log(ras3_1);

// kodas trumpesnis, bet suka skaiciavimus
const ras3_2 = k.slice(-3).repeat(3);
console.log(ras3_2);

// tiketina, kad efektyviausias budas. suskaiciuoji nekintama rezultata ir perpanaudoji
const raides3 = k.slice(-3);
const ras3_3 = raides3 + raides3 + raides3;
console.log(ras3_3);

console.log('------------------');

// trim - pasalina tarpus priekyje ir gale, in between nieko nedaro
console.log('PoMiDoRaS'.trim());
console.log('   PoMiDoRaS'.trim());
console.log('PoMiDoRaS  '.trim());
console.log('   PoMi    DoRaS  '.trim());