
let a = 200
if(true){
  let a = 10 ; 
  const b = 20 ; 
  //var c = 30;
  //console.log("inner :" , a)         output: inner : 10
}
//console.log("outer :" , a)           output : outer 200

//console.log(a);         //a is not defined , a is defined inside the scope
//console.log(b);         // same for b
//console.log(c);           // but c var value comes out value from the scope that is why we never used var



function one(){
  const username = "Abhishek"

  function two(){
    const website  = "youtube"
    console.log(username)
  }
  //console.log(website)           // it shows error because it call outside of the scope
  two()                          //output: Abhishek  (if we calls one then for username goes in function one and print)
}
one()


if(true){
  const username = "abhishek"
  if(username == "abhishek"){
    const website = " youtube"
    //console.log(username + website)         //output: abhishek youtube
  }
  //console.log(website)  => it shows error because it call outside of scope
}
//console.log(username)   => it shows error because it call outside of scope




//+++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
  return num +1
}


addTwo(5)               // it shows error but we can see in above functin isn't showing any error. But in this case we hold addTwo in variable that why reason it shows error and also known as hoisting and execution context
const addTwo = function(num){
  return num +2
}

addTwo(5)        // it doesn't show any error
