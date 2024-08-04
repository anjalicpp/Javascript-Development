const myNums = [1,2,3,4,5,6,7,8,9,10]

myNams.filter((num)=>num>4)
console.log(newNums);//op:[5,6,7,8,9,10

const newNums = myNums.filter((num)=>{
  return num>4
})

console.log(newNums);
****************************************
  const myNum = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map((num)=>num+10)//update each num by num+10
console.log(newNums);//[11,12,13,14,15,16,17,18,19,20]

//const newNums = myNumbers.map((num)=>{num+10)}
console.log(newNums);//error because we used scopeie{} so we need to use retuen keyword

//CHAINING
for eg:const newNums = myNum.map(method).map(method).filter(condition)
 ex:I want to increase each num by 10 and add1 and filter numbers greater than 40

const newNum = myNum.map((num)=>num+10)
                    .map((num)=>num+1)
                    .filter((num)=>num>=40)
console.log(newNums);//[41,51,61,71,81,91,10]



