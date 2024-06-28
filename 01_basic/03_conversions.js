let score ="Anjali";

console.log(typeof score);
//here we are sure score is a number but in generally when value comes fromforms
//we hve no idea of value the value passed could be a string 33

let valueinNumber=Number(score)//here made sure that score has been converted to number value
// now if user passsed on 33abc in score


console.log(typeof valueinNumber);//op:number
console.log(valueinNumber)//op:NaN
//so in javascript we need to keep an eye on what value we get here typeof(33abc)displayed numberand when number is printed then it displays NaN

//score=null then 
/*console.log(typeof valueinNumber);//op:number
console.log(valueinNumber)//op:0
kep this case in mind if we are comparing against null as in op it displayed 0
*/

/*score = undefined
console.log(typeof valueinNumber);//op:number
console.log(valueinNumber)//op:NaN*/

/*score=Anjali
console.log(typeof valueinNumber);//op:number
console.log(valueinNumber)//op:NaN*/

//"33"=>33
//"33abc"=>NaN
//true=>1 false=>0

let booleanisLogged=1
let booleanisLoggedIn=Boolean(booleanisLogged)

console.log(booleanisLoggedIn);//op:1

//1=>true
//0=>false
//""=>false
//"hitesh"=>true

let someNumber=13
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)
/**********OPERATIONS********* */
let value = 5
let negative = -value
