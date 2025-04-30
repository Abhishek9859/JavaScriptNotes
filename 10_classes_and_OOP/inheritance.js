class user{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`Username is ${this.username}`)
  }
}

class Teacher extends user{
  constructor(username , email , password){
    super(username)
    this.email = email
    this. password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`)
  }
}

const chai = new Teacher("Chai" , "chail@teacher.com" , "123")
chai.addCourse()

const masalaChai = new user("masalaChai")
masalaChai.logMe()

console.log(chai === Teacher)         // false
console.log(chai === user)            // false
console.log(chai instanceof Teacher)  // true
console.log( chai instanceof user)    // true  => instance le ke aate na ki khud aa jta h