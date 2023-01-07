// var title = document.getElementById("header-title");
// console.log(title);
// title.textContent = "hello"
// var list = document.getElementsByClassName("list-group-item");
// //console.log(list[0]);
// list[3].style.backgroundColor = "green";
// list[0].style.fontWeight = "bold";
// list[1].style.fontWeight = "bold";
// list[2].style.fontWeight = "bold";

//var li = document.getElementsByClassName("list-item");
//li[0].style.backgroundColor = "red";
var item = document.querySelector('.list-group-item:nth-child(1)');
item.style.backgroundColor = "green";

var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.color = "white";

var list = document.querySelectorAll('.list-group-item');
list[2].style.backgroundColor = "violet";

var odd = document.querySelectorAll('li:nth-child(odd)');

for(i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green";
}






