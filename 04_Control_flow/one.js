// if

const isUserloggedIN = true

//if(true){
//  console.log("Executed")
//}
//
//const temperature = 41
//
//if(temperature === 40){
//  console.log("less than 50")
//}else{
//  console.log("temperature is greater than 50")       //output : temperature is greater than 50
//}

// condition check => < , > , <= , >= , == , != , ===(type of check as well as equal) , !==

//const score = 200
//
//if(score > 100){
//  let power = "fly"
//  console.log(`User power : ${power}`)             //output : User power : fly
//}

const balance = 1000

//if(balance > 500 ) console.log("test") , console.log("test2")   // it's not good pracitce 

//if(balance < 500){
//  console.log("less than 500")
//}else if(balance < 750){
//  console.log("less than 750")
//}else if ( balance < 900){
//  console.log("less than 900");
//
//}else{
//  console.log("less than 1200")            //output : less than 1200
//  
//}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard &&  2==2){
  console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User logged in")
}