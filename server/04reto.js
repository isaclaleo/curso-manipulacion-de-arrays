const retoNumber = [2, 4, 5, 6];
const solution = solutions(retoNumber);

function solutions(retoNumber){
    return retoNumber.map(retoNumber => retoNumber* 2);
};
console.log(solution);