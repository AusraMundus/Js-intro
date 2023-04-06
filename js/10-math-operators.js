console.clear();

/* 
MATH OPERATORS - matematiniai operatoriai 
*/

let total = 0;
console.log(total);

total = total + 10;
console.log(total);

total = total * 4;
console.log(total);

total = total - 4;
console.log(total);

total = total / 6;
console.log(total);

console.log('----------------------');

let sum = 0;
console.log(sum);

sum += 10;
console.log(sum);

sum *= 4;
console.log(sum);

sum -= 4;
console.log(sum);

sum /= 6;
console.log(sum);

console.log('------------------------');

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

console.log('------------------------------');

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

// Dalyba. % operatorius skaiciuoja dalybos liekana

console.log('15 / 5 =', 15 / 5);
console.log('16 / 5 =', 16 / 5);

// % operatorius skaiciuoja dalybos liekana. Jei liekana 0, padalintas lyginis skaicius.

console.log('15 % 5 =', 15 % 5);
console.log('16 % 5 =', 16 % 5);
console.log('7 % 9 =', 7 % 9);
console.log('17 % 9 =', 17 % 9);
console.log('17 % 2 =', 17 % 2);
console.log('16 % 2 =', 16 % 2);