// Concat
// El método concat es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.

//  para fucionar arrays, no modifica el array original si no genera uno nuevo 

const numbers = [1,3,5,2,4,2,3];
const othersNumbers = [12,43,54,54,23,67];

const newNumbers = [...numbers ];
// con for de un concat
for (let i = 0; i < othersNumbers.length; i++) {
    const element = othersNumbers[i];
    newNumbers.push(element);
}
console.log('concat con for', newNumbers);

// con metodo concat de una linea
const numbersNew = numbers.concat(othersNumbers);

// otra forma de concatenar arrays sprit operation
const numbersNew2 = [...numbers, ...othersNumbers];

// con sprint operation podemos concatener string con los ... mas strin te separa letra por letra
const numbersNew3 = [...numbers,'hola'];
const numbersNew4 = [...numbers, ...'hola'];

// podemos utilizas push para mutar el array y combinar los arryas elemento por elemento
numbers.push(...othersNumbers);



console.log('concat metodo', numbersNew);
console.log('concat metodo sprint', numbersNew2);
console.log('concat metodo sprint con string', numbersNew3);
console.log('concat metodo sprint con string', numbersNew4);
console.log('concat metodo push ', numbers);