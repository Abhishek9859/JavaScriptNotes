function SetUserName(username){
  //complex DB calls

  this.username = username
}

function createUser(username , email , password){
  SetUserName.call(this  ,username)                           // (.call) is used to call explict function. Also need to used this keyword for reference of username function/

  this.email = email
  this.password = password
}

const chai = new createUser("chai" , "chai@fb.com" , "123")
console.log(chai)