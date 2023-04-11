/*
NUMBERS:

Savybe:
    - Teigimas (positive)
    - Neigiamas (negative)

Normalus:
    - Sveikieji (integer)
    - Desimtainiai (float, decimal)

Nenormalus:
    - Begalybe (Infinity)
    - Nesamone (NaN)

isFinite() -> Globali funkcija isFinite() nustato, ar perduota reikšmė yra baigtinis skaičius. Jei reikia, parametras pirmiausia konvertuojamas į skaičių. Grąžina true arba false


*/

console.log(111);
console.log(-111);
console.log(3.141526656);
console.log(-3.141526656);
console.log(9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);

console.log(Infinity);
console.log(-Infinity);

console.log(4 / 2);
console.log(81 / 3);
console.log(81 / 0);
console.log(0 / 0);


// 1000 -> 1e+3 -> 1 * 10^3
// 100000 -> 1e+6 -> 1 * 10^6
// 1234 -> 1.234e+3 -> 1.234 * 10^3