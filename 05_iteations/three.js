// for of

// ["", "" , ""]         //=>take string in array
//[{} , {} , {}]         //=> take objects in array


const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!"
for(const i of greetings){
  console.log(`Each char is ${i}`)
}


//++++++++++++++   MAP  ++++++++++++++++++++++++

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
// Map always holds unique value and also mantained order of value.


const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")

console.log(map)

for(const [key , value] of map){
  console.log(key , ':-' , value)
}


const myObject ={
  'game1' : 'NFS' , 
  'game2' : 'spiderman'
}

//for(const [key , value] of myObject){        //=> for of loop is not iterable on object
//  console.log(key , ':-' ,value);
//}