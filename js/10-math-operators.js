console.clear();

/* 
MATH OPERATORS - matematiniai operatoriai

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
*/

console.log('---Arithmetic operators---');
// Aritmetiniai operatoriai - Aritmetiniai operatoriai yra pagrindiniai operatoriai, kuriuos naudojame nustatydami sumas

let total = 0;
console.log(total);

// Addition - sudetis
total = total + 10;
console.log(total);

// Subtraction - atimtis
total = total - 4;
console.log(total);

// Multiplication - daugyba
total = total * 4;
console.log(total);

// Division - dalyba
total = total / 6;
console.log(total);

console.log('----------------------');

console.log('---Assignment operators---');
// Priskyrimo operatoriai - Priskyrimo operatoriai yra operatoriai, kurie kintamajam priskiria reikšmę. 

let sum = 0;
console.log(sum);

sum += 10;          // tas pats, kas -> sum = sum + 10;
console.log(sum);

sum -= 4;           // tas pats, kas -> sum = sum - 4;
console.log(sum);

sum *= 4;           // tas pats, kas -> sum = sum * 4;
console.log(sum);

sum /= 6;           // tas pats, kas -> sum = sum / 6;
console.log(sum);

console.log('------------------------');


console.log('---Exponent---');
// Kelimas laipsniu -> naudojamos **

console.log('Kelimas laipsniu:', 2 ** 0);
console.log('Kelimas laipsniu:', 2 ** 1);
console.log('Kelimas laipsniu:', 2 ** 2);
console.log('Kelimas laipsniu:', 2 ** 3);
console.log('Kelimas laipsniu:', 2 ** 4);

let laipsnis = 2;
laipsnis = laipsnis * laipsnis * laipsnis * laipsnis;
console.log(laipsnis);

let laipsnis2 = 2;
laipsnis2 **= 4;
console.log(laipsnis2);

console.log('------------------------');

console.log('---Division. Remainder---');
// Dalyba.

console.log('15 / 5 =', 15 / 5);
console.log('16 / 5 =', 16 / 5);

// Remainder - % operatorius skaiciuoja dalybos liekana. Jei liekana 0, padalintas lyginis skaicius.

console.log('15 % 5 =', 15 % 5);
console.log('16 % 5 =', 16 % 5);
console.log('7 % 9 =', 7 % 9);
console.log('17 % 9 =', 17 % 9);
console.log('17 % 2 =', 17 % 2);
console.log('16 % 2 =', 16 % 2);

console.log('------------------------------');


console.log('---Increment and decrement operators---');
// didinimo (++) ir mažinimo (--) operatoriai. Kartais norėsite pakartotinai pridėti arba atimti vieną prie skaitmeninio kintamojo reikšmės arba iš jos.

let vienasKarvesPienas = 1;
console.log(vienasKarvesPienas);

vienasKarvesPienas = vienasKarvesPienas + 1;
console.log(vienasKarvesPienas);

vienasKarvesPienas += 1;
console.log(vienasKarvesPienas);

vienasKarvesPienas++;
console.log(vienasKarvesPienas);

++vienasKarvesPienas;
console.log(vienasKarvesPienas);

console.log('------------------------------');

let pasigailejau = 1;
console.log(pasigailejau);          //1

pasigailejau = pasigailejau + 1;
console.log(pasigailejau);          //2

pasigailejau += 1;
console.log(pasigailejau);          //3

pasigailejau += pasigailejau;
console.log(pasigailejau);          //6

pasigailejau += pasigailejau++;     // 12

// ++ padidina vienu vienetu kintamaji. Pries kintamaji esantis padidina vienu vienetu ir padidina. Uz kintamojo, padidina kintamaji vienu vienetu.

pasigailejau += ++pasigailejau;     // 13
console.log(pasigailejau);

console.log('------------------------------');

let minus = 0;
console.log(minus);

// -- sumazina vienu vienetu kintamaji. Pries kintamaji esantis sumazina vienu vienetu ir sumazina. Uz kintamojo, sumazina kintamaji vienu vienetu.

minus--;
console.log(minus);

--minus;
console.log(minus);

console.log('------------------------------');