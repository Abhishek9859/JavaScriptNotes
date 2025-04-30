const user ={                     // user object is literal
  username: "Abhishek", 
  loginCount: 5,
  signedIn : true,

  getUserDetails: function(){
    //console.log("Got user details from database")
    //console.log(`Username: ${this.username}`)
    console.log(this)
  }

}


//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this)                         //output: {} out of scope doesn't print anything 


function User(username , loginCount , isLoggedIn){
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn
  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }
  //return this
}
const userOne =new User("hitesh", 12 , true)         //new keyword provide new instance or new copy. It prevent override
const userTwo =new User("abhishek" , 13 , true)      // constructor function provide new instance every time
//console.log(userOne)
//console.log(userTwo)
console.log(userOne.constructor);          //output :[Function: User]  => consturctor jo hota h khudi ke bare mein refernce hota h

// ++++++++++++++++++++++ new Keyword+++++++++
//Steps 1. jb hum new keyword use karte then empty object create hota h . Jisko instance bola jta h
//Steps 2. construct function call hota h new keyword ke karan , ye argument ko pack kar ke apko de deta h
//Steps 3. this keyword, jo argument h wo inject ho jata h
//Steps 4. mil jte h function ke anadar



// instance of => basically ye check jo object create kiye usi ka instance aa rha kya . (read from mdn)

