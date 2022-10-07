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