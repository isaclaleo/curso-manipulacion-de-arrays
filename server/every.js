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