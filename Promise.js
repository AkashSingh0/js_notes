//Promise creation
const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    //DB calls, cryptographic related, network related
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

// second promise direct promise create
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

//third promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Alcohol", email: "akashinghbj@gmail.com"})
    }, 1000)
})
promiseThree.then(function(){
    promiseThree.then(function(Akash){
        console.log(Akash);
    })
})

// four promise reject use 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Akash", password: "123"})
        } else {
            reject('ERROR')
        }
    }, 1000)
})
const username = promiseFour.then((Akash) =>{
    // promiseFour,then(function(Akash){
        console.log(Akash);
        return Akash.username
    }).then((username)=>{
        console.log(username);
    }).catch(function(error){
        console.log(error);
    }).finally(() => console.log("The Promise is either resolved or rejected"))


//Promise Five 
const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Pallav", password:"1530"})
        }else{
            reject('Error:JS went Wrong')
        }
    }, 1000)
})

async function consumepromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
} catch(error){
    console.log(error);
}
}
consumepromiseFive()