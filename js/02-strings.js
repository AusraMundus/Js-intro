console.clear();

/*
STRINGS - simboliu sarasas/junginys, tekstas

const = reiksme, verte , kurios 
    const -> kintamasis
    esantis uz simbolio = -> reiksme,verte

let = reiksme, verte, kuria galima pakeisti veliau

!!! Kintamųjų iniciavimas:

- const (default) -> konstanta, reiksme, verte, naudojama visada - negali pakeisti veliau
- let (tik jei yra poreikis keisti reiksme) - reiksme, verte, kuria galima pakeisti veliau
- var (nenaudoti, nebent TIKRAI zinote, ka darote)

String`o iniciavimas:
- viengubos (') kabutes
- dvigubos (") kabutes
- backtick (``) kabutes

Rasymo taisykles:
- EN kalba, ne lietuviskos raides
- jei keli zodziai, tai be tarpu ir kiekvienas kitas prasideda didziaja raide
- simbolis = yra priskyrimo operatorius
- simbolis + yra sujungimo operatorius. Jei aplink + bus skaiciai, atliks matematini veiksma.
- "" -> oficialus budas kurti string`us
- '' -> praktiskas budas kurti string`us
- `` -> patogu, kai yra naudojamos kitos kabutes
- Matematiniai operatoriai + - * / -> dirba tik su skaiciais. Isskyrus + kuris taip pat atlieka sujungimo operacija.
- \ -> panaikina simbolio reiksme (tik ispausdina)
- \n -> new line, kita eilute isspausdina ten, kur new line yra
- \r -> return
- \t -> tab
- \?
- ${ } - parametro, su kintama reiksme, rasymas (viduje - stringas, skaicius)
- simbolis === yra palyginimo operatorius (su IF tipu)
*/

// KINTAMUJU INICIAVIMAS

const vardas = 'Petras';
console.log(vardas);

const keturi = 4;
console.log(keturi);

const keturiTekstu = '4';
console.log(keturiTekstu);

let pinigine = 5;
console.log(pinigine);

pinigine = 16;
console.log(pinigine);

console.log('------------------');
// STRINGS

const firstname = 'Maryte';
console.log(firstname);

const lastname = "Marytaite";
console.log(lastname);

// Labas rytas, Maryte!
console.log('Labas rytas,', firstname, '!'); // Netinkamas sprendimas. Tik greitai pasiziureti, kas ir kaip

const pasisveikinimas = 'Labas rytas, ' + firstname + '!';
console.log(pasisveikinimas);

// string + string
console.log('4' + '4');
// number + string
console.log(4 + '4');
// number + number
console.log(4 + 4);
// string + number
console.log('4' + 4);

// Sveiki, mano vardas Jonas ir man 88 metai!
const name1 = 'Jonas';
const age1 = 88;

const prisistatymas = 'Sveiki, mano vardas ' + name1 + ' ir man ' + age1 + ' metai!';
console.log(prisistatymas);

// Sveiki, Rimantas!

const username1 = 'Jonas';
const username2 = 'Maryte';
const username3 = 'Petras';
const username4 = 'Ona';

const hi1 = 'Sveiki, ' + username1 + "!";
const hi2 = 'Sveiki, ' + username2 + "!";
const hi3 = 'Sveiki, ' + username3 + "!";
const hi4 = 'Sveiki, ' + username4 + "!";

console.log(hi1);
console.log(hi2);
console.log(hi3);
console.log(hi4);

// Vienguba (') kabute.
const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

// Dviguba (") kabute.
const kabute2 = 'Dviguba (") kabute.';
console.log(kabute2);

// Vienguba (') ir dviguba (") kabutes.
const kabute12 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabute12);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12_1);

const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute12_2);

const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute12_3);

const kabute3 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(kabute3);

// Kabutes: '"`.
const kabuteAll1 = 'Kabutes: \'"`.';
const kabuteAll2 = "Kabutes: '\"`.";
const kabuteAll3 = `Kabutes: '"\`.`;
const kabuteAll4 = `Kabutes: \'\"\`.`;

console.log(kabuteAll1);
console.log(kabuteAll2);
console.log(kabuteAll3);
console.log(kabuteAll4);


/*
<header>
    <img src="./logo.png" alt="Logo">
    <nav>
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
    </nav>
</header>
*/

const logoPath = './logo.png';

const HTML = '\
<header>\n\r\
\t<img src="' + logoPath + '" alt="Logo">\n\r\
\t<nav>\n\r\
\t\t<a href="/">Link</a>\n\r\
\t\t<a href="/">Link</a>\n\r\
\t\t<a href="/">Link</a>\n\r\
\t</nav>\n\r\
</header>';
console.log(HTML);

const HTML2 = `<header>
    <img src="${logoPath}" alt="Logo">
    <nav>
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
    </nav>
</header>`;
console.log(HTML2);

// Your lucky number is 7. Congz!
const userNumber = 777;
console.log(`Your lucky number is ${userNumber}. Congz!`);

const vardenis = 'Petras';
const amzius = 99;

console.log(`Sveiki, mano vardas ${vardenis} ir man ${amzius} metu.`);

