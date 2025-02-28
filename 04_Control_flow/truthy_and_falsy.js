const userEmail = []

if (userEmail) {
  console.log("Got user email")
}else{
  console.log("Don't have user email")
}

//falsy values
//false , 0 , -0 , BigInt 0n , "" , null  undefined , NaN

//truthy values
//"0" , 'false' , " ", [] , {} , function(){}

//if(userEmail.length === 0){           // to Chech array is empty or not
//  console.log("Array is empty")
//}

const emptyObj = {}

if(Object.keys(emptyObj).length ===0){         // to check object is empty or not
  console.log("Object is empty")
}




//+++++++ Nullish Coalescing Operator(??): null ,undefined 

let val1;
//val1 = 5 ?? 10      // output : 5    => first value always print 

//val1 = null ?? 10      // output : 10  => ignores null and undefined , always print int or next vlaue

//val1 = undefined ?? 10     // output : 10
val1 = null ?? 10 ?? 20      // output : 10  => after null , first number will print

console.log(val1)



//++++++ Ternary Operator +++++++  it's different from the Nullish Coalescing Operator(??)
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
