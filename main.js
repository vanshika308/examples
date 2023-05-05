//traversing the dom
var itemList = document.querySelector('#items'); 

//parentNode

//itemList.parentNode.style.backgroundColor="#f4f4f4";

//parentElement

itemList.parentElement.style.backgroundColor="#f4f4f4";

//childNodes
//console.log(itemList.childNodes);
//console.log(itemList.children);
itemList.children[1].style.backgroundColor='yellow';

//First child
//console.log(itemList.firstChild);

//firstElementChild

itemList.firstElementChild.textContent='Hello ji';


//lastChild
//console.log(itemList.lastChild);

//lastElementChild
//console.log(itemList.lastElementChild);
itemList.lastElementChild.style.fontWeight='bold';

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='orange';

//createElement

//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','hello div');
//create text node
var newDivText= document.createTextNode('hello Wold');
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');
container.insertBefore(newDiv,h1);

var newDiv1 = document.createElement('div');
newDiv1.className='hii';
newDiv1.id='hii1';
var newDivText1= document.createTextNode('hello Wold');
newDiv1.appendChild(newDivText1);
var container=document.querySelector('div .list-group');
console.log(container);
container.insertBefore(newDiv1,itemList.firstElementChild);
