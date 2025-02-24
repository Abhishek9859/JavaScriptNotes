//const tinderUser = new Object()      // there is no difference between the decalre an object .there is only difference is that first one is singleton  and other one is not a singleton object.
const tinderUser = {}            //that is other one

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)
// this shows to create an object insde an object
const regualerUser = {
  email: "some@gmail.com",
  fullname:{
    userfullname:{
      firstname: "Abhishek",
      lastname: "Kumar"
    }
  }
}


//console.log(regualerUser.fullname.userfullname.firstname)          //output : Abhishek

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "A" , 4:"B"}

//const obj3 = Object.assign({} , obj1 , obj2)     //used to combine an object

const obj3 = {...obj1 , ...obj2}             //used to combine an object is same as an array
//console.log(obj3)


const users = [
  {
    id:1 ,
    email:"abhishek@gmail.com"
  },
  {
    id:1 ,
    email:"abhishek@gmail.com"
  },
]

users[1].email
//console.log(tinderUser)                    //output:{ id: '123abc', name: 'Sammy', isLoggedIn: false }
//
//console.log(Object.keys(tinderUser))         // output:[ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(tinderUser))       //output:[ '123abc', 'Sammy', false ]
//console.log(Object.entries(tinderUser))      //output:[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
//
//console.log(tinderUser.hasOwnProperty('isLoggedIn'))        //for check values is available or not in object`,      output: true


const course ={
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "abhishek"
}

//ourse.courseInstructor

const {courseInstructor : instructor} =course       // {} => it shows destructoring

//console.log(courseInstructor);      //output; abhishek

console.log(instructor)       // object destructoring that means upon you to make a code clean and simple or not
