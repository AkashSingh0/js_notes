function multiple(num){
    return num*5
}
multiple.power=2;

console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);

function createUser(username, price){
    this.username = username
    this.price= price
}

createUser.prototype.increment= function(){
    this.price++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`)
}
const coffee = new createUser("Coffee", 85)
const tea = new createUser("tea", 65)

tea.printMe()
