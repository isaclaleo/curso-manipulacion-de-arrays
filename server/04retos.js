//1 Multiplca todos los elementos por dos

const numbers = [100, 23, 34, 53, 34, 54];
const sumaDobles = dobles(numbers);

function dobles(numbers){
    return numbers.map(numbers =>  numbers * 2);
};

console.log(sumaDobles);