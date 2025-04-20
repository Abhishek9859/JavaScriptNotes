const names = "abhishek"
const repoCount = 50;

//console.log(name + repoCount + " value")

console.log( `Hello my name is ${names} and my repo count is ${repoCount}`);

const gameName = new String('abhishek--kumar-')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'))

console.log(gameName.toWellFormed());

const newString = gameName.substring(0 , 4);
console.log(newString)

const anotherString = gameName.slice(-8, 15) // we also used negative value for slice method but we need take some good range for print     string in slice.
console.log(anotherString);


const newStringOne = "  abhsihek  "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://anishek.com/abhishek%20kumar"
console.log(url.replace('%20',))
console.log(url.includes('rrr'))

console.log(gameName.split("-"))