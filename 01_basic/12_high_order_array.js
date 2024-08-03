//for of loop:
const arr = [1,2,3,4,5]

for(const num of arr)
  {
    console.log(num);//runs for each element in arr
  }
const greetings = "Hello World";
for(const greet of greetings)
  {
    console.log("Each chat is ${great});
  }

//Maps:object jolds key-value pair,no dublicate values

const map =new Map();
map.set('IN',"India");
map.set('US',"United States");
map.set('Fr',"France");
map.set('IN',"India");

//op:Map(3){
  'IN'=>'India',
    'US'=>"United States",
    'Fr',"France"
}

//Print map element
for(const [key,value] of map)
  {
    console.log(key,':-',value);//Print key-value pair
  }
//Objects

for(const key)
const myObj = {
  js:"javascript",
  cpp:"C++",
  rb:"Ruby",
  swift:"Swift",
}

for(const key in myObj)
  {
    console.log(${'key'} shortcut is for ${myObject[key]});
  }
//difference between for-in loop and for-of loop is for-in gives key which 
then further can be used to retrieve the value.(mostly key =-pair data structure)
  and for-of loop direct values can be retrived(mostly array or direct value data structure)

For-Each:

const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (item)){<---callback function defined
  //item is any variable we can define to name a elemnet of coding,it automatically iterates over each elemnent 
console.log(item);
})

coding.forEach((item)=>{
  console.log(item);
})
//Another Method :
function printMe(item)
{
  console.log(item);
}
coding.forEach(printMe);

//Another method
coding.forEach((item,index,arr)=>{
  console.log(item,index,arr);
})

const myCoding = [
  {
    languageName:"javascript",
    languageFileName:"js"
  },
   {
    languageName:"java",
    languageFileName:"java"
  },
   {
    languageName:"python",
    languageFileName:"py"
  },
]
myCoding.forEach((item)=>{
  console.log(item.languageName);
})//op:javascript ,java,python

//forEach does not returna any value

const values = coding.forEach((item)=>{
  console.log(item);
  return item
})
console.log(values);//op:undefined


