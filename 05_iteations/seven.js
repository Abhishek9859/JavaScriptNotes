const myNums = [1 ,2,3,4,5,6,7,8,9,10]

//let newNum = myNums.map( (num) => num + 10 )       
//console.log(newNum)                           //output : [  11, 12, 13, 14, 15,  16, 17, 18, 19, 20]
//
//
//const snewNum = myNums.map ( (number) => {return number+10} )
//
//console.log(snewNum)          //in both condition output is remain same but we use scope {} then we must use return keywords for output.



//++++++++++++++++ chaining ++++++++++++++++++


const newNums = myNums 
                .map((num) => num * 10)
                .map((num) => num +1)
                .filter((num) => num >= 40)

     console.log(newNums)           