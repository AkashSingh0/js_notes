class user{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password= password;
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user("Akash","akashsinghbj@gmail.com","1530")

console.log(chai);
console.log(chai.encryptpassword());
console.log(chai.changeusername());


//Behind the seen
function user(username, email, password){
        this.username=username;
        this.email=email;
        this.password= password;
}

user.prototype.encryptpassword= function(){
    return `${this.password}abc`
}
user.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}

const Coffee = new user("Akash","akashsinghbj@gmail.com","1530")

console.log(Coffee);
console.log(Coffee.encryptpassword());
console.log(Coffee.changeusername());