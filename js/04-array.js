console.clear();

/*
ARRAY - sarasas, listas, masyvas, matrica, ...

Kuriami viduje []

Array nariu kiekis: array.length, [].length
lenght -> parodo, koks masyvo kiekis (vnt.)

index/pozicija -> Sveiki skaiciai (3.14 NO NO NO)
                  Teigiami skaiciai (nuo 0)

Istraukia tik po viena reiksme.
Pirmas narys visada "sedi" po index 0.

Masyve gali buti skaiciai, stringai, boolean.

Masyve - daugiskaitine forma.

Array.isArray

*/

// Pazymiai

/*not good 
const p1 = 10;
const p2 = 8;
const p3 = 4;
const p4 = 5;
const p5 = 7;

const vidurkis = (p1 + p2 + p3 + p4 + p5) / 5;
console.log('Vidurkis:', vidurkis);
*/

// index/pozicija: 0  1  2  3  4  5???
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

console.log('--------');
console.log(-1, '->', pazymiai[-1]);
console.log(0, '->', pazymiai[0]);
console.log(1, '->', pazymiai[1]);
console.log(2, '->', pazymiai[2]);
console.log(3, '->', pazymiai[3]);
console.log(4, '->', pazymiai[4]);
console.log(5, '->', pazymiai[5]);

console.log('Pazymiu kiekis:', pazymiai.length);

const paskutinioIndeksas = pazymiai.length - 1;
const paskutinisPazymys = pazymiai[paskutinioIndeksas];
console.log(paskutinioIndeksas, '->', paskutinisPazymys);

const paskutinisPazymys2 = pazymiai [pazymiai.length - 1];

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

const student1 = students[0];
console.log(student1);

const studentLast = students[students.length - 1];
console.log('Paskutinis studentas:', studentLast);

const colors = ['red', 'blue', 'green'];

const skolininkai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const skolos = [7, 8, 9, 6];

const index = 4;
const asmuo = skolininkai[index - 1];
const skola = skolos[index-1];
console.log(`${index}) ${asmuo} - ${skola}`);