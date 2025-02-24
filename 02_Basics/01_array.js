// array

const myArr = [0 , 1, 2 , 3,  4 ,5]
const myHeroes = [ "Ironman" , "thor" , "blackwidow"];


const myArr2 = new Array(1 ,2 ,3, 4)
console.log(myArr[1]);



// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)            //[  9, 0, 1, 2, 3, 4, 5]       (add intial element in an array)
//myArr.shift()               //[ 0, 1, 2, 3, 4, 5 ]          (remove initial element from an array)
//console.log(myArr)


//console.log(myArr.includes(9))    //output : false
//console.log(myArr.includes(4))    //output : true
//
//
//const newArr = myArr.join()
//console.log(myArr)               //output : [ 0, 1, 2, 3, 4, 5 ]
//console.log(newArr)              //output :0,1,2,3,4,5    (join is used to join the array as well as converted into string )
//console.log(typeof newArr)        //output : string



// slice , splice    => the main difference between slice and splice is whether splice mainpulate the array whereas slice doesn't mainpulate it.

console.log("A" , myArr);              //output : A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1 , 3)

console.log(myn1);                     //output : [ 1, 2 ]
console.log("B " , myArr);             //output : B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1 , 3)

console.log(myn2);                  // output : [ 1, 2, 3 ]
console.log("D " , myArr)           //output : D  [ 0, 4, 5 ]