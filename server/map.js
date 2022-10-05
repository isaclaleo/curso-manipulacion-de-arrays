const letters = ['a','q','d','g'];


const newLetters =  letters.map(item => item + 'agregue');




// const newLetters = []
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newLetters.push(element + "Agregue");
// };


console.log("Letras", letters);
console.log("nuevas", newLetters);

// ejemplo Numeros  push

const numbers = [23,3,54,65,66];

const newNumbers =[];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    newNumbers.push(numbers * 2);
};
console.log(newLetters);

// ejemplo con map

const numeros = [23423,23435,3534,53,534,345];

// const newNumeros = numbers.map(function(numero){
// return numero * 2
// });

const newNumeros = numeros.map(numero => numero * 2);
console.log(newNumeros);