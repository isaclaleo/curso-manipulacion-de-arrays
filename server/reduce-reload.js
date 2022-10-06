const items = [1, 4, 3, 4, 4, 3,23, 5];

const rsp = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});

console.log('respuesta1',rsp);

// objctos varios elementos 

const data = [
    {name:"isac", level: "low"},
    {name:"alan", level: "medium"},
    {name:"erik", level: "hight"},
    {name:"moi", level: "low"},
    {name:"richar", level: "medium"},
];

const rsp2 =  data.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});

console.log("respuesta2", rsp2);


// reto calse 12

const reto = [1,2,3,4,5,6,7,8,9, 10];

const retoss = reto.reduce((btw, reto)=>{
    if(reto <= 5){
        btw[reto <= 5] = btw['1-5']++;
    }else if(reto <= 8){
        btw[reto <= 8] = btw['6-8']++;
    }else{
        btw[reto <= 9] = btw['8-9']++;
    }
    return btw;
},{
    '1-5': 0,
    '6-8': 0,
    '8-9': 0
});

console.log('reto', retoss);

// por que ma sale un maldito false

