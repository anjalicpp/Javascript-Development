// //singleton:agar literal se object bane  to singleton nahi hota aur constructor se bane toh singleton se hota h
// //object can be declared by using literals or constructor (no such performance difference but singleton difference only)
// //1.By literals

const mySym = Symbol("key1")//Symbl defined 


const JsUser = {
    name: "Anjali",//inside name is treated as"name"->string only
    [mySym]:"mykey1",//this is method for symbol<----Interview questin
    age:18,
    location: "Uttarakhand",
    email: "anjali@walmart",
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"]
}
// //ways to access
// console.log(JsUser.email)//op:anjali@walmart :This is mostly used notations
// console.log(JsUser["email"])//op:anjali@walmart:It is also used in cases where . notation is not possible
// //console.log(JsUser[email]);//error because email is treated as string

// //TO access symbol
// console.log(JsUser[mySym]);//op:mykey1
// console.log(typeof(JsUser.mySym));//op:
// //INTERVIEW QUESTION :To define and access symbol this is question of proper syntax


// //We can also freeze the values of object :it doesnot changes values
// //Object Freeze
// Object.freeze(JsUser)
// JsUser.name="Neeraj"
// console.log(JsUser.name);//op:Anjali Because we freezed the object

//We can also add functions in objects
JsUser.greeting = function(){
    console.log("Hello Js User This is function added");
}
console.log(JsUser.greeting());//remeber we freezed the objet earlierTherefore it gives error comment out and then run
//op:Hello Js User This is function added

JsUser.greetingTwo = function(){
    console.log('Hello JS User,${this.name}');//to refer to same object
}
console.log(JsUser.greetingTwo());
