let myFrnd =["Allu", "Akshay"]

let FrndPower ={
    Allu:"Sarrainaidu",
    Akshay:"Entertainment",

    getAkshay: function(){
        console.log(`Akshay power is ${this.Akshay}`);
    }
}

Object.prototype.Akash = function(){
    console.log(`Akash is present in all object`);
}
Array.prototype.heyAkash = function(){
    console.log(`Akash says Hello`);
}

FrndPower.Akash();
// FrndPower.heyAkash();
myFrnd.heyAkash();
myFrnd.Akash();

//inheritence
const user={
    name:"akash",
    email:"akashsinghbj@gmail.com"
}
const Teacher = {
    makeTeach: true
}

const TeachSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:TeachSupport
}

Teacher.__proto__= user
console.log(Teacher)
console.log(Teacher.__proto__)

//modern syntex
Object.setPrototypeOf(TeachSupport, Teacher)

let anotherUsername = "Chai_or_Coffee"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"Akash".trueLength()
"Coffee".trueLength()
