console.clear();
/*
ARRAY METHODS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

*/

const marks = [2, 5];
console.log(marks);


console.log('---.push---');
// .push - itraukia naujus elementus, i pabaiga
// Push() metodas prideda nurodytus elementus į masyvo pabaigą ir grąžina naują masyvo ilgį.

marks.push(10);
console.log(marks);

marks.push(5);
console.log(marks);


console.log('---.unshift---');
// .unshift - itraukia naujus elementus, i pradzia 
// Metodas unshift() prideda nurodytus elementus į masyvo pradžią ir grąžina naują masyvo ilgį.

marks.unshift(7);
console.log(marks);

marks.unshift(3);
console.log(marks);


console.log('---.pop---');
// .pop - nuima elementa nuo pabaigos
// Pop() metodas pašalina paskutinį elementą iš masyvo. Šis metodas keičia masyvo ilgį. Grąžina pašalintą elementą.

marks.pop();
console.log(marks); // grazina trumpesni masyva  

console.log(marks.pop());  // grazina pasalinta elementa

console.log(marks.length); 


console.log('---.shift---');
// .shift - nuima elementa nuo pradzios
// Shift() metodas pašalina pirmąjį elementą iš masyvo. Šis metodas keičia masyvo ilgį. Grąžina pašalintą elementą. 

marks.shift();
console.log(marks); // grazina trumpesni masyva

console.log(marks.shift()); // grazina pasalinta elementa


console.log('---.at---');
// .at - Metodas at() paima sveikojo skaičiaus reikšmę ir grąžina elementą pagal tą indeksą, leidžiantį naudoti teigiamus ir neigiamus sveikuosius skaičius. Neigiami sveikieji skaičiai skaičiuojami nuo paskutinio masyvo elemento.

console.log(marks.at(-1)); // Su .at gali būti visi sveiki skaičiai, teigiami, neigiami, nulis
console.log(marks[-1]); // Blogai, nes masyve gali buti tik indeksai nuo 0


console.log('---.includes---');
// .includes - Metodas include() nustato, ar masyve yra tam tikra reikšmė tarp savo įrašų, atitinkamai grąžinant true arba false.

console.log(marks.includes(555));
console.log(marks.includes(7));

function check(a, x) {
    return a.includes(x);
  }
console.log(check([66, 101], 66)); //true
console.log(check([101, 45, 75, 105, 99, 107], 108)); //false
console.log(check(['t', 'e', 's', 't'], 'e')); //true

console.log('---.indexOf---');
// .indexOf - Metodas indexOf() grąžina pirmąjį indeksą, kuriame masyve galima rasti nurodytą elementą, arba -1, jei jo nėra.

console.log(marks.indexOf(5));
console.log(marks.indexOf(10));


console.log('---.join---');
// .join - Metodas join() sukuria ir grąžina naują stringą, sujungdamas visus masyvo (arba į masyvą panašaus objekto) elementus, atskirtus kableliais arba nurodytu skyrikliu. Jei masyve yra tik vienas elementas, tada tas elementas bus grąžintas nenaudojant skyriklio.

console.log(marks.join());
console.log(marks.join('; '));
console.log(marks.join('-'));


console.log('---.reverse---');
// .reverse - Reverse() metodas apverčia masyvą vietoje ir grąžina nuorodą į tą patį masyvą, pirmasis masyvo elementas dabar tampa paskutiniu, o paskutinis masyvo elementas tampa pirmuoju. Kitaip tariant, elementų tvarka masyve bus pasukta priešinga kryptimi, nei nurodyta anksčiau.

console.log(marks.reverse());


console.log('---.sort---');
// .sort 1,10,2,55... a, c, gggg, u...
// Metodas sort() surūšiuoja masyvo elementus į vietą ir grąžina nuorodą į tą patį masyvą, dabar surūšiuotą. Numatytoji rūšiavimo tvarka yra didėjimo tvarka, sukurta konvertuojant elementus į stringus.

// .sort - stringus abeceles tvarka surusiuoja. abcd... 
const dic = ['geras', 'blogas', 'labas', 'rytas', 'acių'];
dic.sort();
console.log(dic);

// .sort - skaicius abeceles tvarka surusiuoja 1,10,2,55...
const num = [10, 2, 8, 1, 14, 4, 23, 50, 6, 1000000];
num.sort();
console.log(num);

// su arrow skaicius sort'ina eiles tvarka, nuo min iki max
num.sort((a, b) => a - b); // -n; 0; +n
console.log(num);

// su arrow skaicius sort'ina eiles tvarka, nuo max iki min
num.sort((a, b) => b - a);
console.log(num);

// reiksme su masyvu ir objektais
const students = [
    {
        name: 'Petras',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 88,
    },
    {
        name: 'Jonas',
        age: 54,
    },
    {
        name: 'Ona',
        age: 67,
    },
]
console.log(students);

for (let s=0; s<students.length; s++) {
    const student = students[s];
    console.log(students[s].name);
}

students.sort(); // mato tik objektas, objektas... nemato, kas viduje
console.log(students);

students.sort((a, b) => a.age - b.age); // su skaiciais reikia vidines palyginimo funkcijos, aiskiai nurodant, pagal ka sortini
console.log(students);

students.sort((a, b) => a.name - b.name); // nesamone, nes bandai daryti matematine operacija su tekstais
console.log(students);
           
students.sort ((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name === b.name) {
        return 0;
    } else {
        return 1;
    }
})
console.log(students);


