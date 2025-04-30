const user ={
  _email : 'h@abh.com',               // _email underscore shows private properties
  _password: "abc",

  get email(){
    return this._email.toUpperCase()
  },
  set email(value){
    this._email = value
  }
}

const tea  = Object.create(user)
console.log(tea.email)