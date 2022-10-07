// Every evalua que todos los elementos cumplan con la condicion
// El método everyes inmutable y consiste retornar un valor lógico verdadero si todos los elementos cumplen con la condición establecida en la función (callback).

// Diferencia entre la estructura for y el método every


const numbers =[12,23,34,54,60];

let rst = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 60){
        rst = false;
    }
}
console.log('con for', rst);
// con una sola linea metodo
const rst2 = numbers.every(items => items <= 60);
console.log('con metodo', rst2);