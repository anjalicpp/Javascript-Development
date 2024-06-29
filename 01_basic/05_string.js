const name= "anjali"
const repo = 50

console.log(name+repo+"15");//op:anjali5015
console.log(name+repo+15);//op:anjali5015
//console.log(name+repo+abc);//op:error
//string interpolation

console.log('he my name is${name} and my repo count is${repo}');
//Ways to declare the strings
const game= new String('Anjali');//the typeof string here is object
console.log(game);//Anjali
console.log(game[0]);//A
console.log(game.length);//6
console.log(game.toLocaleUpperCase());//op:ANJALI==>original string does not changes
console.log(game.charAt(2));//j
console.log(game.indexOf('a'));//op:3

const newstring =game.substring(0,4);
console.log(newstring);
const anotherstr=game.slice(-6,2);//we can only use negative value for slice
console.log(anotherstr);

//Imp methods:slice,trim,replace,split
const newStringOne = "  Anjali  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://anjali.com/anjali%20kumari"
console.log(url.replace('%20','-'));//op:https://anjali.com/anjali-kumari
console.log(url.includes('anjali'))//op:true



