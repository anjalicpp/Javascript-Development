//Manipulating the HTML elements 
//popular ones are :getElementById,getElementByClassName,decument.querySelector,decument.querySelectorAll
/*document.getElementById('title')
null
document.getElementById('tittle')
<h1 id=​"tittle" class=​"heading">​ DOM Learning On Chai aur Code​</h1>​
document.getElementById('tittle').id
'tittle'
document.getElementById('tittle').class
undefined
document.getElementById('tittle').classname
undefined
document.getElementById('tittle').className
'heading'
document.getElementById('tittle').getAttribute('id')
'tittle'
document.getElementById('tittle').getAttribute('class')
'heading'

document.getElementById('tittle').setAttribute('class','test')<==doing this will overwrite previous class name heading with test
document.getElementById('tittle').setAttribute('class','test heading')<===now class name will have both test heading
undefined*/
//We can also change style and related properties such as background color and padding etc.
/*
tittle.style.backgroundColor ='green'
'green'
tittle.style.padding ='15px'
'15px'
tittle.style.borderRadius ='15px'
'15px'
*/
//innerContent , innerText ,innerHTML
//Consider the code:div class="bg-black">
  /*  <h1 id="tittle" class="heading"> DOM Learning On Chai aur Code <span style="display: none;">test case</span></h1>
    <p>Lorem ipsum dolor sit amet.</p>
</div>*/
/*
tittle.innerText<----displays only visible elements only
'DOM Learning On Chai aur Code'
tittle.textContent<-----------displays even hidden text of element
' DOM Learning On Chai aur Code test case'
tittle.innerHTML<------dispalys hiddentext as well as thr html tags
' DOM Learning On Chai aur Code <span style="display: none;">test case</span>'
*/
/*//Document.querySelector
document.querySelector('h2')
<h2>​Lorem, ipsum dolor.​</h2>​
document.querySelector('#tittle')
<h1 id=​"tittle" class=​"heading">​…​</h1>​
document.querySelector('.heading')
<h1 id=​"tittle" class=​"heading">​…​</h1>​" DOM Learning On Chai aur Code "<span style=​"display:​ none;​">​test case​</span>​</h1>​

document.querySelector('ul')
<ul>​…​</ul>​
const Myul = document.querySelector('ul')
undefined
Myul.querySelector('li')
<li>​…​</li>​
const turnGreen = Myul.querySelector('li')
undefined
turnGreen.style.backgroundColor="green"
'green'
tur
VM1494:1 Uncaught ReferenceError: tur is not defined
    at <anonymous>:1:1
(anonymous) @ VM1494:1Understand this error
turnGreen.style.padding="15px"
'15px'
turnGreen.innerHTML
'one'
document.querySelectorAll('li')
NodeList(3) [li, li, li]
*/
//imp: Nodelist,HTML collection  is not same as array as arraay has map method but these dont have.
/*
const tempdoc = document.querySelectorAll('li')
undefined
tempdoc
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList
const myarr =[1,2,3]
undefined
myarr
(3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0) */


//now refer to example :
/*const myH1 = document.querySelectorAll('h1')
undefined
myH1
NodeList [h1#tittle.heading]
myH1.style.color = 'green'
VM2141:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:18<---Error because its not an array

    myH1[0].style.color = 'green'
'green'

now we can color all the list item using forEach:
tempdoc.forEach(function (l){
    l.style.backgroundColor = 'green'
})
*/

//Converting HTML Collections into array
/*

const TempClassList = document.getElementsByClassName('list-item')
undefined
TempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
TempClassList.forEach(function(li)){
    cosole.log(li);
}
because it is not an array 
Lets convert it into an array
TempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(TempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
})

//changed list to orange color
const myconvertedArray = Array.from(TempClassList)
undefined
myconvertedArray.forEach(function(li) {
    li.style.color = 'orange'
})

Conclusion:We can use Html collection in manipulation by changing into array and then using for each loop
*/

