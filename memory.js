// primitive values goes on stack, whereas non primitive values goes on heap
// stack me copy value milta hai and heap me reference matlab ki original value me change hota hai

let myname="AkashSingh"

let anothername=myname
anothername="Piyush"
console.log(anothername);
console.log(myname);


let userOne={
    email:"akashsingh@gmail.com",
    upi:"akash@ybl"
}
let userTwo=userOne

userTwo.email="pallav@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);