const userEmail = "abhi@google.js"

if(userEmail){
  console.log("Got user email")
}else{
  console.log("Don't have user email")
}

// falsy values

//false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0" , 'false' , " ", [] , {} , function(){}

const useremail = []
//if(useremail.length === 0){
//   console.log("Array is empty");
//}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty");
}
/*     
     we check on website console
false == 0 
output : true

false == ''
true


0 ==''
true
*/


//++++++++++ Nullish coalescing Operator (??): null undefined ++++++++++++++++++++

let val1 ;
//val1 = 5 ?? 10      output: 5     => first value always print

//val1 = null ?? 10     output: 10  => but when null and undefined comes first then print next value

//val1 = undefined ?? 15    output : 15

val1 = null ?? 10 ?? 20      // output: 10  => neglect value null and defined and print real value as we can say
 
console.log(val1)


//++++++  Terniary Opertaor ++++++   it is different from Nullish coalescing Operator (??)

// condition ? true :false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")