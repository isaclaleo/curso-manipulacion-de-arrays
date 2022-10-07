// El método join une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.

//join es unirlo por un separador en especifico



// join es para unificar de acuerdo a un patron 
// split para separar de acuerdo a un patron
const elements = ['fire', 'water', 'air','earth'];

let rsp = '';
const sperador = ' & ';

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    rsp = rsp + element + sperador;
}
// metodo join respeta el ultimmo separador dejandolo libre
const joinrsp = elements.join(' & ');


//Split  
const title ="The last of us";

const urlgame = title.split(' ').join(' & ').toLowerCase();

console.log('url juego con split', urlgame);
console.log('con for un join:', rsp);
console.log('con metodo join:', joinrsp);

// Clas 21 Reto

const solution1 = "La forma de correr Python";
const solution2 = "La API para nunca parar de aprender";
const solution3 = "Curso de arrays";

// Con una function
function funtjoin(solution1) {
    return solution1.split(" ").join("-").toLowerCase();
}

const oracion1 = funtjoin(solution1);
const oracion2 = funtjoin(solution2);
const oracion3 = funtjoin(solution3);
console.log('Primera oracion', oracion1);
console.log('Segunda oracion', oracion2);
console.log('Tercera oracion', oracion3);

//Con metodo de una linea 
const frase1 = solution1.split(' ').join('-').toLowerCase();
const frase2 = solution2.split(' ').join('-').toLowerCase();
const frase3 = solution3.split(' ').join('-').toLowerCase();

console.log('frase 1 oracion', frase1);
console.log('frase 2 oracion', frase2);
console.log('frase 3 oracion', frase3);