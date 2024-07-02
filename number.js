const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toNumber);
console.log(balance.toFixed(2));

const othernum= 7353.1234
console.log(othernum.toPrecision(5))

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));


// *******MATHS*******

console.log(Math.abs(-2));
console.log(Math.round(4.76));
console.log(Math.floor(4.98));
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.min(2,5,1,6,9));

console.log(Math.random());

const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
