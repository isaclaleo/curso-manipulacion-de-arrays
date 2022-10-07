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