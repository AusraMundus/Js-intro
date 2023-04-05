console.clear();
/*
IF - salygos sakinys, palyginimas

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, !=, ===, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, != 

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} .... if () {}
if () {} else if () {} .... if () {} else {}

Loginiai operatoriai:
AND &&
OR ||

*/

const a = 7;
const b = 5;

console.log('1) Tik IF');
console.log('--------------');
if (a > b) {
    console.log(`${a} yra daugiau uz ${b}`);
}

if (a < b) {
    console.log(`${a} yra maziau uz ${b}`);
} 

console.log('');
console.log('');
console.log('2) IF-ELSE');
console.log('--------------');
if (a > b) {
    console.log(`${a} yra daugiau uz ${b}`)
} else {
    console.log(`${a} nera daugiau uz ${b}`)
}

if (a < b) {
    console.log(`${a} yra maziau uz ${b}`)
} else {
    console.log(`${a} nera maziau uz ${b}`)
}

if (a >= b) {
    console.log(`${a} yra daugiau arba lygu uz ${b}`)
} else {
    console.log(`${a} yra maziau uz ${b}`)
}

if (a <= b) {
    console.log(`${a} yra maziau arba lyg uz ${b}`)
} else {
    console.log(`${a} yra daugiau uz ${b}`)
}

console.log('');
console.log('');
console.log('3) ELSE-IF');
console.log('--------------');

const diena = 11;

if (diena == 1) {
    console.log('Pirmadienis');
} else if (diena == 2) {
    console.log('Antradienis')
} else if (diena == 3) {
    console.log('Treciadienis');
} else if (diena == 4) {
    console.log('Ketvirtadienis');
} else if (diena == 5) {
    console.log('Penktadienis');
} else if (diena == 6) {
    console.log('Sestadienis');
} else if (diena == 7) {
    console.log('Sekmadienis');
} else {
    console.log('Tokios dienos savaiteje nera.');
}

console.log('FIN...');


const c = 7; // const c = 'Labas'
const d = 5; // const C = 'labas'

if (c == d) {
    console.log('Lygu');
} else {
    console.log('Ne lygu');
}

// Kai lygina tekstine '321' ir skaitine reiksmes 321, kurios sutampa, tada LYGU. Nes tikrina reprezentuojamas reiksmes.
// A -> Z , a -> z , zenklai, papildomos abėcėlės raidės.
// A < Z ,  a < z , ;.....,  ą..... Ko simboliaus toliau dešinėj pusėj, tuo jis didesnis.

if (7 === '7') {
    console.log('Lygu');
} else {
    console.log('Ne lygu');
}

// === Pirma tikrina, ar tipai sutampa, tada ziuri reiksmes.
// != <- Skaityti kaip NELYGU.

// ###########################################
console.clear();

// CODE NESTING (tevine-vaikine logika, panasiai kaip HTML)

const day = 3;

if (day === 1) {
    console.log('Pirmadienis');
} else {
    if (day === 2) {
    console.log('Antradienis');
    } else {
        if (day === 3) {
            console.log('Treciadienis');
        } else {
            if (day === 4) {
                console.log('Ketvirtadienis');
            }
        }
    }
}

const size = 'mazas';
const type = 'su stogu';

if (size === 'didelis') {
    if (type === 'su stogu') {
        console.log('Turiu dideli automobili :)');
    } else {
        console.log('Turiu dideli kabrioleta :)');
    }
} else {
    if (type === 'su stogu') {
        console.log('Turiu maza mini cooperi :(');
    } else {
        console.log('Mano vaikas turi zaislini mobiliuka :)');
    }
}

const arLyja = true;
const arDiena = false;

if (arLyja === true) {
    if (arDiena === true) {
        console.log('A) Pasiimk sketi');
    } else {
        console.log('A) Pasiimk sketi ir zibintuveli');
    }
} else {
    if (arDiena === true) {
        console.log('A) Grazus oras');
    } else {
        console.log('A) Varom zvaigzdziu paskaiciuoti');
    }
}

if (arLyja === true && arDiena === true) {
    console.log('B) Pasiimk sketi');
}

if (arLyja === true && arDiena === false) {
    console.log('B) Pasiimk sketi ir zibintuveli');
}

if (arLyja === false && arDiena === true) {
    console.log('B) Grazus oras');
}

if (arLyja === false && arDiena === false) {
    console.log('B) Varom zvaigzdziu paskaiciuoti');
}


// LOGINIAI

if (7 === 7 || 4 === 5) {
    console.log('TAIP');
} else {
    console.log('NE');
}