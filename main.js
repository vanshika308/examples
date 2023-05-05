//Examine the document object
//console.dir(document);
var change = document.getElementsByClassName('list-group-items');
console.log(change);
change[4].style.backgroundColor='green';


var items= document.getElementsByTagName('li');
console.log(items);
items[4].style.fontWeight='bold';