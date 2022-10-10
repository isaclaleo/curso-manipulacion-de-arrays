// Mutable Funtions 
// Las funciones mutables consisten en cambiar el array original. Estos métodos son:

// push
// unshift
// pop
// shift
// splice
// sort
const products = [
    { title: 'Pizza', price: 121, id: '21' },
    { title: 'Burger', price: 121, id: '22' },
    { title: 'Hot cakes', price: 121, id: '23' },
];

const myproducts = [];
console.log('Products', products);
console.log('myProducts', myproducts);
console.log(' '.repeat(10));

const productIndex = products.findIndex(i => i.id === '22');
if (productIndex !== -1) {
    myproducts.push(products[productIndex]);
    products.splice(productIndex, 1);
};
console.log('Productos', products);
console.log('Mis productos', myproducts);
console.log(' '.repeat(10));

//  Reto eliminar un array sin modificar el array original
const walmart = [
    { title: 'Pizza', price: 121, id: '21' },
    { title: 'Burger', price: 121, id: '22' },
    { title: 'Hot cakes', price: 121, id: '23' },
];
const myWalmart = [];
console.log('walmar', walmart);

const walmartIndex = walmart.findIndex(i => i.price);
if (walmartIndex != -1) {
    myWalmart.pop(walmart[walmartIndex]);
    walmart.splice(walmartIndex, 1);
};
console.log('Walmart', walmart);

//  Update

const players = [
    { game: 'Pizza', age: 20, id: '18' },
    { game: 'Burger', age: 24, id: '22' },
    { game: 'Hot cakes', age: 26, id: '23' },
];

const update = {
    id:'22',
    chsnges: {
        age: 23,
        description:' The last of us'
    }
};

const playersIndex = players.findIndex(item => item.id === update.id);
players[playersIndex] = {
    ...players[playersIndex],
    ...update.chsnges};
console.log('Update', playersIndex);


