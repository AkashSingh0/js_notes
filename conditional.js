const balance=760;
if (balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1000");
}


const userLoggedIn=true
const debitcard=true

if(userLoggedIn && debitcard){
    console.log("Allow to buy course")
}


let val;
val=5??3
let val2=undefined??null
console.log(val2);

//terniary operator

const iceTea=100
iceTea<=80 ? console.log("less than 80"): console.log("more than 80")