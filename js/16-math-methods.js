console.clear();

/*
MATH METHODS
*/

console.log(Math); // objektas

// konstantos
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// metodai

// .abs - grazina skaiciu be minuso
console.log(Math.abs(-7));
console.log(Math.abs(7));

// .ceil (lubos) - apvalinima i virsutine puse
console.log(Math.ceil(5));
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.9999999));
console.log(Math.ceil(5.00001));

// .floor (grindys) - apvalinima i apatine puse
console.log(Math.floor(999));
console.log(Math.floor(999.9999));
console.log(Math.floor(999.5));
console.log(Math.floor(999.00001));

// .round - apvalina matematiskai (0.5 -> 1)
console.log(Math.round(1.5));
console.log(Math.round(1.0001));
console.log(Math.round(1.9999));
console.log(Math.round(1.49999));

console.log(Math.round(-1.49999));
console.log(Math.round(-1.5));
console.log(Math.round(-1.9999));
console.log(Math.round(-1.50001));

// .exp
console.log(Math.exp(2, 3));

// .max - didziausias skaicius reiksmiu sarase (nereikia deti i masyva)
console.log(Math.max(2, 3, 5, 1, -7));

// .min - maziausias skaicius reiksmiu sarase (nereikia deti i masyva)
console.log(Math.min(2, 3, -7, 5, 1, -7));

// .pow - kelimas laipsniu (pirmas skaicius, antras laipsnis)
console.log(Math.pow(2, 3), 2 ** 3);

// .sqrt - istraukimas saknies
console.log(Math.sqrt(9));
console.log(Math.sqrt(81));
console.log(Math.sqrt(144));
console.log(Math.sqrt(-1));  // turetu grazinti i (menamasis skaicius)

// .trunk - apvalinimas kazkoks???
console.log(Math);