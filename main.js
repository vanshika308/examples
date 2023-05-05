//Examine the document object
//console.dir(document);
var items = document.getElementsByClassName('list-group-items');
console.log(items);
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}