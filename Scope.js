//ignore var:-
var c=300

if(true){
    let a=19
    const b=20
     c=5
}
console.log(c)


function one(){
    const username ="akash"

    function two(){
        const website ="Youtube"
        console.log(username)
       
    }
    two()
    
}
one()

if(true){
    const username="Akash"
    if(username==="Akash"){
        const website="Youtube"
        console.log(username+website);
    }
    // console.log(website);  error
}
// console.log(username);      error


//*************INTERESTING*************//

function addone(num){
    return num+1
}
addone(5)

//expression and function =hoisting
const addtwo=function(num){
    return num+2
}
addtwo(6)


// THIS and ARROW Function
const user={
    username:"Akash",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
    }
}
user.welcomeMessage(this)

// function wine(){
//     console.log(this);
// }
// wine();


//Arrow->
const add = (num1, num2) => {
    return num1+num2
}
console.log(add(8,9))


const add1 = (num1, num2) => (
     num1+num2
)
console.log(add1(8,5));

//IIFE

(function student(){
    console.log(`admitted`);
})();

( ()=>{
    console.log(`admitted`);
})();

( (name) => {
    console.log(`Welcome ${name}`)
})("Akash")