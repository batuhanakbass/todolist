var add = document.querySelector("#task");
var button = document.querySelector("#liveToastBtn");
var list = document.querySelector("#list");
let itemsArray = localStorage.getItem('kisiler') ? JSON.parse(localStorage.getItem('kisiler')) : [];
let element = document.createElement("li");

function newElement() {
  if (add.value.trim() == "") {
    add.value = "";
  } else {
    itemsArray.unshift(add.value);
    localStorage.setItem('kisiler', JSON.stringify(itemsArray));
    let data = JSON.parse(localStorage.getItem('kisiler'));
    console.log(data)
    add.value = "";
  }
  
}

console.log(data)