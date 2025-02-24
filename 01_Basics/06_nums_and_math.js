const score = 400
console.log(score )

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))




// ********************** Math  ************************

//console.log(Math)                   
//console.log(Math.abs(-4))              //output: 4 
//console.log(Math.round(4.88));         //output : 5
//console.log(Math.ceil(4.2));           //output :5
//console.log(Math.floor(4.9))           //output: 4
//
//console.log(Math.min(4 ,5,6,77,2));     //output : 2
//console.log(Math.max(4 ,4,5,6,3))       //output : 6

console.log(Math.random())      //output : values between 0 < number < 1

console.log(Math.floor(Math.random()*10) +1);


const min = 10;
const max = 20;
 
console.log(Math.floor(Math.random() * (max - min + 1)) +min)
