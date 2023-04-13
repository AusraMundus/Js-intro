console.clear();

/*
SWITCH - tuo atveju, kai 
in case of 
Dirba su konkreciomis reiksmemis. Maziau funkcionalumo nei if

Gali buti - Numbers, strings, booleans
Idomiau su siais - Arrays, objects
*/

const diena = 1;

switch (diena) {
    case 1:
        console.log('Pirmadienis');
        break;

    case 2:
        console.log('Antradienis');
        break;

    case 3:
        console.log('Treciadienis');
        break;

    case 4:
        console.log('Ketvirtadienis');
        break;

    case 5:
        console.log('Penktadienis');
        break;

    case 6:
        console.log('Sestadienis');
        break;

    case 7:
        console.log('Sekmadienis');
        break;

    default:
        console.log('Tokios dienos savaiteje nera.');
        break;
}

// Sukompaktinimas, optimizavimas :)

const day = 8;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break;

    default:
        console.log('Tokios dienos savaiteje nera.');
        break;
}

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('Darbo diena');
} else if (day === 6 || day === 7) {
    console.log('Savaigalis');
} else {
    console.log('Tokios dienos savaiteje nera.');
}


console.log('----------------------------');

// Jei nebus break, viska isspausdina. Su break - tik vienas atvejis (case) spausdinamas.
// Be break spausdina pirma atveji (case) ir visus po juo esancius. Break rodo, kada sustoti dirbti.

const didi = 1;

switch (didi) {
    case 1:
        console.log('Pirmadienis');

    case 2:
        console.log('Antradienis');

    case 3:
        console.log('Treciadienis');

    case 4:
        console.log('Ketvirtadienis');

    case 5:
        console.log('Penktadienis');

    case 6:
        console.log('Sestadienis');

    case 7:
        console.log('Sekmadienis');

    default:
        console.log('Tokios dienos savaiteje nera.');
}

console.log('----------------------------');

/*
Kaip pasigaminti arbatos?
- Pasiimti puodeli
- Isideti arbatos
- Isideti priedu
- Uzpilti vandeniu
- Ismaisyti
*/

const procesoEtapas = 1;

switch (procesoEtapas) {
    case 1:
        console.log('Pasiimti puodeli');

    case 2:
        console.log('Isideti arbatos');

    case 3:
        console.log('Isideti priedu');
        
    case 4:
        console.log('Uzpilti vandeniu');

    case 5:
        console.log('Ismaisyti');
        break;

    default:
        console.log('Tokio etapo nera.');
        break;
}

console.log('----------------------------');

const stotele = 'N. Vilnios ziedas';

switch (stotele) {
    case 'N. Vilnios ziedas':
        console.log('N. Vilnios ziedas');
    case 'Parko':
        console.log('Parko');
    case 'Geniu':
        console.log('Geniu');
    case 'Tremtiniu':
        console.log('Tremtiniu');
    case 'Rudens':
        console.log('Rudens');
    case 'Karaliaus Mindaugo':
        console.log('Karaliaus Mindaugo');
    case 'Zaliasis tiltas':
        console.log('Zaliasis tiltas');
        break;

    case 'Zaliasis tiltas':
        console.log('Zaliasis tiltas');
    case 'Lvovo':
        console.log('Lvovo');
    case 'Vasaros':
        console.log('Vasaros');
    case 'Rudens':
        console.log('Rudens');
    case 'Tremtiniu':
        console.log('Tremtiniu');
    case 'Geniu':
        console.log('Geniu');
    case 'Parko':
        console.log('Parko');
    case 'N. Vilnios ziedas':
        console.log('N. Vilnios ziedas');
        break;

    default:
        console.log('Tokios stoteles marsrute nera.');
        break;
}