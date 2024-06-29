// let score ="Anjali";

// console.log(typeof score);
// //here we are sure score is a number but in generally when value comes fromforms
// //we hve no idea of value the value passed could be a string 33

// let valueinNumber=Number(score)//here made sure that score has been converted to number value
// // now if user passsed on 33abc in score


// console.log(typeof valueinNumber);//op:number
// console.log(valueinNumber)//op:NaN
// //so in javascript we need to keep an eye on what value we get here typeof(33abc)displayed numberand when number is printed then it displays NaN

// //score=null then 
// /*console.log(typeof valueinNumber);//op:number
// console.log(valueinNumber)//op:0
// kep this case in mind if we are comparing against null as in op it displayed 0
// */

// /*score = undefined
// console.log(typeof valueinNumber);//op:number
// console.log(valueinNumber)//op:NaN*/

// /*score=Anjali
// console.log(typeof valueinNumber);//op:number
// console.log(valueinNumber)//op:NaN*/

// //"33"=>33
// //"33abc"=>NaN
// //true=>1 false=>0

// let booleanisLogged=1
// let booleanisLoggedIn=Boolean(booleanisLogged)

// console.log(booleanisLoggedIn);//op:1

// //1=>true
// //0=>false
// //""=>false
// //"hitesh"=>true

// let someNumber=13
// let stringNumber=String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber)
/**********OPERATIONS********* */
let value = 5
let negative = -value
console.log(negative);

let str1 = "heloo"
let str2 = "anjali"
let str3 = str1+str2
console.log(str3);//helooanjali

console.log(str1+str2)//helooanjali

console.log("1"+2);//12
console.log(1+"2");//12

//if string is first=>string
//if number is first=> artithmetic value calculate then string concat
console.log("1"+2+2);//122
console.log(1+2+"2")//32

console.log(+true)//1
console.log(+"")//0

//Comparisons are done with same data type
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0);//true

console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false

//=== does strict check both value and datatype
console.log(1==="1");//false datatype is different

//datatypes are of two types primitive and non primitive
// Primitive(call by value use hota h):7 types:String,Number,Boolean,null,undefined,Symbol,BigInt
// Non Premitive(reference use hota h) :array ,object,function
//Array
const heros=["batman","spiderman","hulk","captainmarvel","drstrange"]
//Object:anyting within cyrly braces
myobj={
    name:"Anjali",
    age:15,
}
//Function

const myFun=function()
{
    console.log("hello");
}
