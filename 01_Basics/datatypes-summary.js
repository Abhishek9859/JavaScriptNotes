// Primitive

// 7 types : String , Number , Boolean , null , undefined, Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 342346576324235453n;





// Reference (Non-primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj" , "doga"];    //=> array

let myObj = {               //=> Object
  name: "abhishek", 
  age: 22,
}

const myFunction = function(){
  console.log("Hello World")
}



//console.log(typeof score)                      // => number
//console.log(typeof scoreValue)                // => number
//console.log(typeof outsideTemp)              // => object
//console.log(typeof isLoggedIn)              // => boolean
//console.log(typeof id )                    // =>  symbol
//console.log(typeof anotherId)             // =>  symbol
//console.log(typeof bigNumber)            // => bigint
//console.log(typeof heros)               // => object
//console.log(typeof myObj)              // =>  object
//console.log(typeof myFunction);       // => function

//https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Meomory type => Stack and Heap 
// Stack(Primitive)=> it used in primitive value             ,              Heap(Non-primitive)=>it is used in non-primitive value
//      |                                                                            |
// it takes copy of value                     it gives refernce of a value , whatever we commit to change is also changes in original value


let myYoutubename = "abhishekdotcom";
let anothername =  myYoutubename;

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.ccom",
    upi : "user@abi"
}

let userTwo  = userOne

userTwo.email = "abhishek@google.com"

console.log(userOne.email);
console.log(userTwo.email);