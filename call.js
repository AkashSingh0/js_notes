function setupusername(username){
    this.username=username
    // console.log("Ordered")
}
function createuser(username, email, password){
    setupusername.call(this.username)

    this.email= email
    this.password = password
}
const coffee = new createuser("coffee","coffee@gmail.com","872")
console.log(coffee);