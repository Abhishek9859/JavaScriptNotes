function sayMyName(){
  console.log("A");
  console.log("B");
  console.log("H");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("E");
  console.log("K");
}

// sayMyName   => that is reference of function
//sayMyName()           //that is execution of function


//function addTwoNumbers(number1  , number2){       // inside function number1 and number2 we called parameter
//  console.log(number1 + number2);
//}
//addTwoNumbers(3 ,4)         //3 and 4 given as input is called argument
//
//const result = addTwoNumbers(3 , 4);
//console.log(result)                      // output :undefined      if you want to print a reuslt in console log then you have to return value is pass in function. we see it as below.


function addTwoNumbers(number1 , number2){
  //let result = number1 + number2;
  //return result;        or

  return number1 +number2;
}

const result = addTwoNumbers( 4 , 4)
//console.log("result :" , result)


function loginUserMessage(username){
  //if(username === undefined){                // in javaScript undefined is written as (!) like !username
  if(!username){                               // same meaning of code as written above 
    console.log("Please enter a username")
    return
  }
  return `${username} just logged in`
}

//console.log(loginUserMessage("Abhishek"))
//console.log(loginUserMessage())


function calculateCartPrice(val1 , val2 , ...num1){       // ... that is rest operator and also is seprate operator depends on use case
  return num1
}

//console.log(calculateCartPrice(200 , 400 , 500 , 2000))   // output : [ 500, 2000 ]  "200 and 400 are goes in val1 and val2"


const user ={
  username : "Abhishek",
  price: 199
}

function handleObject(anyObject){
  //return (`Username is ${anyObject.username} and price is ${anyObject.price}`);
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//const objectHandlle =handleObject(user);
//console.log(objectHandlle)                      //output :Username is Abhishek and price is 199

//handleObject(user)                            //output :Username is Abhishek and price is 199
handleObject({                      
  username: "Sam",               //output: Username is Sam and price is 399
  price: 399
})


const myNewArray = [200, 400, 500 , 500]

function returnSecondValue(getArray){
  return getArray[1]
}

//console.log(returnSecondValue(myNewArray))           //output: 400

console.log(returnSecondValue([200 , 400 , 500 , 100]))     //ouput : 400   other way