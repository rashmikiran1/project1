var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  var input1 = document.getElementById('item').value;
  var input2 = document.getElementById('item1').value;
  var input3 = document.getElementById('item2').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';

  const node1 = document.createTextNode(input1);
  const node2 = document.createTextNode(input2);
  const node3 = document.createTextNode(input3);
  // Add text node with input value
  li.appendChild(node1);
  li.appendChild(node2);
  li.appendChild(node3);


  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  let myobt = {
    email : input1,
    work : input2,
    name: input3
  }
  let myobt_serialized = JSON.stringify(myobt);
  localStorage.setItem(input1,myobt_serialized);
  
};

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemName1 = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
function deletelement(e){
let list = document.getElementById("items");
let lastItem = list.lastChild;
list.removeChild(lastItem);
}  
document.write(input1);
document.write(input2);
document.write(input3);    
