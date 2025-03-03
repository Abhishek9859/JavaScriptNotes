//const coding = ["js" , "ruby" , "java" , "cpp" , "python"]
//
//const values =coding.forEach((item) =>{           // forEach loop doesn't return values.
//  //console.log(item);               //output:js ruby java cpp python
//  return item                       // output : Doesn't show output
//})
//
//console.log(values)    //output :undefined



const myNums = [1 ,2 ,3,4 ,5,6, 7,8,9,10]

//const newNums = myNums.filter((num)=> num >4)        // whenever we use filter , inside you got call back values to access after that we 
//have to provide a condition . whenever the condition is true it returns values

//console.log(newNums)               output: [ 5, 6, 7, 8, 9, 10 ]               

//const newNum = myNums.filter( (num)  => {
//  return num > 4                              // when we use scope {} then we need to return value for output
//})
////console.log(newNum)                   //output:[ 5, 6, 7, 8, 9, 10 ]
//
//
//
//
//const newNums = []
//
//myNums.forEach( (nums) =>{
//  if(nums > 4){
//    newNums.push(nums)
//  }
//} )
//
//console.log(newNums)              //output: [ 5, 6, 7, 8, 9, 10 ]




const books = [
  {title : 'Book one' , genre: 'Fiction' , publish : 1981 , edition: 2004},
  {title : 'Book two' , genre: 'Non-Fiction' , publish : 1992 , edition: 2005},
  {title : 'Book three' , genre: 'History' , publish : 1984 , edition: 2003},
  {title : 'Book four' , genre: 'Non-Fiction' , publish : 1998 , edition: 2011},

  {title : 'Book five' , genre: 'Science' , publish : 1920 , edition: 1998},

  {title : 'Book six' , genre: 'Fiction' , publish : 1943 , edition: 1998},

  {title : 'Book seven' , genre: 'History' , publish : 2011 , edition: 2012},

  {title : 'Book eight' , genre: 'Science' , publish : 2024 , edition: 2025},

  {title : 'Book nine' , genre: 'Science' , publish : 1998 , edition: 2015},
]

let userBooks = books.filter( (bk) => bk.genre  === 'History' )
 
userBooks = books.filter( (bk) => {return bk.publish >= 2000  && bk.genre  === 'History'

})
console.log(userBooks )