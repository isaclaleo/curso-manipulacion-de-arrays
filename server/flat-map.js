// Flat map

// El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

const gamers = [
    {id: 1, name: 'isac', attributes: ['plus', 'extra']},
    {id: 2, name: 'luis', attributes: ['plus', 'exencial']},
    {id: 3, name: 'erick', attributes: ['plus']},
    {id: 4, name: 'isac', attributes: ['plus', 'premiun']},
];

const plus = gamers.map(gamers => gamers.attributes).flat();
console.log('metodo separado', plus);
// Flatmap
const plus2 = gamers.flatMap(gamers => gamers.attributes);
console.log('Metodo flatmap', plus2);

//  Reto de los calendarios

const calendars ={
    firtsCalendar:[
        {
            startDate: new Date(2022,2,2),
            endDate: new Date(2022,2,2),
            title: 'Cita 3',
        },
        {
            startDate: new Date(2022,2,3),
            endDate: new Date(2022,2,3),
            title: 'Cita 4',
        },
    ],
    secondCalendar:[
        {
            startDate: new Date(2022,2,4),
            endDate: new Date(2022,2,4),
            title: 'Cita 3',
        },
        {
            startDate: new Date(2022,2,5),
            endDate: new Date(2022,2,5),
            title: 'Cita 4',
        },
    ],
    treerthCalendar:[
        {
            startDate: new Date(2022,2,6),
            endDate: new Date(2022,2,6),
            title: 'Cita 3',
        },
        {
            startDate: new Date(2022,2,7),
            endDate: new Date(2022,2,7),
            title: 'Cita 4',
        },
    ],
};

const  calendario = Object.values(calendars).flatMap(item => {
    return item.map(date => date.title);
});
console.log('Reto de calendario',calendario);

// Clase 25 Reto 

const solutions = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];

// con funtion 
function reto(solutions) {
        const lineas = solutions.flatMap(word => word.split(' '));
        return lineas.length;
};

const retos = reto(solutions);
console.log('Letras & numeros', retos);

// 
const letras = solutions.flatMap(words =>{ 
    return words.split(' ');

});
console.log('una linea', letras);



// una linea contando el total de espacios por el split de  cada una de los arrays
// const letras = solutions.flatMap(words => {
//     return words.split(' ').join(' ').length;
// });
