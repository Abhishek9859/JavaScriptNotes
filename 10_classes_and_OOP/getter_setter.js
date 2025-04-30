// mostly we use class based get and set method , rearly used properties based get and set and object based get and set is not used these days

class User{                       
  constructor(email , password){
    this.email = email
    this.password = password
  }

  get email(){
    return this._email.toUpperCase()      // to avoid race between getter and setter, we use underscore and always use same name as method with underscore
  }

  set email(value){
    this._email = value
  }

  get password(){
    //return this._password.toUpperCase() 
    return `${this._password}abhishek`
  
  }
  set password(value){
    this._password = value
  }
  
}

const hitesh  = new User("a@google.com" , "abc")
console.log(hitesh.password)
console.log(hitesh.email)