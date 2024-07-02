class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
   static createId(){
        return `1530`
    }

}

const Akash = new user("Akash")
//console.log(Akash.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const Oneplus = new Teacher("akashsinghbj@gmail.com")
console.log(Oneplus);
console.log(Oneplus.createId());