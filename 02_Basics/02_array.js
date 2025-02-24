const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" ,"flash" , "Batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros) 
// console.log(marvel_heros[3][1]);                       // it's not good way access the value

//const allHeros = marvel_heros.concat(dc_heros);                   //it's good way to join two array outptu:[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'Batman' ]
//console.log(allHeros); 
//
//const all_new_heros =  [...marvel_heros, ...dc_heros]                    //it's better way to join two array output :[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'Batman' ]
//console.log(all_new_heros)



//const another_array = [1 ,2, 3, [4, ,5,6],7 ,[6 , 7 , [ 4 , 5] ]];
//
//const real_another_array = another_array.flat(Infinity);   // Array inside array convert into single array output : [  1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
//console.log(real_another_array)




//console.log(Array.isArray("Abhishek"))   // To check Abhishek array is not output : false
//console.log(Array.from("Abhishek"))      // To way to convert into Array Output :['A', 'b', 'h 'i', 's', 'h','e', 'k']


console.log(Array.from({name : "abhishek"}))  //intersting  outptu : [] (output is empty array because it' not converted into array so we have to tell them which part you wanted to converted into array )


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3))