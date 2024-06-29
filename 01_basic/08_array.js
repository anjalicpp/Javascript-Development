
//array

const myArr=[0,1,2,3,5,"Anjali"]
console.log(myArr[5]);//op:Anjali
//array in js are resizable,collection of similar or diiferent datatypes

const myArr2 =new Array(1,23,4,5)
console.log(myArr2[2]);//4

//ARRAY METHODS
myArr.push(6)
myArr.push(7)
console.log(myArr);//op:[ 0, 1, 2, 3, 5, 'Anjali', 6, 7 ]

myArr.pop()
console.log(myArr);//[ 0, 1, 2, 3, 5, 'Anjali', 6 ]

myArr.unshift(9)//adds 9 at starting of the array
console.log(myArr)//op:[ 9, 0, 1, 2, 3, 5, 'Anjali', 6 ]

myArr.shift();//removes the first element in the list
console.log(myArr)//op:[ 0, 1, 2, 3, 5, 'Anjali', 6 ]

console.log(myArr.includes(9));//-1 because it doesnot exist in array
console.log(myArr.indexOf(3));//3


//Array.join method
const newArr =myArr.join()
console.log(myArr);//op:[ 0, 1, 2, 3, 5, 'Anjali', 6 ]
console.log(newArr);//op:0,1,2,3,5,Anjali,6
console.log(typeof myArr);//op:object
console.log(typeof newArr);//op:string

//SLICE AND SPLICE

