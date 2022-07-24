// get element from DOM
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const addBtn = document.querySelector(".btn");
const todosContainer = document.querySelector(".todos");

const addTodo = function (val) {
  const html = `
    <div class="todo">
         <li class="todo-item">${val}</li>
         <div class="icons">
           <i class="fa-solid fa-square-check"></i>
           <i class="fa-solid fa-trash-can"></i>
         </div>
     </div>
    `;
  todosContainer.insertAdjacentHTML("afterbegin", html);
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo(input.value);
  setStorage(input.value)
  input.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const todos = getStorage();
  todos?.forEach((t) => addTodo(t));
});
// local Storage

const setStorage = function (todo) {
  const todos = getStorage() || [];
  const newTodo=[...todos,todo]
  localStorage.setItem("todos", JSON.stringify(newTodo));
};
const getStorage = function () {
  return JSON.parse(localStorage.getItem("todos"));
};
