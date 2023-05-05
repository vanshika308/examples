var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//Deelete event
itemList.addEventListener('click',removeItem);




function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item');
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem.value));
   //create delete button element
   var deleteBtn= document.createElement('button');

   //add classes to delete btn
   deleteBtn.className='btn btn-danger btn-sm float-right delete';
   deleteBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deleteBtn);
   
   var editBtn= document.createElement('button');

   //add classes to delete btn
   editBtn.className='btn btn-danger btn-sm float-right delete';
   editBtn.appendChild(document.createTextNode('E'));
   li.appendChild(editBtn);
    itemList.appendChild(li);
} 

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}