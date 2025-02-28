//switch(key){
//  case value:
//
//
//    break;
//  
//  default:
//    break;
//}

const month = 3     // if take string inplace of int then we write {case "string":} like const month = "jan" then we take case "jan":

switch(month){
  case 1:
    console.log("January")
    break;
  case 2:
    console.log("feb")
    break;
  case 3:
    console.log("mar")
    break;                // if break is not write then print next case statememt
  case 4:
    console.log("April")
    break;
  case 5:
    console.log("may")
    break;
  case 6:
    console.log("june")
  
    break;

    default:
      console.log("default case match");
      break;

}