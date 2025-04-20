const coding = ["js" , "ruby" , "java" , "cpp" , "python"]

coding.forEach( function (item){     // we used call back function in for each loop . function is call back that why we can't write name of a function
  console.log(item)
})


coding.forEach((value) =>{
  console.log(value)
})



//function printMe(item){
//  console.log(item);
//}
//coding.forEach(printMe)       // only give refernce



//coding.forEach((item , index ,arr)=>{
//  console.log(item , index , arr)
//})


const myCoding =[
  {
    languageName : "javaScript",
    languageFileName :"js"
    
  },
  {
    languageName : "java",
    languageFileName :"java"
    
  },
  {
    languageName : "pyhton",
    languageFileName :"py"
    
  },
  {
    languageName : "ruby",
    languageFileName :"rb"
    
  },
]

myCoding.forEach((item) =>{
  console.log(`${item.languageFileName} is shortcut of ${item.languageName} `)
})