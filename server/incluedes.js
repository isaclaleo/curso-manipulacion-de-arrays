// INCLUDES
// si un elemento esta dentro del array puesde buscar arryas(numeros) o string(letras)

// El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

const pets = ['cat', 'dog', 'bat', 'fireflyes', 'leon'];

let includeArrays = false;

for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'bat') {
        includeArrays = true;
        break;
    }
}
// metodo una linea includes
const findPet = pets.includes('leon');

console.log('con for', includeArrays);
console.log('includes', findPet);


// Clase 19 Reto Falta completarlo

const solution1 = ["Ana lava la tina", "ana"];
const solution2 = ["Santiago", "tiago"];
const solution3 = ["Nicolas", "ana"];


function searhana(solution1, query) {
    const rest =  solution1.filter(item =>{
        return item.includes(query);
    });
    return rest;
};
const findInclude = searhana(solution1);
// const findInclud = funtincludes(solution2);
// const findInclu = funtincludes(solution3);

console.log(searhana('ana'));
console.log('Encuntra true 2' );
console.log('Encuntra false 3');
