// El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

// some solo imprime si es true or false

const number = [1,2,3,6,5,6,3,2,4,6,5];

let rta = false;

for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }   
}
console.log('Ejercicio1 con for',rta);

const rts2 = number.some(item => item % 2 === 0);

console.log('Ejercicio un sola linea', rts2);

//  ordens conm as objectos

const ordes = [
    {Name: 'isac', total: 123, dileveri: true},
    {Name: 'luis', total: 1434, dileveri: false},
    {Name: 'erik', total: 2323, dileveri: true},
];

const order = ordes.some(item => item.dileveri);
console.log('ordes',order)

// some
const dates = [
    {}
]

