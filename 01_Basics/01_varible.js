const accountId = 12345;
let accountEmail = "00abhis@gmail.com";

var accountPassword = "12345";

accountCity = "Noida";        // this is also way to declared but not used it.

let accountState ;            // if we are declared accountState not give any value then it print undefined.

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity , accountState ]);