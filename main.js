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
  const todos = getStorage() || [];
  const n = [...todos, input.value];
  setStorage(n);
  input.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const todos = getStorage();
  todos?.forEach((t) => addTodo(t));
});

// local Storage

const setStorage = function (todo) {
  //   const todos = getStorage() || [];
  //   const n = [...todos, todo];
  localStorage.setItem("todos", JSON.stringify(todo));
};
const getStorage = function () {
  return JSON.parse(localStorage.getItem("todos"));
};

// remove and done function

todosContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    // delete todos
    const storageTodos = getStorage().filter(
      (t) => t !== e.target.parentElement.previousElementSibling.textContent
    );
    setStorage(storageTodos);
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("fa-square-check")) {
    // done todo
    e.target.parentElement.parentElement.style.opacity = ".5";
    e.target.parentElement.previousElementSibling.style.textDecoration =
      "line-through";
  }
});
