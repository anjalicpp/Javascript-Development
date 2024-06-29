// const number=300
// console.log(number);

// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length)//op:3
// console.log(balance.toFixed(2));//op:100.00how much precision required after decimal

// const nums=23.457
// console.log(nums.toPrecision(3));//op:23.5

// const nums2=234.568
// console.log(nums2.toPrecision(3));//OP:235
// console.log(nums2.toPrecision(2));//op:2.3e+2

// const hundreds=10000
// console.log(hundreds.toLocaleString('en-IN'));//op:10,000 to convert number accordig to indian system


/**Maths*** */
// console.log(Math);
// console.log(Math.abs(4));//OP:4
// console.log(Math.abs(-3));//op:3

// //abs pos=>pos  neg->pos

// console.log(Math.round(3.5));//op:4
// console.log(Math.ceil(7.3));//op:8

// console.log(Math.min(3,5,8,2,1));//op:1
// console.log(Math.max(3,5,8,2,1));//op:8
// console.log(Math.random());//op:0.7159405567473316  always gives values between 0 and 1
// console.log((Math.random()*10+1))//to get value in integers single digit
// console.log(Math.floor(Math.random()*10+1));

//To get value in a specified range we use:
const max=20
const min=10

console.log(Math.floor(Math.random()*(max-min+1))+min);//op{random values between 10 and 20}
