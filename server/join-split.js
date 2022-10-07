//join es unirlo por un separador en especifico




const elements = ['fire', 'water', 'air','earth'];

let rsp = '';
const sperador = ' & ';

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    rsp = rsp + element + sperador;
}
// metodo join respeta el ultimmo separador dejandolo libre
const joinrsp = elements.join(' & ');


console.log('con for un join:', rsp);
console.log('con metodo join:', joinrsp);