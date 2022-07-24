// get element from DOM
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const addBtn = document.querySelector(".btn");
const todosContainer = document.querySelector(".todos");
const select = document.querySelector(".select");

const addTodo = function (val, compClass = "") {
  const html = `
    <div class="todo ${compClass}">
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
    e.target.parentElement.parentElement.classList.add("completed");
  }
});
select.addEventListener("click", (e) => {
  const todos = [...todosContainer.children];
  todos.forEach((t) => {
    switch (e.target.value) {
      case "all":
        t.style.display = "flex";
        break;

      case "completed":
        if (t.classList.contains("completed")) {
          t.style.display = "flex";
        } else {
          t.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!t.classList.contains("completed")) {
          t.style.display = "flex";
        } else {
          t.style.display = "none";
        }
        break;
    }
  });
});
