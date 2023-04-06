console.clear();
/* 
FOR - loop, ciklas (kazkas kartojasi)
*/

const marks = [10, 2, 8, 4, 6];
const count = marks.length;

// const sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4]; 

// math: +, -, *, /
// =

let sum = 0;
sum = sum + marks[0];
console.log('Suma:', sum);
sum = sum + marks[1];
console.log('Suma:', sum);
sum = sum + marks[2];
console.log('Suma:', sum);
sum = sum + marks[3];
console.log('Suma:', sum);
sum = sum + marks[4];
console.log('Suma:', sum);


const average = sum / count;
console.log('Vidurkis:', average);