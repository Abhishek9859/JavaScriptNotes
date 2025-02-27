const user = {
  username: "abhishek",
  price: 99,

  welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`);        // `this` refer to current context
    //console.log(this)
  }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this)                 //output: {} => becauser `this`  is out of node


//function chai(){
//  let username = "abhishek"
//  console.log(this.username)            //output : undefined  => this is not used in function but we can see only used in only object
//}
//chai()


//const chai = function(){
//  let username = "abhishek"             //output : undefined  => this is not used in function but we can see only used in only object
//  console.log(this.username)         
//}

//chai()

//const chai = () =>{
//  let username = "abhishek"           
//  console.log(this.username)           ////output : undefined  => this is not used in function but we can see only used in only object
//}
//chai()


//const addTwo = (num1 , num2) =>{
//  return num1 + num2
//}
//
//console.log(addTwo(3 ,4) )

//const addTwo = (num1 , num2) => (num1 + num2)   //output: 7 => when we write the code in implicitly .then we don't need to used return statement but in explicity fucntion we used to return statement which is shown in above
//console.log(addTwo(3 ,4) )

const addTwo = (num1 , num2) => ({username: "abhishek"})      // this is way to return an object
console.log(addTwo())


