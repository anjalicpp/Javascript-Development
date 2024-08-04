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

**********************************************
REDUCE FUNCTION:
  
  const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc,curval){
  console.log('acc:${acc} and currval:${currval}');
  return acc+currval},0);//this zero is initial value passed to accumulator 
}
//we can set any initial value to pass to accumulator.
This parameter is important for accumulator as initially it does not know initial value.
  The initial value is first value accumulator takes after that it will take vale according to the function defined.

  const myToatl = myNums.reduce(function(acc,currval))
{
  console.log('acc:${acc} and currval :${currval});
              return acc + currval},0)
console.log(myTotal);
//OP: acc:0 and currval:1
      acc:1 and currval:2
      acc:3 and currval:3
      6

Same function can be written with the help of arrow function:
  const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

so in short basic structure of the reduce is:
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

//another example:

const shoppingCart = [
  {
    itemName: "js course",
    price:2999
  },
   {
    itemName: "py course",
    price:999
  },
   {
    itemName: "mobile dev course",
    price:5999
  },
   {
    itemName: "data science course",
    price:2999
  },
  
]
const PriceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(PriceToPay);


  



