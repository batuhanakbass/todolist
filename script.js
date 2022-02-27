
let add = document.querySelector("#task");
let button = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let itemsArray = localStorage.getItem('kisiler') ? JSON.parse(localStorage.getItem('kisiler')) : [];
let element = document.createElement("li");
let data = JSON.parse(localStorage.getItem('kisiler'));
let toastsucces = document.querySelector("#toastsuccess");
let toasterror = document.querySelector("#toasterror");

todolist()
function newElement() {
  let inputValue = add.value;
  if (inputValue.trim() == "") {
    inputValue = "";
    toasterror.classList.remove('hide')
    toasterror.classList.add('show')
    
  } else {

    itemsArray.unshift(inputValue);
    localStorage.setItem('kisiler', JSON.stringify(itemsArray));
    add.value = "";
    todolist()
    toastsucces.classList.remove('hide')
    toastsucces.classList.add('show')
  }
}
function todolist() {
  let newLiTag = ""
  itemsArray.forEach((element, index )=> {
    let id = `var${index}`
    newLiTag += `<li  onclick="toselect(${index})" id=${index}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id=${id} fill="currentColor" class="bi bi-check-lg" style="float: left;margin: 5px 20px 10px -26px; display:none"  viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
  </svg> ${element} <button type="button" onclick="deleteElement(${index})" class="btn" style="float: right;" >&times;</button>
</li>`
  });
  list.innerHTML = newLiTag
}
function deleteElement(index){
  
  itemsArray.splice(index, 1) 
  localStorage.setItem('kisiler', JSON.stringify(itemsArray)) 
  return todolist();
};

function toastclose(){
  toastsucces.classList.remove('show');
  toastsucces.classList.add('hide');
  toasterror.classList.remove('show');
  toasterror.classList.add('hide');
}
function toselect(index){
  console.log(index)
  let selecttoli = document.getElementById(index)
  
  let id = `var${index}`
  let svg = document.getElementById(id)
  
if (svg.style.display == "none") {
  svg.style.display = ""
selecttoli.style.backgroundColor = 'yellow';
}else{
  svg.style.display = "none"
  selecttoli.style.backgroundColor = '';
}
   
}