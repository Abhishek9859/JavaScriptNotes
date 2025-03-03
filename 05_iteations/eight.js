// Reduce
/* 
accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

*/


const myNums =[1 ,2,3]

//const myTotal = myNums.reduce(function (acc , currVal) {
//  console.log(`acc: ${acc} and currVal : ${currVal}`)
//  return acc + currVal
//} , 0)
//console.log(myTotal)
/*  output :  how it works
acc: 0 and currVal : 1
acc: 1 and currVal : 2
acc: 3 and currVal : 3
6
*/

// by using arrrow function

//const myTotal = myNums.reduce((acc , curr) => acc + curr , 0)
//console.log(myTotal)                                                 //output: 6


const shoppingCart  = [
  {
    itemName : "js course",
    price: 2999
  },
  {
    itemName : "py course",
    price: 3999
  },
  {
    itemName : "java course",
    price: 4999
  },
  {
    itemName : "mobileDev course",
    price: 10000
  },
  {
    itemName : "webDev course",
    price: 6999
  },
  {
    itemName : "Datascientist course",
    price: 12999
  },
]


const totalPrice = shoppingCart.reduce((acc , item) => {return acc + item.price }, 0)

console.log(totalPrice)