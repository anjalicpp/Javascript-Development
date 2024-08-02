
const addTwo = (num1,num2)=>{
  return num1+num2;
}
//Another way of writing this same oneliner code is:IT IS CALLED IMPLICIT RETURN
const addTwo = (num1,num2)=>num1+num2;

const addTwo = (num1,num2)=>(num1,num2);//Another way

console.log(addTwo(3,4));

const addTwo = (num1,num2)=>{username:Anjali};//op:undefined=>because we cannot return object like this 
we need to wrap object within parenthesis to return it

const addTwo = (num1,num2)=>({username:Anjali})//op:username:Anjali  This works fine as bbject is now wrapped within (_)

__________________________________________
//Immediately Invoked Function Expression(IIFE)
These are function executed immediately .
Global scope ke pollution se problem hoti h and to remove i we use IIFE 
  (function chai(){
  console.log("DB COnnected");
  })();

(FUNCTION)();   <---format

  //We can also pass arrow functions
(())=>{
  console.log("DB 2");
}();

((name)=>{
  console.log("Db connected");
})('Neraj');//Db connected

Interview Question:Write 2 IIFE in a file
NOTE : if we are writting only 1 IIFE then semicolon can be skipped But if 2 or more IIFE are there then there 
must be semicolon after();

**************************************************************************************
  Javascript Execution Context<---Interview
code has a {}==>Global Execution (stored in this )
It is different for different environment like node,bun etc but in browser we have Window object as discussed in this keyword section
we have:
  1.Global Execution Context
 2.Function Execution Context
  3.Eval Execution Context
1 and2 are imp
{} has MCP(Memory Creation Phase)
Execution Phase

Consider the code :

let val1 =10
let val2 = 5
function addNum(num1,num2)
{
  let total = num1+num2
  return total;
}
let result1 = addNum(val1,val2);
let results2 = addNum(10,2);

1>Global Execution it is reffered by this

2>Memory Phase
val1->undefined
val2->undefined 
addNum->defination
result1->undefined 
result2->undefined

3>Execution Phase
val1=10
val2=5
each time function is called new execution context (contains new variable environment(nve)+execution thread)
it is deleted when code finishes .



  *********************************
  Conditionals:if ,else,switch
  falsy values in js=>false,0,-0,BigInt,On,""(empty string),null,undefined,Nan
except these all are taken as true by default.
  for eg :only empty string is taken as false ."false" is taken as true or "0"is taken as true.

  NOTE:  empty array is also taken as true for therefore there is a method to check for arrray
always check array by its length property to check if array is empty or not.
  if(userEmail.length())console.log("empty array");

to check empty object we use:

if(Object.key(emptyObj).length===0)
  {
    console.log("Object is empty");
  }




