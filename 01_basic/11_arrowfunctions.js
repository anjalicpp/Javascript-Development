
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

