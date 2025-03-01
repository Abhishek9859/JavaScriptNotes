const myObject = {
  js : 'javascript',
  cpp : 'c++',
  rb :  "ruby" , 
  swift : "swift by apple"

}

for (const key in myObject) {              // => for in loop is used to iterate object
  console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programing = ["js", "rb", "java" , "cpp"]

for(const key in programing){
  console.log(`${key} programing is ${programing[key]}`)
}

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")

for (const key in map) {              //for in loop is not used for map
  console.log(key)
  
}