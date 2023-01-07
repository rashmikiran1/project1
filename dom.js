var title = document.getElementById("header-title");
console.log(title);
title.textContent = "hello"
var list = document.getElementsByClassName("list-group-item");
//console.log(list[0]);
list[3].style.backgroundColor = "green";
list[0].style.fontWeight = "bold";
list[1].style.fontWeight = "bold";
list[2].style.fontWeight = "bold";

var li = document.getElementsByClassName("list-item");
li[0].style.backgroundColor = "red";

var tag = document.getElementsByTagName("li");
for(var j=0; j<tag.length; j++){
    tag[j].style.backgroundColor = "violet";
}



