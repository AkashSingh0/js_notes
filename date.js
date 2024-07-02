let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let mynewDate=new Date("01-14-2023");
console.log(mynewDate.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate=new Date()
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{weekday:"long"})