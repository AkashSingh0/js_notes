class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        // return this._email.toUpperCase()
        return `${this._email}Akash`
    }

    set email(value) {
        this._email = value
    }
}
const Akash = new user("akashsinghbj@gmail.com", "1530")
console.log(Akash.email);

//object
const users={
    _email:'akash@gmail.com',
    _password:"Akash1530",

    get email(){
        return this._email.toUpperCase
    },

    set email(value){
        this._email=value
    }
}

const tea = Object.create(users)
console.log(tea.email);