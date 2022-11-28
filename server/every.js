// Every evalua que todos los elementos cumplan con la condicion
// El método everyes inmutable y consiste retornar un valor lógico verdadero si todos los elementos cumplen con la condición establecida en la función (callback).

// Diferencia entre la estructura for y el método every


const numbers =[12,23,34,54,60];

let rst = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 60){
        rst = false;
    }
}
console.log('con for', rst);
// con una sola linea metodo
const rst2 = numbers.every(items => items <= 60);
console.log('con metodo', rst2);

// Reto clase 15

const gamers = [
    {
        name: 'isac',
        age: 34,
    },
    {
        name: 'rocio',
        age: 28,
    },
    {
        name: 'ale',
        age: 22,
    },
    {
        name: 'kelly',
        age: 29,
    },
    {
        name: 'richar',
        age: 20,
    },
    {
        name: 'pao',
        age: 12,
    },
    {
        name: 'mimi',
        age: 26,
    },
    {
        name: 'vivi',
        age: 23,
    },
];

const age = gamers.map(i => i.age);
console.log('Gamers Edades', age);

// metodo
const edad = age.every(age => age <= 15);

const retos = age.every(age => {
    if(age >= 15){
        console.log('menor 15')
    }else{
        console.log('mayor 15')
    }
});
console.log('Reto', retos);
console.log('metodo', edad);

// Reto 16 

const retoT = [2, 4, 6, 8, 10];
const retoF = [1, 3, 5, 7, 10, 11];
const retoFalse = [1, 3, 5];

// con function
function funtevery(retoT) {
        return retoT.every(i => i % 2 == 0);
};

const retoTrue = funtevery(retoT);
const retoFalse1 = funtevery(retoF);
const retoFalse2 =funtevery(retoFalse);

console.log('Reto true ', retoTrue);
console.log('Reto false', retoFalse1);
console.log('Reto false', retoFalse2);

//  en un metodo una linea 
const retoevery = retoT.every(item => item % 2 == 0);
const retoever = retoF.every(item => item % 2 == 0);
const retoeve = retoFalse.every(item => item % 2 == 0);
console.log('metodo una linea', retoevery);
console.log('metodo una linea', retoever);
console.log('metodo una linea', retoeve);

// Metodo SHIFT()
// Elimina el primero del array
const gamerShift = ['fidel', 'isac', 'luis', 'Erik' ];
gamerShift.shift();
console.log(gamerShift);
// ouput [ 'isac', 'luis', 'Erik' ]

// Metodo UNSHIFT()
// Agrega un elemento al inicio del array y devuelve la longitud del array
const gamerUnshift = ['fidel', 'isac', 'luis', 'Erik' ];
gamerUnshift.unshift('Lalo');
console.log(gamerUnshift);
// output [ 'Lalo', 'fidel', 'isac', 'luis', 'Erik' ]

// Metodo SLICE()
// Devuelve una copia del array y la parte que se pide
const gamerSlice = ['q', 'w', 'e', 'r', '1', '2', '3', '4'];
const slicegame =  gamerSlice.slice(0,5);
console.log(slicegame);
// Output [ 'q', 'w', 'e', 'r', '1' ]

// Metodo SPLICE()
// Devuelve un array eliminando elementos y/o  agregando 
const gameSplice = ['q', 'w', 'e', 'r', '1', '2', '3', '4'];
const spliceGame = gameSplice.splice(2,5, 'New Array')
console.log(gameSplice);
// Output [ 'q', 'w', 'New Array', '4' ]


// Metodo Fill
// Cambia los elementos del array por un valor estatico desde del indice de inicio hasta el indice del final Retorna el array final
const gameFill = ['q', 'w', 'e', 'r', '1', '2', '3', '4'];
const fillGame = gameFill.fill(1, 3);
const filGame = gameFill.fill(2, 4, 6);
console.log(fillGame);
console.log(filGame);
// Output ['q', 'w', 'e', 1, 2,   2,   1,   1]
// Output ['q', 'w', 'e', 1, 2,   2,   1,   1]

// Metodo PUSH()
// Añade un o mas alementos al array y cuenta elemtos del nuevo array
const gamePush = ['q', 'w', 'e', 'r', '1', '2', '3', '4'];
const pushGame = gamePush.push('new');
gamePush.push('new array');
console.log(pushGame);
console.log(gamePush);
// Output 9 [ 'q', 'w', 'e', 'r', '1', '2', '3', '4', 'new', 'new array' ]

// Metod POP()
// Elimina el ultimo elemento del array
const gamePop = ['q', 'w', 'e', 'r', '1', '2', '3', '4'];
gamePop.pop();
console.log(gamePop);
// Output ['q', 'w', 'e', 'r', '1', '2','3']

// Metodo REVERSE()
// Invierte el order del array del primero al ultimo y viseversa 
const gameReverse = ['q', 'w', 'e', 'r', '1', '2', '3', '4'];
const reverseGame = gameReverse.reverse();
console.log(reverseGame);
// Output ['4', '3', '2', '1', 'r', 'e','w', 'q'];

// Metodo LASTINDEXOF();
// Busca un elemento en un arrays y devuelve la posicion comienza desde el fina  y si no lo encuentr retorna -1
const gameLastindexof = ['q', 'w', 'e', 'r', '1', '2', '3', '4'];
const lastGmae = gameLastindexof.lastIndexOf('e');
console.log(lastGmae);
// Output 2
