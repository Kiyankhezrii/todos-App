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

addBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(input.value);
  input.value = "";
});
