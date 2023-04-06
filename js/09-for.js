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
let index = 0;

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

const average = sum / count;
console.log('Vidurkis:', average);