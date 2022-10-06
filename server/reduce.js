// Reduce se reduce a un solor valor 

const totals = [1,3,4,5,6];
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log('sum',sum);

// VS

const reduce = [3,5,6,7,8];
let suma = 0;
const rpt = reduce.reduce((suma, item) => suma + item, 0);
console.log('rpt', rpt);
