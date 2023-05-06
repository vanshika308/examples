var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter =document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);

//Deelete event
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);


function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item');
    var newDescription= document.getElementById('description');
    var enter=newItem.value;
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(enter));
    var p =document.createElement('p');
    p.className='description';
    p.appendChild(document.createTextNode(newDescription.value));
    li.appendChild(p);
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
//filter Items
function filterItems(e){
    //convert to lowercase
    var text=e.target.value.toLowerCase(); 
    //get all li elements
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        var description = item.firstChild.textContent.split(" ")[1];
        console.log(item);
        
        if(itemName.toLowerCase().indexOf(text)!=-1 ||  description.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}