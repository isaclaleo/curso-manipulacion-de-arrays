// Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).

// En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.

// Find te devuelve el obj si esta o no 
// findindex te devuelve en que posicion se encuentra;


// Diferencia entre la estructura for y los métodos find y findIndex

// Find
const numbers = [1,4,,54,5,4,34,53,23,42,55];

let rsp = undefined;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 100) {
        rsp = element;
        break;
    };
};

console.log('con el for', rsp);
// con el metodo de una linea con find
const rsp2 = numbers.find(item => item === 50);
console.log('metodo find', rsp2);

const players = [
    {name: 'isac', age: 12, id: 12},
    {name: 'fidel', age: 23, id: 42},
    {name: 'jose', age: 34, id: 53},
    {name: 'juan', age: 33, id: 554},
    {name: 'manu', age: 23, id: 65},
    {name: 'jorge', age: 13, id: 233},
    {name: 'mimi', age: 18, id: 232},
]
// metodo find busca el obj especifico de la condicion devuelve un undefinded
const findId = players.find(item => item.id === 554);
// findindex te muestra la posicion del elemento si no encuentra el elemnto devuelve un -1
const findIdex = players.findIndex(item => item.id === 554);
console.log('Find Id', findId);
console.log('find Index', findIdex);