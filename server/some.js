// El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

// some solo imprime si es true or false dependiendo de la condicion;

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
const dates = [{
    starDate: new Date(2022, 1, 1),
    endDate: new Date(2022, 1, 1),
    titile: 'cita de trabajo',
},
{
    starDate: new Date(2022, 1, 1),
    endDate: new Date(2022, 1, 1),
    titile: 'cita de trabajo',
},
{
    starDate: new Date(2022, 1, 1),
    endDate: new Date(2022, 1, 1),
    titile: 'cita de trabajo',
},
{
    starDate: new Date(2022, 1, 1),
    endDate: new Date(2022, 1, 1),
    titile: 'cita de trabajo',
}
]

const newAppointment = {
    starDate: new Date(2022, 1, 4),
    endDate: new Date(2022, 1, 5),
};

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.starDate, end: date.endDate},
            {start: newDate.starDate, end: newDate.endDate}
        )
    })
}
console.log('dates',isOverlap(newAppointment));

// Clase 14 Reto 

const retoTrue = [1, 3, 5, 7, 10, 11];
const retoFalse = [1, 3, 5];

// Con function
function funtsome(retoTrue) {
    return retoTrue.some(item => item % 2 === 0);
}

//Con una sola linea
const retoss = retoTrue.some(item => item % 2 === 0);
const retosss = retoFalse.some(item => item % 2 === 0);


const retoT = funtsome(retoTrue);
const retoF = funtsome(retoFalse)
console.log('Reto True',retoT);
console.log('Reto Flase', retoF);
// emprime con una sola linea
console.log('Reto true', retoss);
console.log('Reto flase', retosss);