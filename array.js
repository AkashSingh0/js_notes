const myArr=[1,5,3,8,9]
console.log(myArr[5]);

const myArr2= new Array(1,2,3,4,"abc")
console.log(myArr2);

//Array Methods
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(7)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr)

const newArr=myArr.join()

console.log(myArr)
console.log(typeof newArr);


//slice, splice
console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2= myArr.splice(1,3)
console.log(myn2);

// splice manipulate original array,slice not


const actor=["Allu","Sanjay","Akshay"]
const actress=["Rashmika","Kajal","Katrina"]

// actor.push(actress);
// console.log(actor);

const star=actor.concat(actress)
console.log(star);

//spread operator 
const comedian=["Kapil","Vikalp","Jonny"]
const stars=[...actor, ...actress, ...comedian]
console.log(stars)

console.log(Array.isArray("Akash"))
console.log(Array.from("Akash"))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));