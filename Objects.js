//singlteon=(same type of object,made from constructor)

//object literals

const mysym= Symbol("key1")

const JsUser={
    name:"Akash",
    [mysym]:"Singh",
    age:21,
    loc:"Blr",
    email:"akashsinghbj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday"]
}
console.log(JsUser["email"])
console.log(JsUser[mysym])

JsUser.email="singhakash@gmail.com"
// Object.freeze(JsUser)
// JsUser.name="Pallav"

console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello Singh!");
}
console.log(JsUser.greeting());

//object +2
const instauser={}

instauser.id="123xyz"
instauser.name="Akash"
instauser.isLoggedIn=false

console.log(instauser);


const linkdin={
    email:"zserfc@gmail.com",
    fullname:{
        firstname:"Akash",
        lastname:"Singh"
    }
}
console.log(linkdin.fullname);

const obj1={1: "b", 2: "a"}
const obj2={3: "d", 5: "f"}

const obj={...obj1, ...obj2}
console.log(obj);

//check property
console.log(instauser.hasOwnProperty('isLoggedIn'));
console.log(Object.keys(instauser))


//Object +3   // de-structure
const course={
    coursename: "JS Videos",
    price: 999,
    courseinstructor:"Hitesh"
}
const {courseinstructor}=course
console.log(courseinstructor);


const myobj={
    js:"javascript",
    py:"Python",
    cpp:"C++"
}
for (const key in myobj) {
    console.log(`${key} is for ${myobj[key]}`);
}
