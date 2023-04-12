console.clear();
/*
ARRAY METHODS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

*/

const marks = [1];
console.log(marks);

// .push - itraukia, priskiria reiksme, deda i gala
marks.push(10);
console.log(marks);

marks.push(5);
console.log(marks);

// .unshift - itraukia i pradzia ???
marks.unshift(7);
console.log(marks);

marks.unshift(3);
console.log(marks);

// .shift - nuima nuo pradzios ????
marks.shift();
console.log(marks);

// .pop - ?????
marks.pop();
console.log(marks);

console.log(marks.length);

// .at
console.log(marks.at(1)); // ima visus
console.log(marks[-1]); // array tik su indeksais nuo 0

// .include
console.log(marks.includes(555));
console.log(marks.includes(7));

// .indexOf
console.log(marks.indexOf(7));
console.log(marks.indexOf(10));

// .join
console.log(marks.join(', '));

// .reverse
console.log(marks.reverse());

// .sort 1,10,2,55...

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

console.clear();

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