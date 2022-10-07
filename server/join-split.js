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