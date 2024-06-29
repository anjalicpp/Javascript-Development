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

/*****MEMORY IN JAVASCRIPT***** */

//1.stack=>primitive dataype (we get copy of value)
//2.heap=>non primitive datatypes (we get direct reference of these) 


//Primitive datatypes get copy of values 
let username1="Anjali"
let username2;
username2=username1;
username2="Neeraj"
console.log(username1);
console.log(username2);

//non primitive in heap gets refence of original
let user1={
    name:"neeraj",
    email:"neeru@12"
}
let user2=user1
user2.name="anjali"

console.log(user1.name);//OP:anjali
console.log(user2.name);//op:anjali
//because the changes are made at original value which were given by means of refernce of original value
