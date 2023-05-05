// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px grey ';
// var input =document.querySelector('input');
// input.value='Hello world';

// var submit =document.querySelector('input[type="submit"]');
// submit.value="Send";

// var items = document.querySelector('.list-group-items');
// items.style.color='red';

// var lastitem = document.querySelector('.list-group-items:last-child');
// lastitem.style.color='blue';

var seconditem = document.querySelector('.list-group-items:nth-child(2)');
seconditem.style.backgroundColor='green';

var thirditem = document.querySelector('.list-group-items:nth-child(3)');
thirditem.textContent='';

//Query Selector all//

var target = document.querySelector('li:nth-child(2)');
console.log(target);
target.style.color='green';
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor ='green';
}
// for(var i=0;i<odd.length;i++){
//     even[i].style.backgroundColor ='grey';
// }