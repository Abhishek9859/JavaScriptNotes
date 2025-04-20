//singleton :- when we declare an object as literal then singleton is not form singleton but when we create an object from constructor then make singleton.
//Object.create :- this is way to create an object using constructor to make singleton



// Object literals

const mySym = Symbol("key1")            //  declare symbol data types

const JsUser = {
  name: "Abhishek",
  "full name" : "Abhishek Kumar",
  [mySym]: "myKey1",                      // this is the way to declare symbol in square bracket like [mySym]
  age : 25,
  location: "noida",
  email : "abhishek@google.com",
  isLoggedIn : false,
  lastLonginDay: ["Monday" , "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])              //this is only way to access the full name
//console.log(JsUser[mySym])


JsUser.email = "abhishek@chatgpt.com"
//Object.freeze(JsUser)                         //it's propogate till abhishek@chatgpt.com , it's not go to next that  is abhishek@microsoft.com becasue of freeze method 
JsUser.email ="abhishek@microsoft.com"
//console.log(JsUser)


JsUser.greeting = function(){
  console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
  console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())