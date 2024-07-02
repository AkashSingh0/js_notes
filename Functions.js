function addTwoNumbers(number1,number2){
    console.log(number1 === number2);
}
addTwoNumbers(6,"6")


function twonumberis(num1,num2){
    return num1+num2
}
const result=twonumberis(9,1)
console.log("Result: ", result);


function loginUserMessage(username){
    if(username===undefined){
        console.log("plz enter user name")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())


//function +2
//rest operator
function CalculatePrice(...num1){
    return num1;
}
console.log(CalculatePrice(202,119,399,289));



const user={
    username:"Akash",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)



const mynewArray=[199,222,980,678]
function returnSecondaryValue(getArray){
    return getArray[1]
}
console.log(returnSecondaryValue(mynewArray));