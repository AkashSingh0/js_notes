for(let i=1;i<=10;i++){
    console.log(`outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        console.log(i + '*' + j + ' = ' + i*j );
    }
}

let index=0;
while (index<=10) {
    console.log(`value of index is ${index}`);
    index++;
}


let score=11;
do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10);


//for of loop
const arr=[1,2,6,4,8]

for(const num of arr){
    console.log(num);
}

const greeting="Hello nd Welcome"
for (const greet of greeting) {
    console.log(`${greeting}`)
    break;
}

//Maps
const map= new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('IN',"India")
// console.log(map);

for (const [key , value] of map) {
    console.log(key, ':-', value);
}

//for each loop
const coding=["js","py","cpp","c","java"]
coding.forEach( function (item) {
    console.log(item);
})


coding.forEach((value, index, arr)=>{
    console.log(value, index, arr);
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

//filter map
const mynum = [1,2,5,3,7,8,9]
const newnum=mynum.filter( (num) => num > 4)
console.log(newnum);

//for each
const newnums=[]
mynum.forEach( (num) => {
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums)