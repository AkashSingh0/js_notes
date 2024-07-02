const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI=6
// console.log(Math.PI);

// console.log(descriptor);

const Coffee={
    name: 'BlackCoffee',
    price:199,
    isAvailable: true
}
console.log(Coffee)
console.log(Object.getOwnPropertyDescriptor(Coffee,"name"))

Object.defineProperty(Coffee,'price',{
    Writable:false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(Coffee,"price"))