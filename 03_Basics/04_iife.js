//Immediately Invoked Function Expression (IIFE) => It is used for remove gobal scope pollution. 
//Global Scope Polution => Global scope pollution in JavaScript occurs when variables or functions are defined outside of any function or block, making them accessible from anywhere in the code. This can lead to naming conflicts and unexpected behavior, especially in large projects or when using multiple libraries.


(function chai(){    //named iife

  console.log(`DB  CONNECTED`);        // parenthesis () : we write a function inside the parenthesis for IIFE 
})();


(() => {         // simple iife
  console.log(`DB CONNECTED TWO`);         // we need to  used semicolon (;) after the parenthesis to excute the arrow function or even in normal function beacuse we need to end the first function for excution 
})();


((name) =>{
  console.log(`DB CONNECTED TWO ${name}`)
})('abhishek')