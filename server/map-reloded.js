const peplo = [
    {Name: 'isac', total: 123, dileveri: true},
    {Name: 'luis', total: 1434, dileveri: false},
    {Name: 'erik', total: 2323, dileveri: true},
];

// const ruta = peplo.map(item => item.total);
// console.log('original',peplo)
// console.log('ruta', ruta);

// añadir array
// const ruta2 = peplo.map(item => {
//     item.taxe = .19;
//     return item
// });

// console.log('ruta2', ruta2)

// clonar  sin referencia a memoria
const ruta3 = peplo.map((item) => {
    return {
        ...item,
        taxes: .19
    };
});
console.log('ruta3', ruta3);
console.log('peplo', peplo);