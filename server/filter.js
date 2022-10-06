const words = [ 'play', 'box', 'ffut', 'sun'];
const newWords = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length <= 6 ) {
        newWords.push(item);
    }
};

console.log('wors', words);
console.log('new', newWords);

// con una sola linea 
const ruta = words.filter(item => item.length <= 3);

console.log('wors', words);
console.log('new', ruta);

// ejemplo
var juegos = [
    {nombe: 'god',  costo:200, delived: true},
    {nombe: 'elden',  costo:300, delived: false},
    {nombe: 'black',  costo:400, delived: true},
    {nombe: 'mario',  costo:250, delived: false},
    {nombe: 'the last of',  costo:500, delived: true},
];

const entrega = juegos.filter(item => item.delived && item.costo >= 200);
console.log('entrega', entrega);

// buscador
const search = (query) => {
    return juegos.filter(item => {
        return item.nombe.includes(query);
    })
};

console.log(search('the'));


