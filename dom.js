var parent = document.querySelector('#items');
parent.parentElement.style.backgroundColor = "skyblue";

var child = document.querySelector('#items');
child.firstElementChild.textContent = "hello item1";

var child = document.querySelector('#items');
console.log(child.firstChild);

var child = document.querySelector('#items');
child.lastElementChild.style.backgroundColor = "yellow";

var sibling = document.querySelector('#items');
console.log(sibling.nextSibling);

var sibling = document.querySelector('#items');
console.log(sibling.previousSibling);

var sibling = document.querySelector('#items');
sibling.previousElementSibling.style.color="purple";

var create = document.createElement('div');
create.className='hello';
create.id='hii';
create.setAttribute('title','div created');

var textnode = document.createTextNode('good day');
create.appendChild(textnode);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(create,h1)
//console.log(h1)



