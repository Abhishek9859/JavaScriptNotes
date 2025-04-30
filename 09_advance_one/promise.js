const promiseOne = new Promise (function(resolve , reject){
  // Do as async task
  // DB calls, cryptography , network

  setTimeout(function(){
    console.log('Asyn task is complete');
    resolve()                               // when we use resolve method then we connect to ".then" after that "Promise consumed" will run
    }, 1000)
})

promiseOne.then(function(){
  console.log("Promise consumed")
})


// this is another way to create promise 
new Promise(function(resolve , reject){
  setTimeout(function(){
    console.log("Asyn task 2");
    resolve()
  } , 1000)
})

.then(function(){
  console.log("Asyn 2 resolved")
})


// how to pass data from promise to .then and learn about data consumption and value to use resolve

const promiseThree = new Promise(function(resolve , reject){
  setTimeout(function(){
    resolve({username: "chai"  , email:"chai@example.com"})        // we can pass object , function whatever you can pass
  }  , 1000)
})

promiseThree.then(function(abhishek){          // in function pass a parameter whatever you want
  console.log(abhishek)
})


//
const promiseFour = new Promise((resolve  , reject)=>{
  setTimeout(function(){
    let error = true

    if(!error){
      resolve({username:'abhishek' , password:"123"})
    }else{
      reject('ERROR: Something went wrong')
    }
    
  }  , 1000)
})

promiseFour.then((user)=>{
  console.log(user)
  return user.username
})
.then((username)=>{
  console.log(username)
})
.catch(function(error){
  console.log(error)
}).finally(()=> console.log("the promise is either resolved or rejected"))



// In this , we use another approach depend on use case one  is case is better

const promiseFive = new Promise(function(resolve , reject){
  setTimeout(function(){
    let error = true

    if(!error){
      resolve({username:'javaScript' , password:"123"})
    }else{
      reject('ERROR: JS went wrong')
    }
  } , 1000)
});

async function consumePromiseFive() {
  try {
  const response = await promiseFive
  console.log(response)
  } catch (error) {
    console.log(error)
  }
}
consumePromiseFive()



// try catch syntax use to fetch data from the api
//async function getAllUsers(){
//  try {
//    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//    const data = await response.json()              // the value come from api is string so we change by json
//    console.log(data)
//  } catch (error) {
//    console.log("E:  " , error)
//  }
//}
//getAllUsers()


//same syntax is written with help .then 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=> console.log(error))


// Note :- Response() data is automatically fetch to .then whatever you name of call back function of .then it doesn't matter