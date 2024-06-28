"use strict"//treat all js code as newer version but now mostly not required

//alert(3+3)//works on browser but we are using nodejs

//Datatypes
//number=>2 power 53
//bigint
//string=>""
//boolean
//null=>standalone value
//undefined
//symbols => unique identify mostly used in react

//object

//interview question on type of
console.log(typeof(null));//object
console.log(typeof(undefined))//undefined

 let state=null

 
/*
"use strict";  --> for that Compiler treat all JS code as newer version

All primitive types, except null and undefined, have their corresponding object wrapper types, which provide useful methods for working with the primitive values. When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead.

Null vs Undefined:
Conceptually, 'undefined' indicates the absence of a value, while 'null' indicates the absence of an object (which could also make up an excuse for typeof null === "object").

Null is a keyword and also, it's a stand-alone value.
Undefined is a normal 'Identifier'

NaN(Not a Number):
It's a special type of number value that's occurred when the result of an arithmetic
Operation cannot be expressed as a Number. That's time compile shows NaN as a output.

Number: 
Storing a Integer value in safe range of Integer in JS is -(2^53 -1) --> (2^53 -1).
Note: Outside this range JS not storing Integer value in safely.
Number.MIN_SAFE_INTEGER: We get minimum value in Safe range ==> -(2^53 -1)
Number.MAX_SAFE_INTEGER: We get maximum value in Safe range ==> (2^53 -1)

BigInt:
It's also like a Integer but here you can store larger number but you have to put on the tailing position of every number that's time it's treat like a BigInt data type like 
let x = 9007199254740991n

String: 
It's stored the textual data as like another language does.

Boolean: For storing or returning true or false value.

Symbol: It's stored a unique and immutable value, it's basically use as the 'key' for an Object property.*/


