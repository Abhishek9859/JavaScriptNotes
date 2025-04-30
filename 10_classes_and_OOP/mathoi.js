const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descriptor)

/* output :PI value is universal that never change beacuse it hard code and number of checks implemented   that's why it is not wirtable , enumerable , configurable.

{ 
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/
//console.log(Math.PI)

const chai = { 
  name: 'ginger chai',
  price: 250, 
  isAvailable: true,

  order: function(){
    console.log("chai nhi bni");
    
  }
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"))

Object.defineProperty(chai, 'name' ,{
  writable: false,
  enumerable:false                   // emuerable false means name properties will not part of iteration.
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for(let [key , value] of Object.entries(chai)){
  if(typeof value !== 'function'){                   // code na phate isliye ye checks lagate h
    console.log(`${key} : ${value}`);
  }
}