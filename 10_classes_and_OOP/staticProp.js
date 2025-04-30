class user{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`Username: ${this.username}`);
  }

  static createId(){
    return `123`
  }
  
}

const abhishek = new user("Abhishek")
//console.log(abhishek.createId())         // static keyword restirct access 

class Teacher extends user{
  constructor(username ,email){
    super(username)
    this.email = email

  }
}

const iphone = new Teacher("iphone" , "i@phone.com")
iphone.logMe()