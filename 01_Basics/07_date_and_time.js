let myDate = new Date();
//console.log(myDate.toString());       //output :Fri Feb 21 2025 09:32:32 GMT+0530 (India Standard Time)
//
//console.log(myDate.toDateString());   //output :Fri Feb 21 2025
//
//console.log(myDate.toLocaleString());   //output : 21/2/2025, 9:35:10 am
//
//console.log(typeof myDate)             //output : object



//let myCreateDate = new Date(2025 , 0 , 23)
//console.log(myCreateDate.toDateString())        //output : Thu Jan 23 2025
//
//let myCreateDate1 = new Date(2025  , 1 , 20 , 9 , 38);
//console.log(myCreateDate1.toLocaleString());          //output : 20/2/2025, 9:38:00 am
//
//
//let myCreateDate2 = new Date("2025-02-20");
//console.log(myCreateDate2.toLocaleString())    //output : 20/2/2025, 5:30:00 am



let mycreateDate = new Date("01-14-2023")
//console.log(mycreateDate.toLocaleString());         //output : 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()
//console.log(myTimeStamp);                     //output :1740111319225 (milisecond from 1 jan 1970 according to javaScript set a starting date )
//console.log(mycreateDate.getTime());          //output : 1673634600000 (milisecond from 14 - 01 2023)


console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate)                           //output :2025-02-21T04:24:57.779Z
console.log(newDate.getMonth() + 1)            //output :2
console.log(newDate.getDay());                // output :5


newDate.toLocaleString('default' , {         // to important topic cutomize date and time
  weekday: "long"
  
})
