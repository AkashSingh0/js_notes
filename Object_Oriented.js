//object oriented programming
//object literal
const user={
    username: "Akash",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got details from DB");
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

//constructor
//const promiseOne =new Promise()
//const date = new Date()
//new is a constructor function, constructor function  create multiple instances from one object
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn= isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

}
const userOne = new User("Akash", 12 , true)
const userTwo = new User("Pallav", 14, true)
console.log(userOne.constructor);
console.log(userTwo);