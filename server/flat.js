//  flat El método flat es inmutable que consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una sola dimensión.

// Diferencia entre la estructura for y el método flat
// no hay la estructura de un amatris dentro del leguange de programacion 
// Matriz es un arrya dentro de un array 
const matriz = [
    [1,2,3,4],
    [5,6,7,8,[88,99]],
    [9,10,11,12,[111,122]],
];

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        newArray.push(matriz[i][j]);
    }
}

console.log('Metodo flat con for', newArray);
// Con metodo flat
const rsp = matriz.flat(3);
console.log('Metodo con flat una linea', rsp);