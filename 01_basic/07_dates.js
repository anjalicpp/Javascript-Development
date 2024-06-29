//Dates

let myDate = new Date()
console.log(myDate);//2024-06-29T14:11:03.461Z
console.log(myDate.toString());//op:Sat Jun 29 2024 19:43:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//op:Sat Jun 29 2024
console.log(myDate.toLocaleDateString());//op:29/06/2024
console.log(typeof myDate);//object<--interview question

//Methods to declare date
let mycreatedDate = new Date(2023,0,23);//Month starts with 0-index in js
console.log(mycreatedDate.toDateString());//op:Mon Jan 23 2023

let mynewDate = new Date("2023-01-14")
console.log(mynewDate.toLocaleDateString());//op:14/01/2023

let mynewDate2 = new Date("01-14-2023")
console.log(mynewDate2.toLocaleString());//op:14/01/2023, 00:00:00
