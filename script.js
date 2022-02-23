let add = document.querySelector("#task");
let button = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let itemsArray = localStorage.getItem('kisiler') ? JSON.parse(localStorage.getItem('kisiler')) : [];
let element = document.createElement("li");
let data = JSON.parse(localStorage.getItem('kisiler'));

todolist()
function newElement() {
  let inputValue = add.value;
  if (inputValue.trim() == "") {
    inputValue = "";
  } else {
    
    itemsArray.unshift(inputValue);
    localStorage.setItem('kisiler', JSON.stringify(itemsArray));
    add.value = "";
    todolist()
    console.log(inputValue)
  }
}
function todolist() {
  let newLiTag = ""
  itemsArray.forEach(element => {
    newLiTag += `<li>${element}</li>`
  });
  list.innerHTML = newLiTag
}