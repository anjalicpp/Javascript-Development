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

//these are methods to declare object with no difference except literal declartion doesnot create singleton object and other does
//const tinderUser = new Object()
const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "Anjali"
tinderUser.isLoggedin = false

console.log(tinderUser);

const regularUser = {
    email: "somme@gmail.com",
    fullname:{
        userfullName:{
            firstName:"Jyoti",
            lastName:"Rawt"
        }
    }
}

console.log(regularUser.fullname.userfullName.lastName);//op:Rawt

//JoiN Objects into one Methods

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//1Method:
// const obj3 = { obj1, obj2};
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


//2>Method:Assign
const obj3 = Object.assign(obj1 , obj2)
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//.assign has syntax(source,target) so when we have more than 2 arrays good practice id to give empty as source
const obj4= {5:"a",6:"b"}
const obj5 = Object.assign({},obj1,obj2,obj4);
console.log(obj5);//op:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//3Method:Spread operator(glass example)-->990%used

const obj6 = {...obj1 , ...obj2}
console.log(obj6);//op:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 /********************/

 console.log(tinderUser);//op:{ id: '123abc', name: 'Anjali', isLoggedin: false }
 console.log(Object.keys(tinderUser));//op:[ 'id', 'name', 'isLoggedin' ]
 console.log(Object.values(tinderUser));//op:[ '123abc', 'Anjali', false ]
 console.log(Object.entries(tinderUser));//op:[ [ 'id', '123abc' ], [ 'name', 'Anjali' ], [ 'isLoggedin', false ] ] 
//sometimes before using we want to check whether that value exist inobj especially during api we use ownProperty method to check it
 console.log(tinderUser.hasOwnProperty('isLogged'));//op:false


 //----------------
 //Destructuring objects 

 const course = {
    courseName: "js development",
    price:999,
    courseInstructor :"Hitesh"
 }

 const {courseInstructor} = course

 console.log(courseInstructor);//op:Hitesh

 const{courseName:cname} = course//we can use alter name for long names 
 console.log(cname);//js development

//  const navbar = ({company})=>{//whenever we see this it means destrucuring ,used in React

//  }
//  navbar(company="hitesh")


//randomuser me api=>for random api result
//json formatter=>tool to understand the api response

