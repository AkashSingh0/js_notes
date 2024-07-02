class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Cmpname extends user{
    constructor(username, specification, location){
        super(username)
        this.specification=specification;
        this.location=location;
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai =new Cmpname("chai","developer","Delhi")
chai.addCourses()
console.log(new Cmpname("Akash","Oracle","Bengaluru"))

const Coffee = new user("Pallav")
Coffee.logMe()